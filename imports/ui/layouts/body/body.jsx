import React, {Component, PropTypes} from "react";
import {Icon, Sidebar, Menu, Dimmer} from "semantic-ui-react";
import body_style from "./body.css.js";
import {Link} from "react-router";

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
    this.setAddResizeEvent = this.setAddResizeEvent.bind(this);
  }

  /**
   * When Window Resize Event
   */
  setAddResizeEvent() {
    window.onresize = () => {
      this.setAdjustmentHeight();
    };
  }

  /**
   * 高さ調整を行う
   */
  setAdjustmentHeight() {
    const window_height = document.body.clientHeight;
    const $body_content = document.querySelector(".body_content");
    // ヘッダーフッターの調整を行う
    $body_content.style.height = window_height + "px";
  }

  /**
   * Switch hide/appear Sidebar
   */
  toggleVisibility() {
    this.setState({
      visible: !this.state.visible,
      dimmer: !this.state.dimmer
    });
    if (this.state.visible === false) {
      // ヘッダーフッターの調整を行う
      this.setAdjustmentHeight();
    }
  }

  /**
   * @return {JSX.Element}
   * @see {Component}
   */
  render() {
    return (
<div>
  <Sidebar as={Menu} animation="push" width="thin" visible={this.state.visible} icon="labeled" vertical inverted>
    <Link to='/'>
      <Menu.Item name="home">
        <Icon name="home" />Home
      </Menu.Item>
    </Link>
    <Link to="/games">
      <Menu.Item name="gamepad">
        <Icon name="gamepad" />Games
      </Menu.Item>
    </Link>
    <Link to="/datas">
      <Menu.Item name="datas">
        <Icon name="student" />Datas
      </Menu.Item>
    </Link>
  </Sidebar>
  <Sidebar.Pusher>
    <Menu color="green" inverted fixed="top">
      <Menu.Item onClick={this.toggleVisibility}>
        <Icon name="content" />
      </Menu.Item>
    </Menu>
    <Dimmer.Dimmable dimmed={this.state.dimmer}>
      <Dimmer active={this.state.dimmer} onClickOutside={this.toggleVisibility} />
      <div style={body_style.body_content} className="body_content">
        {this.props.children}
      </div>
    </Dimmer.Dimmable>
    <Menu color="green" inverted fixed="bottom">
      <Menu.Item onClick={this.toggleVisibility}>
        <Icon name="content" />
      </Menu.Item>
    </Menu>
  </Sidebar.Pusher>
</div>
    );
  }
}
