import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
export const getUsers = async (req, res) => {
  try {
    console.log("running well")
      const { userName, email, password } = req.body;

      

  
  } catch (error) {
      console.error('Error get users:', error);
      res.status(500).json({ error: 'Users get failed' });
  }
};
export const getUser = async (req, res) => {
  try {
      const { userName, email, password } = req.body;
      console.log("running well")
      

      
  } catch (error) {
      console.error('Error get user:', error);
      res.status(500).json({ error: 'User get failed' });
  }
};
export const updateUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        

        
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'User update failed' });
    }
};
export const deleteUser = async (req, res) => {
  try {
      const { userName, email, password } = req.body;

      

      
  } catch (error) {
      console.error('Error delete user:', error);
      res.status(500).json({ error: 'User delete failed' });
  }
};