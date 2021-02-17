
class REST {
  responseWith({ unit, message, data = {} }) {
    return {
      error: false,
      message: message,
      data
    };
  }

  response({ message, data = {} }) {
    return {
      error: false,
      message: message,
      data
    };
  }

  responseError({ statusCode, message, stack }) {
    return {
      error: true,
      message: message,
      code: statusCode,
      stack
    };
  }
}

module.exports = new REST();
