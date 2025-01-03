import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});
let onlineUser = [];

const addUser = (userId, socketId) => {
  const user = onlineUser.find((user) => user.userId === userId);
  if (user) {
    user.socketId = socketId;
  } else {
    onlineUser.push({ userId, socketId });
  }
  console.log("Updated user list:", onlineUser);
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
  console.log("User removed:", onlineUser);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("newUser", (userId) => {
    console.log("New user connected:", userId);
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    console.log("Message received for:", receiverId);
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    } else {
      console.error(`User with receiverId ${receiverId} is not online.`);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
    removeUser(socket.id);
  });
});

io.listen(5000);
