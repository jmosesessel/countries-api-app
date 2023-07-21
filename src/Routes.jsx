import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CountryDetails from "./pages/CountryDetails";

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />

		<Route exact path="/country-details" component={CountryDetails} />
	</Switch>
);

export default Routes;
