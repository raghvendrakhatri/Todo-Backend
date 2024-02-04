const getAllTodo = async (req, res, next) => {
  const { data } = req;
  const serializedData = [];
  data.forEach((element) => {
    const {
      _id,
      title,
      description,
      created_at: createdAt,
      updated_at: updatedAt,
    } = element;
    serializedData.push({
      title,
      description,
      id: _id,
      createdAt,
      updatedAt,
    });
  });

  req.data = serializedData;
  next();
};

export { getAllTodo };
