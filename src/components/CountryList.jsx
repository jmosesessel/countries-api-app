import CountryBox from "./CountryBox";

function CountryList(countryList) {
  console.log('countryList', countryList)
	return (
		<>
			<div className="grid grid-flow-row grid-cols-1 lg:grid lg:grid-flow-cols lg:grid-cols-4 lg:gap-[4.69rem] gap-10 lg:mx-20 mx-[3.5rem] mb-20">
				{countryList.countryList.map((countryData) => (
					<CountryBox
						countryDetail={countryData}
						key={countryData.cca3}
					/>
				))}

				{/* <Link to="country-details">
					<CountryBox countryDetail="" />
				</Link>
				<Link to="country-details">
					<CountryBox countryDetail="" />
				</Link>
				<Link to="country-details">
					<CountryBox countryDetail="" />
				</Link>
				<Link to="country-details">
					<CountryBox countryDetail="" />
				</Link>
				<Link to="country-details">
					<CountryBox countryDetail="" />
				</Link>
				<Link to="country-details">
					<CountryBox countryDetail="" />
				</Link>
				<Link to="country-details">
					<CountryBox countryDetail="" />
				</Link>
				<Link to="country-details">
					<CountryBox countryDetail="" />
				</Link> */}
			</div>
		</>
	);
}

export default CountryList;
