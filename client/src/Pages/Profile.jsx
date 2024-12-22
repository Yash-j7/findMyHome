import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { listData, userData } from "./../components/dummydata";
import Card from "./../components/Card";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useLoaderData } from "react-router-dom";

function Profile() {
  const { data } = useLoaderData();
  const { chats } = useLoaderData();
  console.log(chats);
  console.log("Data ", data);
  console.log("Chats ", chats);
  const [chat, setChat] = useState(1);
  const { currUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currUser) navigate("/login");
  }, [currUser, navigate]);
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChats = async () => {
    try {
      const d = await axios.get("http://localhost:8080/chat", {
        withCredentials: true,
      });
      console.log(d);
    } catch (error) {
      console.log(error);
    }
  };
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
                <button onClick={handleChats}>btn</button>
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
                    <img src={c.receiver.avatar || "/noavatar.jpg"} alt="" />
                    <span>{c.receiver.username}</span>
                    <p>{c.lastMessage}</p>
                  </div>
                ))}
              </div>

              <div className="message">
                <div className="flex items-center gap-4  bg-white w-[400px] cursor-pointer text-sm">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  <p className="font-semibold flex-shrink-0">{userData.name}</p>
                  <p className="flex-grow truncate">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
              <div className="message">
                <div className="flex items-center gap-4 bg-white w-[400px] cursor-pointer text-sm">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  <p className="font-semibold flex-shrink-0">{userData.name}</p>
                  <p className="flex-grow truncate">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
              <div className="message">
                <div className="flex items-center gap-4 bg-white w-[400px] cursor-pointer text-sm">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  <p className="font-semibold flex-shrink-0">{userData.name}</p>
                  <p className="flex-grow truncate">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
              <div className="message">
                <div className="flex items-center gap-4 bg-white w-[400px] cursor-pointer text-sm">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  <p className="font-semibold flex-shrink-0">{userData.name}</p>
                  <p className="flex-grow truncate">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
              <div className="message">
                <div className="flex items-center gap-4 bg-white w-[400px] cursor-pointer text-sm">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  <p className="font-semibold flex-shrink-0">{userData.name}</p>
                  <p className="flex-grow truncate">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
              <div className="message">
                <div className="flex items-center gap-4 bg-white w-[400px] cursor-pointer text-sm">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  <p className="font-semibold flex-shrink-0">{userData.name}</p>
                  <p className="flex-grow truncate">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
              <div className="message">
                <div className="flex items-center gap-4 bg-white w-[400px] cursor-pointer text-sm">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  <p className="font-semibold flex-shrink-0">{userData.name}</p>
                  <p className="flex-grow truncate">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
            </div>
            {chat && (
              <div className="chats mt-10 bg-orange-300 w-full overflow-y-scroll h-[40%]">
                <div className=" flex justify-between p-3">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-full w-[30px]  h-[30px] "
                  />
                  {userData.name}
                  <button className="text-2xl" onClick={() => setChat(null)}>
                    X
                  </button>
                </div>
                <div className="mid bg-orange-50">
                  <div>
                    <div className="flex  flex-col bg-orange-100 m-1">
                      <p className="text-[14px] own self-end">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-[12px] self-end">1 hour ago</p>
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-[12px]">1 hour ago</p>
                    </div>
                    <div>
                      <div className="flex flex-col bg-orange-100 m-1">
                        <p className="text-[14px] own self-end">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                        <p className="text-[12px] self-end">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-[12px]">1 hour ago</p>
                    </div>
                    <div className="flex flex-col bg-orange-100 m-1">
                      <p className="text-[14px] own self-end">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-[12px] self-end">1 hour ago</p>
                    </div>
                    <div></div>
                    <div className="flex flex-col ">
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-[12px]">1 hour ago</p>
                    </div>
                    <div>
                      <div className="flex flex-col bg-orange-100 m-1">
                        <p className="text-[14px] own self-end">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                        <p className="text-[12px] self-end">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-[12px]">1 hour ago</p>
                    </div>
                    <div>
                      <div className="flex flex-col bg-orange-100 m-1">
                        <p className="text-[14px] own self-end">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                        <p className="text-[12px] self-end">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {chat && (
              <div className="bottom mt-2 flex justify-between p-2">
                <textarea
                  placeholder="Start Typing"
                  name=""
                  id=""
                  className="w-[80%] text-sm h-10 mt-1 p-2 outline-none cursor-text border-none"
                ></textarea>
                <button className="bg-orange-300 h-[50px] w-[70px] rounded-xl text-black font-semibold font-mono">
                  Send
                </button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    )
  );
}

export default Profile;
