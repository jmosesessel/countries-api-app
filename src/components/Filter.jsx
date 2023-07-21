import { React, useState } from "react";
// import { Dropdown } from "flowbite-react";

export default function Filter() {
	const [selected, setSelected] = useState("Filter by Region");
	let [showDropDown, setShowDropDown] = useState(false);

	const options = [
		{ value: "Africa", label: "Africa" },
		{ value: "America", label: "America" },
		{ value: "Asia", label: "Asia" },
		{ value: "Europe", label: "Europe" },
		{ value: "Oceania", label: "Oceania" },
	];

	const handleSelected = (e) => {
		e.preventDefault();
		//setSelected(value)
		setSelected(e.currentTarget.dataset.value);
		console.log(e.currentTarget.dataset.value);
		setShowDropDown(!showDropDown);
	};

	const handleSelectClick = (e) => {
		e.preventDefault();
		setShowDropDown(!showDropDown);
	};

	return (
		<>
			<div className="relative">
				<select
					onClick={handleSelectClick}
					id="select"
					className="block bg-white border-none w-[12.5rem] mx-4 lg:mx-0 h-12 px-4 form-control shadow-sm rounded-md"
				>
					<option hidden value={selected}>
						{selected}
					</option>
				</select>
				{showDropDown && (
					<ul className="z-1 absolute bg-white-dark-mode-text-light-mode-elements left-4 lg:left-0 mt-1 w-[12.5rem] px-5 py-5 rounded-md">
						{options.map((option) => (
							<>
								<li
									onClick={handleSelected}
									className=" py-2"
									key={option.value}
									data-value={option.value}
								>
									{option.label}
								</li>
							</>
						))}
					</ul>
				)}
			</div>
		</>
	);
}
