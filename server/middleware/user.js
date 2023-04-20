const jwt = require("jsonwebtoken");
const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const jwtSecret = "PZWT2Y3RW39yS2YFlM3o";

  if (!authHeader) {
    return res.status(401).json({ message: "Missing Authorization Header" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = { authorize };
