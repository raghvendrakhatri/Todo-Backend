const commonErrorHandler = async (
  req,
  res,
  message,
  statusCode = 500,
  error = null,
) => {
  let errorMessage = 'Something went wrong. Please try again';
  if (message) {
    errorMessage = message;
  }

  if (error && error.message) {
    errorMessage = error.message;
  }
  req.error = error;

  const response = {
    statusCode,
    data: {},
    message: errorMessage,
  };

  res.status(statusCode).json(response);
};

const successResponse = async (req, res) => {
  const { data } = req;
  return res.status(200).json({
    message: 'success',
    data: data || {},
    status: 200,
  });
};

export { commonErrorHandler, successResponse };
