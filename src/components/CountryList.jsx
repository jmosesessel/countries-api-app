import CountryBox from "./CountryBox";

function CountryList({ countryList, searchQuery, filterQuery, isDarkMode }) {
	return (
		<>
			<div className="grid grid-flow-row grid-cols-1 lg:grid lg:grid-flow-cols lg:grid-cols-4 lg:gap-[4.69rem] gap-10 lg:mx-20 mx-[3.5rem] mb-20">
				{countryList
					.filter((item) => {
						return searchQuery == ""
							? item
							: item.name.common
									.toLocaleLowerCase()
									.includes(searchQuery.toString().toLocaleLowerCase());
					})
					.filter((item) => {
						return filterQuery == "" || filterQuery == "All"
							? item
							: item.region.toLocaleLowerCase() ==
									filterQuery.toString().toLocaleLowerCase();
					})
					.sort((a, b) => {
						return a.name.common < b.name.common ? -1 : 0;
					})
					.map((countryData, index) => (
						<CountryBox
							isDarkMode={isDarkMode}
							countryDetail={countryData}
							priority={index < 8}
							key={countryData.cca3}
						/>
					))}
			</div>
		</>
	);
}

export default CountryList;
