import { getPostDto } from "./getPostDto";

export const getCategorias = async (): Promise<getPostDto[]> => {
  const data = await fetch("https://global-solution-1-2024.vercel.app/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return data;
};
