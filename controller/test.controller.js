import jwt from "jsonwebtoken"
export const shouldBeLoggedIn = (req,res) => {
    console.log(req.userId)

    res.status(200).json({message : "You are Authenticated!!"})

}

export const shouldBeAdmin = (req,res) => {
    const token = req.cookies.token;
    console.log(token)

    if(!token){return res.status(401).json({message : "Not Authnticated !!"})};

    jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,payload) =>{//payload has user details
        if(err) return res.status(402).json({message : "Token not verified!!"})
        if(!payload.isAdmin)return res.status(402).json({message : "Not Autherized!!"})
    })

    res.status(200).json({message : "You are Authenticated!!"})
}