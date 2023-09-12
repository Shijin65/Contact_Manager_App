const {constants} = require("../constance")
const errorHandler = (err, req, res, next) => {
  const statucode = res.statucode ? req.statucode : 500;
  switch (statucode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "VALIDATION_ERROR",
        message: err.message,
        stacktrace: err.stackt,
      });


    case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized",
        message: err.message,
        stacktrace: err.stackt,
      });

     

      case constants.FORBITTEN:
      res.json({
        title: "unauthorized",
        message: err.message,
        stacktrace: err.stackt,
      });

      break;
      case constants.NOT_FOUND:
        res.json({
            title: "not found",
            message: err.message,
            stacktrace: err.stackt,
        });

        case constants.SERVER_ERRROR:
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
