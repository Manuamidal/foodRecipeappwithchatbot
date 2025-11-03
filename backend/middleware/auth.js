const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
    let token=req.headers['authorization']
    if(token){
        token=token.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                return  res.status(401).json({error:"Unauthorized Access"})
            }
            else{
                console.log(decoded)
                req.user=decoded
            }
        })
        next()
    }else{
        return res.status(403).json({error:"No token provided"})
    }}
    module.exports=verifyToken;