import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BorderCounties({ borderList, borderClick }) {
	const borderURL = `https://restcountries.com/v3.1/alpha/`;
	const [borderCountries, setBorderCountries] = useState([]);

	console.log("borderList", borderList);
    setBorderCountries(borderList)


	// const fetchBorderCountries = async (borders) => {
	// 	console.log("borders", borders);
	// 	let newBorders = await [...borderCountries];
	// 	if (borders != undefined) {
	// 		borders.forEach(async (border) => {
	// 			const borderRes = await fetch(`${borderURL}${border}`);
	// 			const borderResData = await borderRes.json();

	// 			newBorders.push(await borderResData[0].name.common);
	// 			// setTimeout(() => {
	// 			setBorderCountries(await newBorders);
	// 			// }, 100);
	// 			// console.log("border countries", borderCountries);
	// 			// console.log("borderCountries....", borderCountries);
	// 		});
	// 	}
	// };

	// useEffect(() => {
	// 	//fetchBorderCountries(borderList);
	// }, []);
	return (
		<>
			{borderCountries.map((border, index) => (
				<Link key={index} to={"/country-details?name=" + border}>
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
