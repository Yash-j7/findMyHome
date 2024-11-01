import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: { 
                userName,
                email,
                password: hashPassword
            },
        });

        console.log(newUser);
        res.status(201).json({message : "User created successfully"});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'User registration failed' });
    }
};



export const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { userName },
    });
    if (!user) {
      return res.status(404).json({
        message: "Invalid credentials",
      });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(404).json({
        message: "Invalid credentials",
      });
    }

    // Generate token and send it to the user
    const age = 1000 * 60 * 60 * 24 * 7; // Token expiry time
    const token = jwt.sign(
      { id: user.id,
        isAdmin : true,
       },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password:userPasswd, ...others } = user; // Exclude password from the user object

    // Send the cookie and the response
    return res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true, // Uncomment if you're using HTTPS
        maxAge: age,
      })
      .json(others);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred during login",
    });
  }
};

export const logout = ((req,res) => {
    res.clearCookie("token").status(200).json({message:"Logout successfully"})
})