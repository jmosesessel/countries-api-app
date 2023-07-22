import { React, useState } from "react";
// import { Dropdown } from "flowbite-react";

export default function Filter({ handleFilter }) {
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
		console.log(e.currentTarget.dataset.value);
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
					id="select"
					className="block bg-white border-none w-[12.5rem] mx-4 lg:mx-0 h-12 px-4 form-control shadow-sm rounded-md"
				>
					<option hidden value={selected}>
						{selected}
					</option>
				</select>
				{showDropDown && (
					<ul className="z-10 absolute bg-white-dark-mode-text-light-mode-elements left-4 lg:left-0 mt-1 w-[12.5rem] py-2 rounded-md shadow-sm">
						<>
							{options.map((option) => (
								<li
									onClick={handleSelected}
									className=" hover:bg-very-light-gray-light-mode-bg py-2 px-5 cursor-pointer"
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
