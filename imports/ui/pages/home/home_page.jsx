import React, {Component} from "react";
import TitleLogo from "../../components/title_logo.jsx";

export default class HomePage extends Component {

	/**
	 * @param {any} props
	 * @param {any} context
	 */
	constructor(props, context) {
		super(props, context);
	}

    /**
     * After render Event
     * @see {Component}
     */
	componentDidMount() {
	}

	/**
     * @return {JSX.Element}
     * @see {Component}
     */
	render() {
		return (
<div>Homeページです
	<TitleLogo />
</div>
		);
	}
}
