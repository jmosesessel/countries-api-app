import React from "react";

function Filter() {
	const options = [
		{ value: "Africa", label: "Africa" },
		{ value: "America", label: "America" },
		{ value: "Asia", label: "Asia" },
		{ value: "Europe", label: "Europe" },
		{ value: "Oceania", label: "Oceania" },
	];
	return (
		<>
			<select
				id="select"
				className="block w-[12.5rem] mx-4 lg:mx-0 h-12 px-4 form-control shadow-sm rounded-md"
			>
				{options.map((option) => (
					<option
						className=""
						key={option.value}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</>
	);
}

export default Filter;
