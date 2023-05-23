import { DataLocation, RawAirQualityData, SensorDataValues } from "./types";

export class AirQualityData {
	constructor(dataSnapshots: Array<DataSnapshots>, location: AirQualityDataLocation) {
		this.dataSnapshots = dataSnapshots;
		this.location = location;
	}
	public dataSnapshots: Array<DataSnapshots>;
	public location: AirQualityDataLocation;
}
export class AirQualityDataLocation {
	public lat: number | undefined;
	public lng?: number;
	public country?: string;
	public placeId: number | string; // union type
}

export const getAirQualityDataLocation = function (location: DataLocation): AirQualityDataLocation {
	const latitude = location.latitude;
	const longitude = location.longitude;
	const country = location.country;
	const id = location.id;

	const lat = latitude ? Number.parseFloat(latitude) : 0;
	const lng = longitude ? Number.parseFloat(longitude) : 0;

	if (isNaN(lat) || isNaN(lng)) {
		throw new Error(" Are you serious???");
	}

	const airQualityDataLocation = new AirQualityDataLocation();
	airQualityDataLocation.lat = lat;
	airQualityDataLocation.lng = lng;
	airQualityDataLocation.country = country;
	airQualityDataLocation.placeId = 0;

	return airQualityDataLocation;
};

export type DataSnapshots = {
	values: Array<SensorDataValues>;
	timestamp: Date;
};

export function getAirQualityDataSnapshot(
	firstApiResponse: Array<RawAirQualityData>,
	secondApiResponse: Array<RawAirQualityData>
): Array<DataSnapshots> {
	return firstApiResponse.map((singleResult, index) => {
		const values = [...singleResult.sensordatavalues, ...secondApiResponse[index].sensordatavalues];
		const timestamp = singleResult.timestamp;
		return {
			values,
			timestamp,
		};
	});
}
