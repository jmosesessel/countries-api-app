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
		const CACHE_KEY = "countries_v1";
		const FIELDS = "name,flags,population,region,capital,cca3";

		const cached = sessionStorage.getItem(CACHE_KEY);
		if (cached) {
			try {
				const parsed = JSON.parse(cached);
				if (Array.isArray(parsed)) {
					setApiData(parsed);
					setIsLoading(false);
				}
			} catch (e) {
				console.warn("Failed to parse cached countries", e);
			}
		} else {
			setIsLoading(true);
		}

		setIsError(false);

		// Background refresh (or initial load)
		fetch(`https://restcountries.com/v3.1/all?fields=${FIELDS}`)
			.then((response) => response.json())
			.then((data) => {
				if (!Array.isArray(data)) {
					console.error("REST Countries error:", data);
					if (!cached) setIsLoading(false);
					setIsError(true);
					if (!cached) setApiData([]);
					return;
				}
				setApiData(data);
				sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
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
