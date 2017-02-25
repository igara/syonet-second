import React, {Component, PropTypes} from "react";

export default class Body extends Component {
  render() {
    return (
<div>ni
  {this.props.children}
</div>
    );
  }
}

Body.propTypes = {
  children: PropTypes.object
};
