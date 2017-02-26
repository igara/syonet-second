import React, {Component, PropTypes} from "react";

export default class NotFoundPage extends Component {
  render() {
    return (
<div>存在しないページです</div>
    );
  }
}

// WebApp.connectHandlers.use(function (req, res, next) {
//   res.statusCode = 404;
//   return next();
// });
