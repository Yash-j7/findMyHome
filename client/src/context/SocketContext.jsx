import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./authContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { currUser } = useContext(AuthContext);
  useEffect(() => {
    currUser && socket?.emit("newUser", currUser.id);
  }, []);
  useEffect(() => {
    if (currUser && !socket) {
      const newSocket = io("http://localhost:4000");
      setSocket(newSocket);
      return () => newSocket.disconnect(); // Clean up on unmount
    }
  }, [currUser]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
