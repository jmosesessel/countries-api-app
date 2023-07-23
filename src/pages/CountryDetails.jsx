import React from "react";
import { useState, useEffect } from "react";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
// import BorderCountries from "../components/BorderCounties";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}
function CountryDetails() {
	let query = useQuery();
	const baseURL = `https://restcountries.com/v3.1/`;
	const name = query.get("name").toLowerCase();
	console.log("query name", name);
	const [apiData, setApiData] = useState([]);
	const [borderCountries, setBorderCountries] = useState([]);
	const [currencies, setCurrencies] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const navigate = useNavigate();

	// handle border button click. set the url query to the new name that was clicked
	const handleBorderClick = (data) => {
		// setIsLoading(true);
		navigate(`/country-details?name=${data}`);
		const refresh = () => window.location.reload(true);

		//console.log("clicked border", data);
		refresh();
		// // query.set( "name", data)
		// fetchCountry(countryURL, data);
	};

	const fetchAllCountries = () => {
		setIsLoading(true);
		setIsError(false);
		setBorderCountries([]);

		fetch(`${baseURL}all`)
			.then((response) => response.json())
			.then((data) => {
				//console.log("all countries", data);
				//setApiData(data);
				setIsLoading(false);
				setIsError(false);

				const seletedCountryDetail = data.filter((country) => {
					return (
						country.name.common.toLocaleLowerCase() ==
						name.toLocaleLowerCase()
					);
				});

				setCurrencies(
					Object.values(seletedCountryDetail[0].currencies)[0].name
				);

				setApiData(seletedCountryDetail[0]);
				//console.log("seletedCountryDetail", seletedCountryDetail);

				const borders = seletedCountryDetail[0].borders;

				//console.log("borders", borders);

				// get the border countries by name
				if (borders != undefined) {
					// const borderCountriesByNames = borders.map(border=>{
					const borderCountriesByNames = data.reduce((a, c) => {
						seletedCountryDetail[0].borders.includes(c.cca3) &&
							a.push(c.name.common);
						return a;
					}, []);

					// console.log(
					// 	"borderCountriesByNames",
					// 	borderCountriesByNames
					// );
					setBorderCountries(borderCountriesByNames);
					// })
				}
			})
			.catch((err) => {
				console.log("error", err);
				setIsLoading(false);
				setIsError(true);
			});
	};

	useEffect(() => {
		fetchAllCountries();
		//fetchCountry(countryURL, name);
	}, []);

	return (
		<>
			<div className="text-[16px]">
				{isLoading && !isError && <Spinner isLoading={isLoading} />}
				<div className="mx-7 lg:mx-20 my-5 lg:my-20">
					<Link className=" inline-block" to="/">
						<button className="w-[6.5rem] lg:w-[8.5rem] shadow-md h-8 lg:h-10 flex justify-center text-sm lg:text-base items-center gap-2 bg-white-dark-mode-text-light-mode-elements rounded-md">
							<LiaArrowLeftSolid />
							<span> Back </span>
						</button>
					</Link>
				</div>
				{!isLoading && !isError && (
					<>
						<div className="mx-7 lg:mx-20">
							<div className="flex flex-col lg:flex-row lg:gap-[7.5rem] text-sm mb-[2.2rem]">
								<div className="lg:w-[34.98219rem]">
									<img
										className="w-full rounded-lg lg:w-[34.98219rem] h-[17.24525rem] lg:h-[25.0625rem] shadow-lg"
										src={
											apiData != ""
												? apiData.flags.png
												: ""
										}
										alt="flag"
									/>
								</div>

								<div className="flex flex-col lg:w-[37.375rem]">
									<h1 className="mt-10 text-[1.375rem] font-semibold mb-4">
										{apiData != "" && apiData.name.common}
									</h1>

									<div className="flex flex-col lg:flex-row gap-8 lg:gap-[8.81rem] mb-[2.12rem] lg:mb-[4.37rem] ">
										<div className="flex flex-col gap-3">
											<div>
												<span className="font-bold">
													Native Name:
												</span>{" "}
												<span>
													{apiData.name != null &&
														apiData.name
															.nativeName !=
															undefined &&
														Object.values(
															apiData.name
																.nativeName
														)[0].official}
												</span>
											</div>
											<div>
												<span className="font-bold">
													Population:
												</span>{" "}
												<span>
													{apiData != "" &&
														apiData.population.toLocaleString()}
												</span>
											</div>
											<div>
												<span className="font-bold">
													Region:
												</span>{" "}
												<span>
													{apiData != "" &&
														apiData.region}
												</span>
											</div>
											<div>
												<span className="font-bold">
													Sub Region:
												</span>{" "}
												<span>
													{apiData != "" &&
														apiData.subregion}
												</span>
											</div>
											<div>
												<span className="font-bold">
													Capital:
												</span>{" "}
												<span>
													{apiData != "" &&
														apiData.capital}
												</span>
											</div>
										</div>

										<div className="flex flex-col gap-3">
											<div>
												<span className="font-bold">
													Top Level Domain:
												</span>{" "}
												<span>
													{apiData != "" &&
														apiData.tld}
												</span>
											</div>
											<div>
												<span className="font-bold">
													Currencies:
												</span>{" "}
												<span>
													{currencies != "" &&
														currencies}
												</span>
											</div>
											<div className=" flex">
												<span className="font-bold">
													Languages:
												</span>{" "}
												<span className="flex flex-wrap">
													{apiData != "" &&
														Object.values(
															apiData.languages
														).join(", ")}
												</span>
											</div>
										</div>
									</div>

									<div className="flex flex-col lg:flex-row gap-4 mb-20">
										<h2 className="text-base font-[600] ">
											Border Countries:
										</h2>
										<div className="flex flex-wrap gap-[0.62rem] ">
											{apiData != "" &&
												borderCountries.length > 0 &&
												borderCountries.map(
													(countryName, index) => (
														<button
															key={index}
															value={countryName}
															onClick={(e) =>
																handleBorderClick(
																	e.target
																		.value
																)
															}
															className="flex justify-center items-center h-7 text-[0.75rem] px-[1.69rem] bg-white-dark-mode-text-light-mode-elements shadow-md rounded-sm"
														>
															{countryName}
														</button>
													)
												)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default CountryDetails;
