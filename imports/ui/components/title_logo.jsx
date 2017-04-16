import React, {Component} from "react";
import THREE from "three";

export default class TitleLogo extends Component {

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
		this.renderer = new THREE.WebGLRenderer();
		// サイズの設定
		this.renderer.setSize(200, 200);
		var $element = document.querySelector("#title_logo");
		$element.appendChild(this.renderer.domElement);
	}

    /**
     * @return {JSX.Element}
     * @see {Component}
     */
	render() {
		return (
<div id="title_logo"></div>
		);
	}
}
