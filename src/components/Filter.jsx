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
					<option className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
					 key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</>
	);
}

export default Filter;
