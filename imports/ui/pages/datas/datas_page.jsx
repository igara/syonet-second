import React, {Component} from "react";
import CircleLink from "../../components/circle_link.jsx";

export default class DatasPage extends Component {
  /**
   * @param {any} props
   * @param {any} context
   */
	constructor(props, context) {
		super(props, context);
	}

  /**
   * @return {JSX.Element}
   * @see {Component}
   */
	render() {
		return (
<div>
  <CircleLink />
</div>
		);
	}
}
