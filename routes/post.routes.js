import express from 'express'
import { createPost,getPost,updatePost,deletePost } from '../controller/post.controller.js'

const router = express.Router()


router.use('/create',createPost)
router.use('/update',updatePost)
router.use('/delete',deletePost)
router.use('/get',getPost)


export default router
