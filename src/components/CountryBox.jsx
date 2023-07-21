import { Link } from "react-router-dom";
function CountryBox(countryDetail) {
	const country = countryDetail.countryDetail;

	return (
		<>
			{
				<Link to={"country-details?name="+country.name.common}>
					<div className="flex flex-col lg:h-[21rem] bg-white-dark-mode-text-light-mode-elements shadow-sm rounded-t-md rounded-b-md">
						<img
							className="w-full h-[10rem] rounded-t-md shadow-sm"
							src={country.flags.png}
							alt={country.flags.alt}
						/>
						<div className="flex flex-col p-8">
							<h3 className="font-semibold text-lg">
								{country.name.common}
							</h3>
							<p>
								Population:{" "}
								<span className=" text-dark-gray-light-mode-input">
									{country.population.toLocaleString()}
								</span>
							</p>
							<p>
								Region:{" "}
								<span className=" text-dark-gray-light-mode-input">
									{country.region}
								</span>
							</p>
							<p>
								Capital:{" "}
								<span className=" text-dark-gray-light-mode-input">
									{country.capital}
								</span>
							</p>
						</div>
					</div>
				</Link>
			}
		</>
	);
}

export default CountryBox;
