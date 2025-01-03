import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { listData, userData } from "./../components/dummydata";
import Card from "./../components/Card";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useLoaderData } from "react-router-dom";
import { format } from "timeago.js";
import { SocketContext } from "../context/SocketContext";
import { useRef } from "react";
import { useNotificationStore } from "./../lib/Notification";

function Profile() {
  const { data } = useLoaderData();
  const { chats } = useLoaderData();
  console.log(chats);
  console.log("Data ", data);
  console.log("Chats ", chats);
  const [chat, setChat] = useState(null);
  const { currUser, updateUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currUser) navigate("/login");
  }, [currUser, navigate]);
  console.log(currUser);
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpenChat = async (id, receiver) => {
    try {
      const d = await axios.get("http://localhost:8080/chat/" + id, {
        withCredentials: true,
      });
      if (!d.data.seenBy.includes(currUser.id)) {
        decrease();
      }
      console.log("d = ", d);
      setChat({ ...d.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log(chat);
    const formData = new FormData(e.target);
    const text = formData.get("text");
    console.log(text);
    try {
      const res = await axios.post(
        "http://localhost:8080/message/" + chat.id,
        {
          text,
        },
        { withCredentials: true }
      );
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const messageEndRef = useRef();
  const decrease = useNotificationStore((state) => state.decrease);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [chat]);
  useEffect(() => {
    const read = async () => {
      try {
        await axios.get("http://localhost:8080/chat/read" + chat.id, {
          withCredentials: true,
        });
      } catch (err) {
        console.log(err);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      });
    }
    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);

  return (
    currUser && (
      <Layout>
        <div className="md:ml-20 p-5 md:mr-5 flex flex-col md:flex-row font-mono">
          <div className="info md:w-[50%] w-full p-2 m-2">
            <div className="flex justify-between">
              <div className="text-3xl">User Information</div>
              <div>
                <button className="bg-orange-300 p-2 font-mono font-semibold rounded-md">
                  <Link to="/update">Update profile</Link>
                </button>
              </div>
            </div>
            <div>
              <div className="flex gap-3 mt-5">
                <p>Avatar :</p>
                <img
                  src={currUser.avatar || "/noavatar.jpg"}
                  alt=""
                  srcSet=""
                  className="rounded-full object-cover w-[40px] h-[40px]"
                />
              </div>
              <div className="flex gap-3 mt-1">
                <p>name : </p>
                <p className=" font-semibold">{currUser.userName}</p>
              </div>

              <div className="flex gap-3 mt-1">
                <p>Email : </p>
                <p className=" font-semibold">{currUser.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn text-[18px] btn-warning bg-red-500 mt-3"
              >
                {" "}
                Logout
              </button>
              <div className="flex justify-between mt-10">
                <div className="text-2xl ">My List</div>
                <Link to="/newPost">
                  <div>
                    <button className="bg-orange-300 p-2 font-mono font-semibold rounded-md">
                      Add new Post
                    </button>
                  </div>
                </Link>
              </div>
              <div></div>
              <div className="mt-5">
                {data.userPost.map((item, index) => (
                  <Card item={item} key={index} />
                ))}
              </div>
              <div className="text-2xl ">Saved Post</div>
              <div className="mt-5">
                {data.savedPost.map((item, index) => (
                  <Card item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="chat w-full md:w-[50%] bg-orange-100 p-2 m-2 h-[800px] flex flex-col">
            <div className="messages flex flex-col gap-[20px] w-[100%] h-[45%] overflow-y-scroll">
              <div className="message">
                <h1 className="text-xl font-semibold font-mono">Messages</h1>
                {chats?.map((c) => (
                  <div
                    className="flex items-center gap-4 bg-white w-[400px] cursor-pointer text-sm"
                    key={c.id}
                    style={{
                      backgroundColor:
                        c.seenBy.includes(currUser.id) || chat?.id === c.id
                          ? "white"
                          : "#fecd514e",
                    }}
                    onClick={() => handleOpenChat(c.id, c.receiver)}
                  >
                    <img
                      src={c.receiver.avatar || "/noavatar.jpg"}
                      alt=""
                      className="rounded-full w-[30px]  h-[30px]"
                    />
                    <span>{c.receiver.username}</span>
                    <p>{c.lastMessage}</p>
                  </div>
                ))}
              </div>
            </div>
            {chat && (
              <div className="chats mt-10 bg-orange-300 w-full overflow-y-scroll h-[40%]">
                <div className=" flex justify-between p-3">
                  <img
                    src={chat.receiver.avatar || "/noavatar.jpg"}
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  {chat.receiver.userName}
                  <button className="text-2xl" onClick={() => setChat(null)}>
                    X
                  </button>
                </div>
                <div className="mid bg-orange-50">
                  {chat.messages.map((m) => {
                    console.log("m = ", m);
                    console.log("curr = ", currUser);

                    // Determine alignment based on message sender
                    const isCurrentUser = m.userId === currUser.id;

                    return (
                      <>
                        <div
                          key={m.id}
                          className={`flex ${
                            isCurrentUser ? "justify-end" : "justify-start"
                          } p-2`}
                        >
                          <div
                            className={`flex flex-col ${
                              isCurrentUser ? "bg-blue-100" : "bg-orange-100"
                            } m-1 p-2 rounded-lg max-w-[60%]`}
                          >
                            <p
                              className={`text-[14px] ${
                                isCurrentUser
                                  ? "text-right self-end"
                                  : "text-left self-start"
                              }`}
                            >
                              {m.text}
                            </p>
                            <p
                              className={`text-[12px] text-gray-500 ${
                                isCurrentUser ? "self-end" : "self-start"
                              }`}
                            >
                              {format(m.createdAt)}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div
                    ref={messageEndRef}
                    style={{ margin: 0, padding: 0 }}
                  ></div>
                </div>
              </div>
            )}
            {chat && (
              <div>
                <form action="" onSubmit={handleSendMessage}>
                  <div className="bottom mt-2 flex justify-between p-2">
                    <textarea
                      placeholder="Start Typing"
                      name="text"
                      id=""
                      className="w-[80%] text-sm h-10 mt-1 p-2 outline-none cursor-text border-none"
                    ></textarea>
                    <button className="bg-orange-300 h-[50px] w-[70px] rounded-xl text-black font-semibold font-mono">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </Layout>
    )
  );
}

export default Profile;
