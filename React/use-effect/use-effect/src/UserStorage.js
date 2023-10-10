import { useEffect, useState } from "react";

function useStorage(property, setproperty, key, initialValue) {
	useEffect(() => {
		const storeUser = window.localStorage.getItem(key);
		if (storeUser) {
			setproperty(storeUser);
		} else {
			const initialName = initialValue;
			window.localStorage.setItem("user", initialName);
			setproperty(initialName);
		}
	}, [initialValue, key, setproperty]);

	useEffect(() => {
		if (property) {
			window.localStorage.setItem("user", property);
		}
	}, [property]);
}

export function UserStorage() {
	const [user, setUser] = useState();
	useStorage(user, setUser, "user", "John");

	const handleSelectChange = (e) => {
		setUser(e.target.value);
	};

	return (
		<select value={user} onChange={handleSelectChange}>
			<option>Jason</option>
			<option>John</option>
			<option>Jessica</option>
			<option>Martin</option>
			<option>Marco</option>
		</select>
	);
}
