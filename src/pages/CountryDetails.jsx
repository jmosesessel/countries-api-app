import React from "react";
import { useState, useEffect } from "react";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}
function CountryDetails() {
	let query = useQuery();
	const name = query.get("name").toLowerCase();
	console.log("query name", name);
	const [apiData, setApiData] = useState([]);
	const [currencies, setCurrencies] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setIsError(false);

		fetch(`https://restcountries.com/v3.1/name/${name}`)
			.then((response) => response.json())
			.then((data) => {
				setApiData(data[0]);
				setCurrencies(Object.values(data[0].currencies)[0].name);
				setIsLoading(false);
				setIsError(false);

				console.log("dataRes", data[0]);
			})
			.catch((err) => {
				console.log("error", err);
				setIsLoading(false);
				setIsError(true);
			});
	}, []);

	return (
		<>
			
			{
				isLoading && !isError &&
					<Spinner isLoading={isLoading} />
				
			}
			<div className="mx-7 lg:mx-20 my-5 lg:my-20">
				<Link className=" inline-block" to="/">
					<button className="w-[6.5rem] lg:w-[8.5rem] shadow-md h-8 lg:h-10 flex justify-center text-sm lg:text-base items-center gap-2 bg-white-dark-mode-text-light-mode-elements">
						<LiaArrowLeftSolid />
						<span> Back </span>
					</button>
				</Link>
			</div>
			{!isLoading && !isError && (
				<>
					<div className="mx-7 lg:mx-20">
						<div className="flex flex-col lg:flex-row lg:gap-[7.5rem] text-sm mb-[2.2rem]">
							<div>
								<img
									className="w-full rounded-lg lg:w-[34.98219rem] h-[17.24525rem] lg:h-[25.19806rem]"
									src={apiData != "" ? apiData.flags.png : ""}
									alt="flag"
								/>
							</div>

							<div className="flex flex-col ">
								<h1 className="mt-10 text-[1.375rem] font-semibold mb-4">
									{apiData != "" && apiData.name.common}
								</h1>

								<div className="flex flex-col lg:flex-row gap-8 lg:gap-[8.81rem] mb-[2.12rem]">
									<div className="flex flex-col gap-3">
										<div>
											<span className="font-bold">
												Native Name:
											</span>{" "}
											<span>
												{apiData.name != null &&
													apiData.name.nativeName !=
														undefined &&
													Object.values(
														apiData.name.nativeName
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
											<span>be</span>
										</div>
										<div>
											<span className="font-bold">
												Currencies:
											</span>{" "}
											<span>
												{currencies != "" && currencies}
											</span>
										</div>
										<div>
											<span className="font-bold">
												Languages:
											</span>{" "}
											<span>
												{apiData != "" &&
													Object.values(
														apiData.languages
													).join(", ")}
											</span>
										</div>
									</div>
								</div>

								<div className="flex flex-col lg:flex-row gap-4 mb-20">
									<h2 className="text-base font-bold">
										Border Countries:
									</h2>
									<div className="flex gap-[0.62rem] ">
										<button className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white-dark-mode-text-light-mode-elements shadow-md rounded-sm">
											France
										</button>
										<button className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white-dark-mode-text-light-mode-elements shadow-md rounded-sm">
											Germany
										</button>
										<button className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white-dark-mode-text-light-mode-elements shadow-md rounded-sm">
											Netherlands
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default CountryDetails;
