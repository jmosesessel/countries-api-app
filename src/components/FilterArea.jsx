import React, { useState, useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Filter from "./Filter";

function FilterArea({ handleSearch, handleFilteredQuery }) {
	//const [filteredText, setFilteredText] = useState("");

	// handleFilter = (value) => {
	// 	setFilteredText(value);
	// 	console.log("filter area handle filter", value);
	// 	handleFilteredQueryText(filteredText);
	// 	//return filteredText
	// };

  const handleFilterDataReceived = (data) => {
    handleFilteredQuery(data);
  };


  // handleFilteredQueryText = (value) => {
	// 	setFilteredText(value);
	// 	console.log("filter area handle filter", value);
	// 	//handleFilteredQueryText(filteredText);
	// 	//return filteredText
	// };
	// useEffect(() => {
	// 	handleFilteredQueryText(filteredText);
	// }, []);

	return (
		<>
			<div className="flex flex-col lg:mx-20 lg:flex-row gap-10 mt-[1.5rem] mb-[2rem] lg:py-12 lg:justify-between">
				<div className="h-12 mx-4 lg:mx-0 rounded-md bg-white-dark-mode-text-light-mode-elements flex justify-center items-center">
					<HiMagnifyingGlass className="text-lg ml-8 mr-[1.63rem] text-dark-gray-light-mode-input" />
					<input
						onChange={(e) => handleSearch(e.target.value)}
						className="w-full lg:w-[30rem] rounded-lg mr-6 lg:mr-0 text-dark-gray-light-mode-input border-none focus:outline-none focus:border-none focus-visible:ring-0 "
						type="text"
						name=""
						id=""
						placeholder="Search for a country..."
					/>
          {/* <input type="text" value={filteredText} onInput={(e) => handleFilteredQueryText(e.target.value)} /> */}
				</div>
				<Filter handleFilter={handleFilterDataReceived} />
			</div>
		</>
	);
}

export default FilterArea;
