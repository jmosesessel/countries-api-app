import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function CountryBox({ countryDetail, isDarkMode, priority = false }) {
	const country = countryDetail;

	return (
		<>
			{
				<Link to={`country-details/${encodeURIComponent(country.name.common)}`}>
					<div
						className={`${
							isDarkMode
								? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements"
								: " bg-white-dark-mode-text-light-mode-elements"
						} flex flex-col lg:h-[21rem] shadow-sm rounded-t-md rounded-b-md`}
					>
						<img
							className="w-full h-[10rem] rounded-t-md shadow-sm object-cover"
							src={country.flags.svg || country.flags.png}
							alt={country.flags.alt || `${country.name.common} flag`}
							loading={priority ? "eager" : "lazy"}
							decoding="async"
						/>
						<div
							className={`${
								isDarkMode
									? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements"
									: " bg-white-dark-mode-text-light-mode-elements"
							} flex flex-col p-8`}
						>
							<h3 className="font-semibold text-lg">{country.name.common}</h3>
							<p>
								Population:{" "}
								<span
									className={`${
										isDarkMode
											? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements"
											: " text-dark-gray-light-mode-input"
									}`}
								>
									{country.population.toLocaleString()}
								</span>
							</p>
							<p>
								Region:{" "}
								<span
									className={`${
										isDarkMode
											? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements"
											: " text-dark-gray-light-mode-input"
									}`}
								>
									{country.region}
								</span>
							</p>
							<p>
								Capital:{" "}
								<span
									className={`${
										isDarkMode
											? " bg-dark-blue-dark-mode-elements text-white-dark-mode-text-light-mode-elements"
											: " text-dark-gray-light-mode-input"
									}`}
								>
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

CountryBox.propTypes = {
	countryDetail: PropTypes.shape({
		name: PropTypes.shape({ common: PropTypes.string }).isRequired,
		flags: PropTypes.shape({
			svg: PropTypes.string,
			png: PropTypes.string,
			alt: PropTypes.string,
		}).isRequired,
		population: PropTypes.number.isRequired,
		region: PropTypes.string,
		capital: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	}).isRequired,
	isDarkMode: PropTypes.bool,
	priority: PropTypes.bool,
};
