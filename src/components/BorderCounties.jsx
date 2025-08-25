import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BorderCounties({ borderList, borderClick }) {
	// const borderURL = `https://restcountries.com/v3.1/alpha/`;
	const [borderCountries, setBorderCountries] = useState([]);

	useEffect(() => {
		console.log("borderList", borderList);
		setBorderCountries(borderList);
	}, [borderList]);

	return (
		<>
			{borderCountries.map((border, index) => (
				<Link key={index} to={"/country-details/" + border}>
					<button
						value={border}
						onClick={(e) => borderClick(e.target.value)}
						className="flex justify-center items-center h-7 text-[0.75rem] px-[1.69rem] bg-white-dark-mode-text-light-mode-elements shadow-md rounded-sm"
					>
						{border}
					</button>
				</Link>
			))}
		</>
	);
}

export default BorderCounties;
