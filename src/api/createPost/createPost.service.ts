import { createPostDto } from "./createPostDto";

export const createPost = async (post: createPostDto) => {
  await fetch("", {
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
