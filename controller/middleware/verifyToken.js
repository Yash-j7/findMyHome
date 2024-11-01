import jwt from "jsonwebtoken"
export const verifyToken = (req,res,next) => {
    const token = req.cookies.token;
    console.log(token)

    if(!token){return res.status(401).json({message : "Not Authnticated !!"})};

    jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,payload) =>{//payload gets user details
        if(err) return res.status(402).json({message : "Token not verified!!"})
            req.userId = payload.id;
    })
    
    next()

}