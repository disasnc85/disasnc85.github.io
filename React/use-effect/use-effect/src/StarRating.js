import { useEffect, useState } from "react";



function Star({ index, selected=false, onSelect }) {
	return (
		<div onClick={onSelect}>
			{index} - {selected ? "si" : "no"}
		</div>
	);
}


export function StarRating({ totalStars = 0 }) {
	const [selectedStars, setSelectedStars] = useState(0);
	const handleOnSelect = (index) => {
		setSelectedStars(index + 1);
	};

   
    useEffect(() =>{
        console.log("selected stars " + selectedStars)
    })
	
	const stars = [...Array(totalStars)].map((s, i) => {
		return (
			<Star
				key={i}
				index={i}
				selected={selectedStars>i}
				onSelect={() => handleOnSelect(i)}
			></Star>
		);
	});

	return (
		<div>
			<div>{stars}</div>
			<div>
				<p>
					{selectedStars} of {totalStars}
				</p>
			</div>
		</div>
	);
}
