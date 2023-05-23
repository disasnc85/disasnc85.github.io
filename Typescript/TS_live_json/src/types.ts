// [
// 	{
// 		timestamp: "2023-04-19 16:17:25",
// 		location: {
// 			exact_location: 0,
// 			indoor: 0,
// 			longitude: "11.288830455159294",
// 			altitude: "286.7",
// 			latitude: "44.72110112235471",
// 			id: 1677,
// 			country: "DE",
// 		},
// 		sampling_rate: null,
// 		sensor: { sensor_type:
//              { name: "DHT22", manufacturer: "various", id: 9 },
//                  pin: "7",
//                  id: 3330 },
// 		sensordatavalues: [
// 			{ value: "12.00", id: 33778692307, value_type: "temperature" },
// 			{ value: "56.30", id: 33778692308, value_type: "humidity" },
// 		],
// 		id: 15031669565,
// 	}
// ];

export type DataLocation = {
	latitude: string;
	longitude: string;
	altitude: string;
	country: string;
	id: number;
	exact_location?: number;
	indoor: number;
};

export type SensorDataValues = {
	value?: string;
	value_type?: string;
	id?: number;
};

// dto = data tranfer object
export type RawAirQualityData = {
	sampling_rate?: any;
	timestamp: Date;
	sensordatavalues: Array<SensorDataValues>;
	location: DataLocation;
	sensor: any; // todo: implement it
};
