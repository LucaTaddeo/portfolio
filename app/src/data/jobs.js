import FunctionalLogo from "./images/functionalLogo.jpeg";
import FestivalLogo from "./images/festivalLogo.png";
import LaStradaLogo from "./images/laStradaLogo.jpg";
import {Text} from "@nextui-org/react";

const JOBS = [{
    position: "Front End Dev",
    companyName: "Functional",
    companyUrl: "https://www.functionalcompany.com",
    from: "October 2022",
    to: "Today",
    logo: FunctionalLogo,
    description: <Text>This is the Job Description</Text>,
    primarySkills: [],
    secondarySkills: []
}, {
    position: "Full Stack Dev (Freelance)",
    companyName: "Artist Club",
    from: "January 2020",
    to: "April 2022",
    logo: FestivalLogo,
    description: <Text>This is the Job Description</Text>,
    primarySkills: ["React", "Express.js"],
    secondarySkills: ["Node.js", "MongoDB", "Django", "MySQL"]
}, {
    position: "Socio Cultural Operator & Tech Specialist",
    companyName: "La Strada Onlus",
    from: "June 2021",
    to: "December 2022",
    logo: LaStradaLogo,
    description: <Text>This is the Job Description</Text>,
    primarySkills: [],
    secondarySkills: []
}]

export default JOBS;