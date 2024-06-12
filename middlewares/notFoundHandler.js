const notFound = (req, res, next) => {
  return res.status(404).json({ message: "Path Not Found" });
};

module.exports = notFound;
