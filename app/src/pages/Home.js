import { Link } from "@nextui-org/react";
import React from "react";
import USER from "../data/thisIsMe";
import { AnimatePresence, motion } from "framer-motion";
//import useMobileDetect from "use-mobile-detect-hook";
import { SUBJECT_FOR_EMAILS } from "../data/contacts";
import SocialBar from "../components/SocialBar";
import Introduction from "../sections/Introduction";
import AboutMe from "../sections/AboutMe";
import WorkExperience from "../sections/WorkExperience";

const maxWidthOfBody = "900px";

const EmailContainer = () => {
  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: 0,
        float: "right",
        right: 0,
        padding: "3rem 4rem",
      }}
    >
      <Link
        href={"mailto:" + USER.email + "?subject=" + SUBJECT_FOR_EMAILS}
        color="secondary"
        style={{ writingMode: "vertical-rl" }}
      >
        {USER.email}
      </Link>
    </motion.div>
  );
};

const Home = () => {
  // const device = useMobileDetect();

  return (
    <div style={{ marginBottom: "10rem" }}>
      <AnimatePresence mode="wait">
        <SocialBar key={1} />
        <Introduction key={2} maxWidth={maxWidthOfBody} />
        <AboutMe key={3} maxWidth={maxWidthOfBody} />
        <WorkExperience key={4} maxWidth={maxWidthOfBody} />
        <EmailContainer key={5} />
      </AnimatePresence>
    </div>
  );
};

export default Home;
