import CountryBox from "./CountryBox";

function CountryList({ countryList, searchQuery, filterQuery }) {
	console.log("countryList", countryList);
	console.log("countryList search query = ", searchQuery);
	console.log("countryList filter query = ", filterQuery);

	return (
		<>
			<div className="grid grid-flow-row grid-cols-1 lg:grid lg:grid-flow-cols lg:grid-cols-4 lg:gap-[4.69rem] gap-10 lg:mx-20 mx-[3.5rem] mb-20">
				{countryList
					.filter((item) => {
						return searchQuery == ""
							? item
							: item.name.common.toLocaleLowerCase().includes(searchQuery.toString().toLocaleLowerCase())
					})
          .filter((item)=>{
            return filterQuery == "" || filterQuery == "All"
            ? item
            : item.region.toLocaleLowerCase() == filterQuery.toString().toLocaleLowerCase()   
          })
					// .filter(
					// 	(item) =>
					// 		Object.values(countryList.name.common).toLocaleLowerCase() ==
					// 		searchQuery.toLocaleLowerCase()
					// )
					.map((countryData) => (
						<CountryBox
							countryDetail={countryData}
							key={countryData.cca3}
						/>
					))}
			</div>
		</>
	);
}

export default CountryList;
