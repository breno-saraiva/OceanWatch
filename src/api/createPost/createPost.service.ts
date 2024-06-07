import { createPostDto } from "./createPostDto";

export const createPost = async (post: createPostDto) => {
  await fetch("https://global-solution-1-2024.vercel.app/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((resp) => resp.json)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};
