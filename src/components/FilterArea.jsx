import React, { useState, useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Filter from "./Filter";

function FilterArea({ handleSearch, handleFilteredQuery, isDarkMode }) {
	//const [filteredText, setFilteredText] = useState("");


  const handleFilterDataReceived = (data) => {
    handleFilteredQuery(data);
  };



	return (
		<>
			<div className="flex flex-col lg:mx-20 lg:flex-row gap-10 mt-[1.5rem] mb-[2rem] lg:py-12 lg:justify-between">
				<div className={`${isDarkMode ? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements" : "bg-white-dark-mode-text-light-mode-elements"} h-12 mx-4 lg:mx-0 rounded-md flex justify-center items-center`}>
					<HiMagnifyingGlass className={`${isDarkMode ? " text-white-dark-mode-text-light-mode-elements" : "text-dark-gray-light-mode-input"} text-lg ml-8 mr-[1.63rem]`} />
					<input
						onChange={(e) => handleSearch(e.target.value)}
						className={`${isDarkMode ? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements" : "text-dark-gray-light-mode-input"} w-full lg:w-[30rem] rounded-lg mr-6 lg:mr-0  border-none focus:outline-none focus:border-none focus-visible:ring-0 `}
						type="text"
						name=""
						id=""
						placeholder="Search for a country..."
					/>
          {/* <input type="text" value={filteredText} onInput={(e) => handleFilteredQueryText(e.target.value)} /> */}
				</div>
				<Filter isDarkMode={isDarkMode} handleFilter={handleFilterDataReceived} />
			</div>
		</>
	);
}

export default FilterArea;
