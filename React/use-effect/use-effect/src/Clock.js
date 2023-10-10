import { useEffect, useState } from "react";
import moment from "moment";

export function Clock() {
	const [date, setDate] = useState(moment());

	useEffect(() => {
		// setDate(moment()); -- MAI fare (collezione di errori sullo stato client)
		console.log("test");
		const intval = setInterval(() => {
			setDate(moment());
		}, 1000);
		return () => {
			clearInterval(intval);
		};
	}, []);

	return <div>{date.format()}</div>;
}
