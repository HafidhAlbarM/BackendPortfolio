module.exports = {
  success: (message = "", data = null) => {
    let response = {
      success: true,
      message,
      data,
    };

    return response;
  },
  failed: (message = "", data = null) => {
    let response = {
      success: false,
      message,
      data,
    };

    return response;
  },
};
