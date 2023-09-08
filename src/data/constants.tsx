
import ProjectImg1 from "../assets/project1.png";
import ProjectImg2 from "../assets/project2.png";
interface Map {
  [key: string]: string | undefined;
}



export enum Constants {
  USERNAME = "Jacob Lausier",
}


export const projectImage: Map = {
  "afk": ProjectImg1,
  "walletwizard": ProjectImg2,
};
