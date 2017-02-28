import React, {Component, PropTypes} from "react";
import {Icon, Sidebar, Menu, Dimmer} from "semantic-ui-react";
import body_style from "./body.css.js";

export default class Body extends Component {

  /**
   * @param {any} props
   * @param {any} context
   */
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      dimmer: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  /**
   * Switch hide/appear Sidebar
   */
  toggleVisibility() {
    this.setState({
      visible: !this.state.visible,
      dimmer: !this.state.dimmer
    });
  }

  /**
   * @return {JSX.Element}
   * @see {Component}
   */
  render() {
    return (
<div>
  <Sidebar as={Menu} animation="push" width="thin" visible={this.state.visible} icon="labeled" vertical inverted>
    <Menu.Item name="home">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item name="gamepad">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
  </Sidebar>
  <Sidebar.Pusher>
    <Menu fixed="top">
      <Menu.Item onClick={this.toggleVisibility}>
        <Icon name="content" />
      </Menu.Item>
    </Menu>
    <Dimmer.Dimmable dimmed={this.state.dimmer}>
      <Dimmer active={this.state.dimmer} onClickOutside={this.toggleVisibility} />
      <div style={body_style.body_content}>
        {this.props.children}
      </div>
    </Dimmer.Dimmable>
    <Menu fixed="bottom">
      <Menu.Item onClick={this.toggleVisibility}>
        <Icon name="content" />
      </Menu.Item>
    </Menu>
  </Sidebar.Pusher>
</div>
    );
  }
}
