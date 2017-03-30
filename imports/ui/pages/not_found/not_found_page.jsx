import React, {Component} from "react";

export default class NotFoundPage extends Component {
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
<div>存在しないページです</div>
		);
	}
}
