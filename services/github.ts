import { Github } from "types";

const fetchGithub = async (): Promise<Github> => {
  const response = await fetch("https://api.github.com/users/mortezasabihi");
  const data: Github = await response.json();

  return data;
};

export default fetchGithub;
