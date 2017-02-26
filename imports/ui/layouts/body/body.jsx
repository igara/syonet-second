import React, {Component, PropTypes} from "react";
import {Header, Icon} from "semantic-ui-react";

export default class Body extends Component {
  render() {
    return (
<div>
  <Header as='h2' icon>
    <Icon name='settings' />
    Account Settings
    <Header.Subheader>
      Manage your account settings and set e-mail preferences.
    </Header.Subheader>
  </Header>
  {this.props.children}
</div>
    );
  }
}

Body.propTypes = {
  children: PropTypes.object
};
