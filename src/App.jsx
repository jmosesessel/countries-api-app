import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CountryDetails from "./pages/CountryDetails";
import { React, useState, useEffect } from "react";

function App({ setMode }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const cLocalStorage = () => {
		//get localStorage mode and set it to
		let localMode = localStorage.getItem("cIsDarkMode");

		if (localMode == "null") {
			localStorage.setItem("cIsDarkMode", isDarkMode);
			// console.log("localMode is null ...", localMode);
			setIsDarkMode(isDarkMode);
		}

		if (localMode != "null") {
			if (localMode == "true") setIsDarkMode(true);

			if (localMode == "false") setIsDarkMode(false);
		}
	};

	const handleTheme = (setMode) => {
		setIsDarkMode(setMode);
		localStorage.setItem("cIsDarkMode", setMode);
	};

	useEffect(() => {
		cLocalStorage();
	}, []);
	return (
		<>
			<div
				className={`${
					isDarkMode
						? " bg-very-dark-blue-dark-mode-bg text-white-dark-mode-text-light-mode-elements"
						: "bg-very-light-gray-light-mode-bg"
				} w-full h-screen flex flex-col font-Nunito text-sm`}
			>
				<Header isDarkMode={isDarkMode} setMode={handleTheme} />

				<Routes>
					<Route
						path="/countries-api-app/"
						element={<Homepage isDarkMode={isDarkMode} />}
					/>

					<Route
						path="/countries-api-app/country-details"
						element={<CountryDetails isDarkMode={isDarkMode} />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
