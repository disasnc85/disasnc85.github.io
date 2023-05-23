import {
	AirQualityData,
	AirQualityDataLocation,
	DataSnapshots,
	getAirQualityDataLocation,
	getAirQualityDataSnapshot,
} from "./AirQualityModule";
import { DataLocation, RawAirQualityData } from "./types";

let getAirQualityData = async function (url: string): Promise<Array<RawAirQualityData>> {
	//per andar a recuperare questa chiamata su questa url si usa fetch
	//ogni qualvolta maneggi una function che ritorni una promise puoi utilizzare await ma solo dentro una funzione async
	//puoi usare o then o async e await
	const response = await fetch(url);
	const status = response.ok;

	if (status) {
		return await response.json(); //ogni volta che maneggi una promise devi aspettarla con await
	}
	throw new Error("Data not valid");
};

// getAirQualityData = async function (url: string): Promise<Array<RawAirQualityData>> {
// 	const sensor_3329 = `[{"timestamp":"2023-04-19 16:17:25","location":{"exact_location":0,"indoor":0,"longitude":"11.288830455159294","altitude":"286.7","latitude":"44.72110112235471","id":1677,"country":"DE"},"sampling_rate":null,"sensor":{"sensor_type":{"name":"SDS011","manufacturer":"Nova Fitness","id":14},"pin":"1","id":3329},"sensordatavalues":[{"value":"3.67","id":33778692176,"value_type":"P1"},{"value":"2.70","id":33778692177,"value_type":"P2"}],"id":15031669507},{"timestamp":"2023-04-19 16:14:59","location":{"exact_location":0,"indoor":0,"longitude":"11.288830455159294","altitude":"286.7","latitude":"44.72110112235471","id":1677,"country":"DE"},"sampling_rate":null,"sensor":{"sensor_type":{"name":"SDS011","manufacturer":"Nova Fitness","id":14},"pin":"1","id":3329},"sensordatavalues":[{"value":"3.47","id":33778632612,"value_type":"P1"},{"value":"2.27","id":33778632614,"value_type":"P2"}],"id":15031644136}]`;
// 	const sensor_3330 = `[{"timestamp":"2023-04-19 16:17:25","location":{"exact_location":0,"indoor":0,"longitude":"11.288830455159294","altitude":"286.7","latitude":"44.72110112235471","id":1677,"country":"DE"},"sampling_rate":null,"sensor":{"sensor_type":{"name":"DHT22","manufacturer":"various","id":9},"pin":"7","id":3330},"sensordatavalues":[{"value":"12.00","id":33778692307,"value_type":"temperature"},{"value":"56.30","id":33778692308,"value_type":"humidity"}],"id":15031669565},{"timestamp":"2023-04-19 16:15:00","location":{"exact_location":0,"indoor":0,"longitude":"11.288830455159294","altitude":"286.7","latitude":"44.72110112235471","id":1677,"country":"DE"},"sampling_rate":null,"sensor":{"sensor_type":{"name":"DHT22","manufacturer":"various","id":9},"pin":"7","id":3330},"sensordatavalues":[{"value":"11.90","id":33778632868,"value_type":"temperature"},{"value":"55.10","id":33778632895,"value_type":"humidity"}],"id":15031644233}]`;

// 	return new Promise((resolve, reject) => {
// 		if (url.includes("3329")) {
// 			const p = JSON.parse(sensor_3329); // gli dai una stringa, ritorna un oggetto
// 			resolve(p); //completa la promise e gli passa il suo risultato
// 			return;
// 		}
// 		if (url.includes("3330")) {
// 			const p = JSON.parse(sensor_3330);
// 			resolve(p);
// 			return;
// 		}
// 		reject(new Error("ID not found"));
// 	});
// };

// in qesto modo gli diamo le operazioni da fare e l'array promises conterrà 2 promises in questo caso

const promises: Array<Promise<Array<RawAirQualityData>>> = [
	getAirQualityData("https://data.sensor.community/airrohr/v1/sensor/3329/"),
	getAirQualityData("https://data.sensor.community/airrohr/v1/sensor/3330/"),
];
// mi permette di aspettare un set di promises e finisce quando sono arrivate tutte
const p = Promise.all(promises);
p.then(mapToAirQualityData);

