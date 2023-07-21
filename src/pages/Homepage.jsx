import { useState, useEffect } from "react";
import FilterArea from "../components/FilterArea";
import CountryList from "../components/CountryList";
function Homepage() {
	const [apiData, setApiData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [filterQuery, setFilterQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleSearch = (data) => {
		setSearchQuery(data);
		console.log("search query = ", data);
	};

	const handleFilter = (data) => {
    setFilterQuery(data)
    console.log('homepage handle filter = ', data)
  };

  // const handleFilteredQuery =(data) => {
  //   setFilterQuery(data)
  //   console.log('home page filtered text', data)
  // }

	useEffect(() => {
		setIsLoading(true);
		setIsError(false);

		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
				setApiData(data);
				setIsLoading(false);
				setIsError(false);
				//console.log("dataRes", data);
			})
			.catch((err) => {
				console.log("error", err);
				setIsLoading(false);
				setIsError(true);
			});
	}, []);

	return (
		<>
			<FilterArea
				handleSearch={handleSearch}
				
        handleFilteredQuery={handleFilter}
			/>
			{isLoading && "Loading..."}
			{!isLoading && (
				<>
					<CountryList
						countryList={apiData}
						searchQuery={searchQuery}
            filterQuery={filterQuery}
					/>
				</>
			)}
		</>
	);
}

export default Homepage;
