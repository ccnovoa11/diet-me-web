const jwt = require("jsonwebtoken");

module.exports = (req,res, next)=>{
  try{
    console.log(req.headers.token);
    const decoded = jwt.verify(req.headers.token, "elgranvaron");
    req.userData = decoded;
    if(decoded.medic === false){
      res.status(403).json({
        message:"Authorization failure. You are not a medic"
      });
    }
    next();
  }catch(error){
    return res.status(401).json({
      message:"Auth failed"
    });
  }
};