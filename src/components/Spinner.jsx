import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

function Spinner({isLoading}) {
	return (
		<div className="w-full absolute bg-black opacity-50 h-screen flex justify-center items-center">
			<CirclesWithBar
				className=" opacity-100"
				height="100"
				width="100"
				color="#4fa94d"
				wrapperStyle={{}}
				wrapperClass=""
				visible={isLoading}
				outerCircleColor=""
				innerCircleColor=""
				barColor=""
				ariaLabel="circles-with-bar-loading"
			/>
		</div>
	);
}

export default Spinner;
