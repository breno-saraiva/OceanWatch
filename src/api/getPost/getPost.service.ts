import { getPostDto } from "./getPostDto";

export const getCategorias = async (): Promise<getPostDto[]> => {
  const data = await fetch("", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return data;
};
