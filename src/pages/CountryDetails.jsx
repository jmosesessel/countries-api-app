import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
// import BorderCountries from "../components/BorderCounties";

function CountryDetails({ isDarkMode }) {
	let params = useParams();
	// console.log("first params", params);
	const baseURL = `https://restcountries.com/v3.1/`;
	let name = params.name.toLowerCase();

	// console.log("query name", name);

	const [apiData, setApiData] = useState([]);
	// removed unused selectedCountry state
	const [borderCountries, setBorderCountries] = useState([]);
	const [currencies, setCurrencies] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const navigate = useNavigate();

	// handle border button click. set the url query to the new name that was clicked
	const handleBorderClick = (data) => {
		const param = encodeURIComponent(data);
		navigate(`/countries-api-app/country-details/${param}`);
		fetchAllCountries(data);
	};

	const fetchAllCountries = useCallback(
		async (selectedCountry) => {
			try {
				setIsLoading(true);
				setIsError(false);
				setBorderCountries([]);

				const raw = (selectedCountry || "").toString().trim();
				const decoded = decodeURIComponent(raw);
				const isAlpha3 = /^[A-Za-z]{3}$/.test(raw);
				const fields =
					"name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca3";

				let res;
				if (isAlpha3) {
					res = await fetch(
						`${baseURL}alpha/${encodeURIComponent(
							raw.toUpperCase()
						)}?fields=${fields}`
					);
				} else {
					// Try full name first
					res = await fetch(
						`${baseURL}name/${encodeURIComponent(
							decoded
						)}?fullText=true&fields=${fields}`
					);
					if (!res.ok) {
						// Fallback to partial match
						res = await fetch(
							`${baseURL}name/${encodeURIComponent(decoded)}?fields=${fields}`
						);
					}
				}

				if (!res.ok) {
					console.error("Country fetch failed", res.status);
					setIsError(true);
					setIsLoading(false);
					return;
				}

				const payload = await res.json();
				const selected = Array.isArray(payload) ? payload[0] : payload;
				if (!selected) {
					setIsError(true);
					setIsLoading(false);
					return;
				}

				setCurrencies(
					selected?.currencies
						? Object.values(selected.currencies)[0]?.name || ""
						: ""
				);
				setApiData(selected);

				const borders = selected?.borders || [];
				if (Array.isArray(borders) && borders.length > 0) {
					const codes = borders.map((c) => encodeURIComponent(c)).join(",");
					const bRes = await fetch(
						`${baseURL}alpha?codes=${codes}&fields=name,cca3`
					);
					if (bRes.ok) {
						const bData = await bRes.json();
						const names = (Array.isArray(bData) ? bData : [])
							.map((c) => c?.name?.common)
							.filter(Boolean);
						setBorderCountries(names);
					}
				}

				setIsLoading(false);
			} catch (err) {
				console.error("Error loading country details:", err);
				setIsLoading(false);
				setIsError(true);
			}
		},
		[baseURL]
	);

	useEffect(() => {
		fetchAllCountries(name);
	}, [name, fetchAllCountries]);

	return (
		<>
			<div className="text-[16px]">
				{isLoading && !isError && <Spinner isLoading={isLoading} />}
				<div className="mx-7 lg:mx-20 my-5 lg:my-20">
					<Link className=" inline-block" to="/countries-api-app/">
						<button
							className={`${
								isDarkMode
									? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements"
									: " bg-white-dark-mode-text-light-mode-elements"
							} w-[6.5rem] lg:w-[8.5rem] shadow-md h-8 lg:h-10 flex justify-center text-sm lg:text-base items-center gap-2 rounded-md`}
						>
							<LiaArrowLeftSolid />
							<span> Back </span>
						</button>
					</Link>
				</div>
				{!isLoading && isError && (
					<div className="mx-7 lg:mx-20 text-red-600">
						Could not load country details. Please check the URL or go back.
					</div>
				)}
				{!isLoading && !isError && (
					<>
						<div className="mx-7 lg:mx-20">
							<div className="flex flex-col lg:flex-row lg:gap-[7.5rem] text-sm mb-[2.2rem]">
								<div className="lg:w-[34.98219rem]">
									<img
										className="w-full rounded-lg lg:w-[34.98219rem] h-[17.24525rem] lg:h-[25.0625rem] shadow-lg"
										src={
											apiData ? apiData?.flags?.svg || apiData?.flags?.png : ""
										}
										alt={
											apiData?.name?.common
												? `${apiData.name.common} flag`
												: "flag"
										}
										loading="lazy"
										decoding="async"
									/>
								</div>

								<div className="flex flex-col lg:w-[37.375rem]">
									<h1 className="mt-10 text-[1.375rem] font-semibold mb-4">
										{apiData?.name?.common}
									</h1>

									<div className="flex flex-col lg:flex-row gap-8 lg:gap-[8.81rem] mb-[2.12rem] lg:mb-[4.37rem] ">
										<div className="flex flex-col gap-3">
											<div>
												<span className="font-bold">Native Name:</span>{" "}
												<span>
													{apiData?.name?.nativeName &&
														Object.values(apiData.name.nativeName)[0]?.official}
												</span>
											</div>
											<div>
												<span className="font-bold">Population:</span>{" "}
												<span>{apiData?.population?.toLocaleString?.()}</span>
											</div>
											<div>
												<span className="font-bold">Region:</span>{" "}
												<span>{apiData?.region}</span>
											</div>
											<div>
												<span className="font-bold">Sub Region:</span>{" "}
												<span>{apiData?.subregion}</span>
											</div>
											<div>
												<span className="font-bold">Capital:</span>{" "}
												<span>{apiData?.capital}</span>
											</div>
										</div>

										<div className="flex flex-col gap-3">
											<div>
												<span className="font-bold">Top Level Domain:</span>{" "}
												<span>{apiData?.tld}</span>
											</div>
											<div>
												<span className="font-bold">Currencies:</span>{" "}
												<span>{currencies != "" && currencies}</span>
											</div>
											<div className=" flex">
												<span className="font-bold">Languages:</span>{" "}
												<span className="flex flex-wrap">
													{apiData?.languages &&
														Object.values(apiData.languages).join(", ")}
												</span>
											</div>
										</div>
									</div>

									<div className="flex flex-col lg:flex-row gap-4 mb-20">
										<h2 className="text-base font-[600] ">Border Countries:</h2>
										<div className="flex flex-wrap gap-[0.62rem] ">
											{borderCountries.length > 0 &&
												borderCountries.map((countryName, index) => (
													<button
														key={index}
														value={countryName}
														onClick={(e) => handleBorderClick(e.target.value)}
														className={`${
															isDarkMode
																? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements"
																: "bg-white-dark-mode-text-light-mode-elements"
														} flex justify-center items-center h-7 text-[0.75rem] px-[1.69rem]  shadow-md rounded-sm`}
													>
														{countryName}
													</button>
												))}
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

CountryDetails.propTypes = {
	isDarkMode: PropTypes.bool,
};
