import { useState, useEffect } from "react";
import FilterArea from "../components/FilterArea";
import CountryList from "../components/CountryList";
function Homepage() {
	const [apiData, setApiData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

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
      <FilterArea />
			{isLoading && "Loading..."}
			{!isLoading && (
				<>
					<CountryList countryList={apiData} />
				</>
			)}
		</>
	);
}

export default Homepage;
