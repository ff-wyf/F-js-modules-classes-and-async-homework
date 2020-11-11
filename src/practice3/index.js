const fetch = require("node-fetch");

export const getPoetry = async () => {
  const data = await fetch("https://v1.jinrishici.com/all.json");
  const { content, origin, author } = await data.json();
  return [content, author, origin];
};
