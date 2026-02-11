
import ProjectImg1 from "../assets/project1.png";
import ProjectImg2 from "../assets/project2.png";
import ProjectImg3 from "../assets/project3.png";
import ProjectImg4 from "../assets/project4.png";

interface Map {
  [key: string]: string | undefined;
}



export enum Constants {
  USERNAME = "Jacob Lausier",
}


export const projectImage: Map = {
  "afk": ProjectImg1,
  "walletwizard": ProjectImg2,
  "lawnshark": ProjectImg3,
  "valhalla banquet wagon": ProjectImg4,
};

