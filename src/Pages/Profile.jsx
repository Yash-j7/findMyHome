import React, { useState } from "react";
import Layout from "../components/Layout";
import { listData, userData } from "./../components/dummydata";
import Card from "./../components/Card";

function Profile() {
  const [chat, setChat] = useState(1);
  return (
    <Layout>
      <div className="md:ml-20 p-5 md:mr-5 flex flex-col md:flex-row font-mono">
        <div className="info md:w-[50%] w-full p-2 m-2">
          <div className="flex justify-between">
            <div className="text-3xl">User Information</div>
            <div>
              <button className="bg-orange-300 p-2 font-mono font-semibold rounded-md">
                Update profile
              </button>
            </div>
          </div>
          <div>
            <div className="flex gap-3 mt-5">
              <p>Avatar :</p>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                srcset=""
                className="rounded-full object-cover w-[40px] h-[40px]"
              />
            </div>
            <div className="flex gap-3 mt-1">
              <p>name : </p>
              <p className=" font-semibold">John Aura</p>
            </div>

            <div className="flex gap-3 mt-1">
              <p>Email : </p>
              <p className=" font-semibold">John@johny.com</p>
            </div>
            <div className="flex justify-between mt-10">
              <div className="text-2xl ">My List</div>
              <div>
                <button className="bg-orange-300 p-2 font-mono font-semibold rounded-md">
                  Add new List
                </button>
              </div>
            </div>
            <div className="mt-5">
              {listData.map((item) => (
                <Card item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="chat w-full md:w-[50%] bg-orange-100 p-2 m-2 h-[800px] flex flex-col">
          <div className="messages flex flex-col gap-[20px] w-[100%] h-[45%] overflow-y-scroll">
            <h1 className="text-xl font-semibold font-mono">Messages</h1>
            <div className="message">
              <div className="flex items-center gap-4 bg-white w-[400px] cursor-pointer text-sm">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="rounded-full w-[30px]  h-[30px]  object-cover"
                />
                <p className="font-semibold flex-shrink-0">{userData.name}</p>
                <p className="flex-grow truncate">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p className="text-[12px] self-end">1 hour ago</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p className="text-[12px]">1 hour ago</p>
                  </div>
                  <div className="flex flex-col bg-orange-100 m-1">
                    <p className="text-[14px] own self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p className="text-[12px] self-end">1 hour ago</p>
                  </div>
                  <div></div>
                  <div className="flex flex-col ">
                    <p className="text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
  );
}

export default Profile;
