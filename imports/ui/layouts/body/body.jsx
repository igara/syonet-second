import React, {Component, PropTypes} from "react";
import {Header, Icon, Button, Sidebar, Menu, Segment, Image} from "semantic-ui-react";

export default class Body extends Component {
  /**
   * @param {any} props
   * @param {any} context
   */
  constructor(props, context) {
    super(props);
    this.state = {visible: false};
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  /**
   * @return {JSX.Element}
   * @see {Component}
   */
  render() {
    return (
<div>
  <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
  <Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} animation="push" width="thin" visible={false} icon="labeled" vertical inverted>
      <Menu.Item name="home">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item name="gamepad">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item name="camera">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher>
      <Segment basic>
        <Header as="h3">Application Content</Header>
        <Image src="http://semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
  {this.props.children}
</div>
    );
  }
}

