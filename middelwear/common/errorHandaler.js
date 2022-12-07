const createError = require("http-errors");

function notFound(req, res, next) {
  next(createError(404, "Your requisted items not found"));
}

function commonError(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { Message: err.Message };

  res.status(err.status || 500);

  if (res.locals.html) {
    res.render("error", {
      title: "Error page",
    });
  } else {
    res.json(res.locals.error);
  }
  next();
}

module.exports = {
  notFound,
  commonError,
};
