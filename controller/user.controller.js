import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
export const getUsers = async (req, res) => {
  try {
    console.log("running well")
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
      console.error('Error get users:', error);
      res.status(500).json({ error: 'Users get failed' });
  }
};
export const getUser = async (req, res) => {
  try {
      const id = req.params.id;
      const user = await prisma.user.findUnique(
        {
          where : {id}
        }
      );
    res.status(200).json(user)

      
  } catch (error) {
      console.error('Error get user:', error);
      res.status(500).json({ error: 'User get failed' });
  }
};
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  console.log("Params ID:", id);
  console.log("Token ID:", tokenId);

  if (id !== tokenId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  let updatedPassword = null;

  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    const { password: userPassword, ...rest } = updatedUser;

    res.status(200).json(rest);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "User update failed" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const tokenId = req.userId;

    if (id !== tokenId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.user.delete({
      where : {id},
    })

    res.status(200).json({message : "user deleted"})
      
  } catch (error) {
      console.error('Error delete user:', error);
      res.status(500).json({ error: 'User delete failed' });
  }
};