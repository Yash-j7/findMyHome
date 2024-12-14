
import prisma from './../lib/prisma.js';


export const  getPost = (async(req,res) => {
    try {
        const id = req.params.id
        const post = await prisma.post.findUnique({
            where : {id},
            include:{
                PostDetail:true,
                user:{
                    select:{
                        userName:true,
                        avatar:true
                    }
                }
            }
        })
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"error in getPost controller"})
    }
    
})
export const getPosts = async (req, res) => {
    const query = req.query
    console.log(query)
    try {
        const posts = await prisma.post.findMany({
            where: {
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price: {
                  gte: parseInt(query.minPrice) || undefined,
                  lte: parseInt(query.maxPrice) || undefined,
                }
            }
        });
        //console.log(posts)
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error in getPosts:", error);
        res.status(500).json({ message: "Error in getPosts controller" });
    }
};
export const deletePost = (async(req,res) => {
    try {
        const id = req.params.id
        const tokenUserId = req.userId
        const post = await prisma.post.findUnique({
            where : {id}
        })
        if(post.userId !== tokenUserId) res.status(403).json({message:"Not authorized"})
        await prisma.post.delete({
        where:{id}
        })
        res.status(200).json({message:"post deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"error in delete controller"})
    }
        
})
export const updatePost = (() => {
    console.log("update Post");
    
})
export const addPost = (async(req,res) => {
    try {
        const body = req.body
        const tokenUserId = req.userId
        const newPost = await prisma.post.create({
            data:{
                ...body.postData,
                userId:tokenUserId,
                PostDetail:{
                    create:body.PostDetail, 
                }
            }
        })
        res.status(200).json(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"error in addPost controller"})
    }
    
})