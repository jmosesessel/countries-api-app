import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FilterArea from "../components/FilterArea";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";

function Homepage({ isDarkMode }) {
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

		// Request only the fields we use to comply with API requirements and reduce payload
		fetch(
			"https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3"
		)
			.then((response) => response.json())
			.then((data) => {
				// In case API returns an error object instead of an array
				if (!Array.isArray(data)) {
					console.error("REST Countries error:", data);
					setIsError(true);
					setApiData([]);
					setIsLoading(false);
					return;
				}
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
			{!isLoading && isError && (
				<p className="mx-[3.5rem] lg:mx-20 text-red-600">
					Failed to load countries. Please try again later.
				</p>
			)}
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

Homepage.propTypes = {
	isDarkMode: PropTypes.bool,
};
