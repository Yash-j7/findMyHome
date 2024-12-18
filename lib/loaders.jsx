import axios from "axios";
export const singlePageLoader = async ({ params }) => {
  const res = await axios.get(`http://localhost:8080/post/${params.id}`);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  console.log("request", request);
  const query = request.url.split("?")[1];
  console.log("Query", query);
  const res = await axios.get(`http://localhost:8080/post?${query}`);
  return res.data;
};

export const profilePageLoader = async () => {
  const res = await axios.get("http://localhost:8080/user/profilePost", {
    withCredentials: true, // Include cookies in request
  });
  return res.data;
  // const chatPromise = await axios.get("http://localhost:8080/chat", {
  //   withCredentials: true,
  // });
  // return chatPromise.data;
};
