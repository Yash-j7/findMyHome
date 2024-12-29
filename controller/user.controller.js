import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const getUsers = async (req, res) => {
  try {
    console.log("running well");
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error get users:", error);
    res.status(500).json({ error: "Users get failed" });
  }
};
export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error get user:", error);
    res.status(500).json({ error: "User get failed" });
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
      where: { id },
    });

    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    console.error("Error delete user:", error);
    res.status(500).json({ error: "User delete failed" });
  }
};

export const savePost = async (req, res) => {
  const { postId } = req.body;
  const tokenUserId = req.userId;

  if (!postId || !tokenUserId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId,
        },
      },
    });

    if (savedPost) {
      await prisma.savedPost.delete({
        where: { id: savedPost.id },
      });
      return res.status(200).json({ message: "Post removed from saved" });
    } else {
      await prisma.savedPost.create({
        data: {
          userId: tokenUserId,
          postId,
        },
      });
      return res.status(200).json({ message: "Post saved successfully" });
    }
  } catch (error) {
    console.error("Error in savePost controller:", error);
    res.status(500).json({ error: "Error saving post" });
  }
};

export const profilePost = async (req, res) => {
  try {
    const tokenUserId = req.params.id;
    const userPost = await prisma.post.findMany({
      where: { userId: tokenUserId },
    });
    const saved = await prisma.savedPost.findMany({
      where: { userId: tokenUserId },
      include: {
        post: true,
      },
    });
    const savedPost = saved.map((item) => item.post);
    res.status(200).json({ userPost, savedPost });
  } catch (error) {
    console.error("Error profile:", error);
    res.status(500).json({ error: "User profile error" });
  }
};

export const setNotification = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const number = await prisma.chat.count({
      where: {
        userIDs: {
          hasSome: [tokenUserId],
        },
        NOT: {
          seenBy: {
            hasSome: [tokenUserId],
          },
        },
      },
    });
    res.status(200).json(number);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed in notifcation!" });
  }
};
