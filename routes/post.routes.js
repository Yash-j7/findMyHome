import express from 'express'
import {getPost,updatePost,deletePost, getPosts, addPost } from '../controller/post.controller.js'
import { verifyToken } from './../controller/middleware/verifyToken.js';

const router = express.Router()


router.get('/',getPosts )
router.get('/:id',getPost)
router.post("/",verifyToken,addPost)
router.delete('/:id',verifyToken,deletePost)
router.put('/:id',verifyToken,updatePost)


export default router
