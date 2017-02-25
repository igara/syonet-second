import React, {Component, PropTypes} from "react";

export default class NotFoundPage extends Component {
  render() {
    const {items = []} = this.props;
    return (
<div>存在しないページです</div>
    );
  }
}

NotFoundPage.propTypes = {
  items: PropTypes.array
};

// WebApp.connectHandlers.use(function (req, res, next) {
//   res.statusCode = 404;
//   return next();
// });
