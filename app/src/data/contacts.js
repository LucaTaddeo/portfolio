import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import USER from "./thisIsMe";

export const SUBJECT_FOR_EMAILS = "Hello from lucataddeo.com!";

const CONTACTS = [
  {
    name: "Github",
    icon: <GitHubIcon style={{ margin: 0 }} />,
    link: "https://github.com/LucaTaddeo",
    action: () => window.open("https://github.com/LucaTaddeo"),
  },
  {
    name: "Linkedin",
    icon: <LinkedInIcon style={{ margin: 0 }} />,
    link: "https://www.linkedin.com/in/lucataddeo",
    action: () => window.open("https://www.linkedin.com/in/lucataddeo"),
  },
  {
    name: "Instagram",
    icon: <InstagramIcon style={{ margin: 0 }} />,
    link: "https://instagram.com/lucataddeo",
    action: () => window.open("https://instagram.com/lucataddeo"),
  },
  {
    name: "E-mail",
    icon: <MailOutlineIcon style={{ margin: 0 }} />,
    link: "mailto:" + USER.email,
    action: () =>
      (window.location.href =
        "mailto:" + USER.email + "?subject=" + SUBJECT_FOR_EMAILS),
  },
];

export default CONTACTS;
