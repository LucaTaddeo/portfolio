import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import USER from "./thisIsMe";

const defaultSubjectForEmails = "Hello from lucataddeo.com!";

const CONTACTS = [
    {
        name: "Instagram",
        icon: <InstagramIcon style={{margin: 0}}/>, 
        link: "https://instagram.com/lucataddeo",
        action: () => window.open("https://instagram.com/lucataddeo")
    },
    {
        name: "Github",
        icon: <GitHubIcon style={{margin: 0}}/>,
        link: "https://github.com/LucaTaddeo",
        action: () => window.open("https://github.com/LucaTaddeo")
    },
    {
        name: "E-mail",
        icon: <MailOutlineIcon style={{margin: 0}}/>,
        link: "mailto:"+USER.email,
        action: () => window.location.href = "mailto:"+USER.email+"?subject="+defaultSubjectForEmails,
    }
];

export default CONTACTS;