function mapToAirQualityData(promisesResult: Array<Array<RawAirQualityData>>) {
	const firstApiResponse: Array<RawAirQualityData> = promisesResult[0];
	const secondApiResponse: Array<RawAirQualityData> = promisesResult[1];
	const responseLocation: DataLocation = firstApiResponse[0].location;

	const location: AirQualityDataLocation = getAirQualityDataLocation(responseLocation);
	const dataSnapshots: Array<DataSnapshots> = getAirQualityDataSnapshot(
		firstApiResponse,
		secondApiResponse
	);
	const data: AirQualityData = new AirQualityData(dataSnapshots, location);
	showData(data);
}

function showData(data: AirQualityData) {
	//Map
	const mapContainer: HTMLDivElement | null = document.querySelector(".map")!;
	if (mapContainer) {
		const lat = data.location.lat ?? 0;
		const lng = data.location.lng ?? 0;
		mapContainer.innerHTML = getMap({ width: 450, height: 250 }, lat, lng, 18);
	}

	//Crea location name
	const getLocation = (placeId: number, countryCode: string) => {
		let city = "";
		let country = "";
		// dovrebbe essere convertito da una function che torna il nome del posto sulla base del placeID
		if (placeId === 1677) city = "Cento";
		// dovrebbe essere convertito da una function che torna il nome del country sulla base del countrycode
		if (countryCode === "DE") country = "Italia";

		return `${city} (${country})`;
	};
	const locationNameContainer: HTMLDivElement = document.querySelector(
		".air-quality-item-container .card-title"
	)!;
	const placeID: number | undefined =
		typeof data.location.placeId === "string"
			? Number.parseInt(data.location.placeId)
			: data.location.placeId;
	locationNameContainer.innerHTML = getLocation(placeID ?? 0, data.location.country?? "IT");

	// crea uno snapshot-data per ogni snapshot
	const snapshotsContainer = document.querySelector(".air-quality-item-container .card-body")!;
	data.dataSnapshots.forEach((snapshot) => {
		const snapshotElement = getSnapshot(snapshot);
		snapshotsContainer.append(snapshotElement);
	});
	console.log(data.dataSnapshots);
}

function getMap({ width = 450, height = 250 }, lat:number, lng:number, zoom = 18) {
	const key = "";
	return `<iframe width="${width}" height="${height}" style="..."
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/view?key=${key}&center=${lat},${lng}&zoom=${zoom}&maptype=satellite"
                    >
                    </iframe>`;
}

function getSnapshot(snapshot:DataSnapshots) {
	const snapshotElement = document.createElement("div");
	snapshotElement.className = "snapshot-data card mt-3";

	const snapshotValues = snapshot.values
		.map(v => {
			let value = "0";
			let type = "";

			let v1 :number = v.value ? Number.parseInt(v.value):0;

			switch (v.value_type) {
				case "humidity":
					type = "Umidità";
					value = `${Math.round(v1)}%`;
					break;
				case "temperature":
					type = "Temperatura";
					value = `${Math.round(v1)}°C`;
					break;
				case "P1":
					type = "PM 10";
					value = `${v.value}`;
					break;
				case "P2":
					type = "PM25";
					value = `${v.value}`;
					break;
			}

			return `<li class="list-group-item d-flex">
                        <div style="width: 150px">${v.value_type}</div>
                        <div>${value}</div>
                    </li>`;
		})
		.reduce((c, p) => c + p);

	const dt = new Date(snapshot.timestamp);

	const content = `<ul class="b-1 list-group list-group-flush">
                        ${snapshotValues}
                    </ul>
                    <div class="card-body" style="text-align: right">
                        <strong> ${dt.toLocaleDateString("it-IT")} ${dt.toLocaleTimeString(
		"it-IT"
	)}</strong>
                    </div>
                    `;

	snapshotElement.innerHTML = content;
	return snapshotElement;
}

