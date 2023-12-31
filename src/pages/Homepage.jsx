import { useState, useEffect } from "react";
import FilterArea from "../components/FilterArea";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";

function Homepage({isDarkMode}) {
	const [apiData, setApiData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [filterQuery, setFilterQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleSearch = (data) => {
		setSearchQuery(data);
	};

	const handleFilter = (data) => {
		setFilterQuery(data);
	};

	

	useEffect(() => {
		setIsLoading(true);
		setIsError(false);

		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
				setApiData(data);
				setIsLoading(false);
				setIsError(false);
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
			isDarkMode={isDarkMode}
				handleSearch={handleSearch}
				handleFilteredQuery={handleFilter}
			/>
			{isLoading && <Spinner isLoading />}
			{!isLoading && (
				<>
					<CountryList
						isDarkMode={isDarkMode}
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
