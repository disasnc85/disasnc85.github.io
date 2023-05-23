export class AirQualityData {
		constructor(dataSnapshots, location) {
		// @ts-ignore
		this.dataSnapshots = dataSnapshots;
		// @ts-ignore
		this.location = location;
	}
}
export class AirQualityDataLocation {
	constructor(lat, lng, country, placeId) {
		// @ts-ignore
		this.lat = lat;
		// @ts-ignore
		this.lng = lng;
		// @ts-ignore
		this.country = country;
		// @ts-ignore
		this.placeId = placeId;
	}
}

export function getAirQualityDataLocation({ latitude, longitude, country, id }) {
	if (
		typeof latitude === "string" &&
		typeof longitude === "string" &&
		typeof country === "string" &&
		typeof id === "number"
	) {
		const lat = Number.parseFloat(latitude);
		const lng = Number.parseFloat(longitude);
		if (isNaN(lat) || isNaN(lng)) {
			throw new Error(" Are you serious???");
		}

		return new AirQualityDataLocation(lat, lng, country, id);
	}
	throw new Error("Not a object");
}

export function getAirQualityDataSnapshot(firstApiResponse, secondApiResponse) {
	if (firstApiResponse instanceof Array) {
		return firstApiResponse.map((singleResult, index) => {
			const values = [
				...singleResult.sensordatavalues,
				...secondApiResponse[index].sensordatavalues,
			];
			const timestamp = singleResult.timestamp;
			return {
				values,
				timestamp,
			};
		});
	}
	throw new Error("Not a instance of Array");
}

