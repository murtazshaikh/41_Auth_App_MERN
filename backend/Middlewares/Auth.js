const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  console.log(auth, "auth"); // this will print only token
  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is required" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    console.log(decoded, "decoded");
    // it will print this
    // {
    //     email: 'jayesh@example.com',
    //     _id: '68197053933af2a6dbdbb5f9',
    //     iat: 1746498799,
    //     exp: 1746585199
    //   } decoded
      
    req.user = decoded;
    next();
  } catch {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};

module.exports = ensureAuthenticated;
