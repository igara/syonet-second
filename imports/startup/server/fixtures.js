Meteor.startup(() => {
  WebApp.connectHandlers.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentaial", true);
    return next();
  });
});
