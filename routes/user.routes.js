import express from 'express';
import {savePost,profilePost, getUser, deleteUser ,getUsers, updateUser } from '../controller/user.controller.js';
import { verifyToken } from '../controller/middleware/verifyToken.js';

const router = express.Router();

router.get('/getUsers', getUsers);

// router.get('/getUser/:id',verifyToken, getUser);

router.put('/updateUser/:id',verifyToken, updateUser);

router.delete('/deleteUser/:id',verifyToken, deleteUser);

router.post('/save',verifyToken, savePost);

router.get('/profilePost',verifyToken, profilePost);

export default router;
