import { React, useState } from "react";
// import { Dropdown } from "flowbite-react";

export default function Filter({ handleFilter, isDarkMode }) {
	const [selected, setSelected] = useState("Filter by Region");
	let [showDropDown, setShowDropDown] = useState(false);

	const options = [
		{ value: "All", label: "All" },
		{ value: "Africa", label: "Africa" },
		{ value: "Americas", label: "Americas" },
		{ value: "Asia", label: "Asia" },
		{ value: "Europe", label: "Europe" },
		{ value: "Oceania", label: "Oceania" },
	];

	const handleSelected = (e) => {
		e.preventDefault();
		//setSelected(value)
		setSelected(e.currentTarget.dataset.value);
		//console.log(e.currentTarget.dataset.value);
		setShowDropDown(!showDropDown);
		handleFilter(e.currentTarget.dataset.value);
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
					id="selectCountry"
					className={`${isDarkMode ? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements" : "bg-white-dark-mode-text-light-mode-elements "} block w-[12.5rem] mx-4 lg:mx-0 h-12 px-4 form-control shadow-sm rounded-md focus:outline-none focus:border-none focus-visible:ring-0`}
				>
					<option hidden value={selected}>
						{selected}
					</option>
				</select>
				{showDropDown && (
					<ul className={`${isDarkMode ? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements" : "bg-white-dark-mode-text-light-mode-elements"} z-10 absolute  left-4 lg:left-0 mt-1 w-[12.5rem] py-2 rounded-md shadow-sm`}>
						<>
							{options.map((option) => (
								<li
									onClick={handleSelected}
									className={`${isDarkMode ? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements hover:bg-dark-gray-light-mode-input " : "bg-white-dark-mode-text-light-mode-elements hover:bg-very-light-gray-light-mode-bg"}  py-2 px-5 cursor-pointer`}
									key={option.value}
									data-value={option.value}
								>
									{option.label}
								</li>
							))}
						</>
					</ul>
				)}
			</div>
		</>
	);
}
