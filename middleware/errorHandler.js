const errorHandler = (err, req, res, next) => {
  const statucode = res.statucode ? req.statucode : 500;
  switch (statucode) {
    case 400:
      res.json({
        title: "validation failed",
        message: err.message,
        stacktrace: err.stackt,
      });
      break;
      case 404:
        res.json({
            title: "not found",
            message: err.message,
            stacktrace: err.stackt,
        });

        break;
    default:
      break;
  }
  
};
module.exports = errorHandler;
