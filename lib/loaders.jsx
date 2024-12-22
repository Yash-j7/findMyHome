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
  try {
    const [res, chatPromise] = await Promise.all([
      axios.get("http://localhost:8080/user/profilePost", {
        withCredentials: true,
      }),
      axios.get("http://localhost:8080/chat", { withCredentials: true }),
    ]);

    console.log("res", res);
    console.log("chatPromise", chatPromise);

    return { data: res.data, chats: chatPromise.data };
  } catch (error) {
    console.error("Error in profilePageLoader:", error);
    return { data: null, chats: null }; // Graceful fallback
  }
};
