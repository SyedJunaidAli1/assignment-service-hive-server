export const mockAuth = (req, res, next) => {
  req.user = {
    id: "6964de5d075b71e317c0f08c",
  };
  next();
};
