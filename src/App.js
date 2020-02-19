import React, { Component, Fragment } from "react";
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";

class App extends Component {
	state = {
		customers: [
			{ customerId: "5", customerName: "fickor" },
			{ customerId: "0", customerName: "alla" },
			{ customerId: "3", customerName: "delar" }
		],

		theothers: [
			{ id: "1", name: "balla" },
			{ id: "2", name: "cymbaler" },
			{ id: "4", name: "enstaka" },
			{ id: "6", name: "galet" },
			{ id: "7", name: "höga" },
			{ id: "8", name: "industri" },
			{ id: "9", name: "jungle" }
		],
		codeLang: ["C#", "Java", "Basic", "C++", "Assembler"]
	};

	render() {
		return (
			<Fragment>
				<MyHeader />

				<MyMainContent textList={this.state.codeLang} />

				<MyFooter />
			</Fragment>
		);
	}
}

export default App;
