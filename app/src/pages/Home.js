import { Card, Text, Button, Link, Divider } from "@nextui-org/react";
import React from "react";
import USER from "../data/thisIsMe";
import { AnimatePresence, motion } from "framer-motion";
//import useMobileDetect from "use-mobile-detect-hook";
import CONTACTS from "../data/contacts";
import SocialBar from "../components/SocialBar";

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
        onPress={CONTACTS.find((c) => c.name === "E-mail").action}
        color="secondary"
        style={{ writingMode: "vertical-rl" }}
      >
        {USER.email}
      </Link>
    </motion.div>
  );
};

const IntroductionSection = (props) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div
        style={{
          margin: "0 auto",
          padding: "0.5rem 1.5rem 5rem 1.5rem",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Text h4 color="secondary" style={{ marginBottom: 0, fontSize: 23 }}>
          Welcome, I'm
        </Text>

        <Text
          h1
          css={{
            fontSize: 100,
            marginBottom: 0,
            textGradient:
              "112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #660099 70.46%",
          }}
        >
          {USER.firstName + " " + USER.lastName}.
        </Text>
        <Text h2>{USER.subtitle}</Text>
        <Text p style={{fontSize: 17}}>
          I'm a {USER.whatAmI}, based in {USER.city}, {USER.state}, specialized
          in building
        </Text>
        <Text p style={{fontSize: 17}}>
          incredible web applications, with a keen eye on astonishing UIs
        </Text>
      </div>
    </motion.section>
  );
};

const cardVariants = {
  offscreen: {
    y: -20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const ProjectsSection = (props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        style={{
          margin: "0 auto",
          padding: "0.5rem 1.5rem 5rem 1.5rem",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "20vh",
        }}
      >
        <motion.div className="card" variants={cardVariants}>
          <Text h4 color="secondary">
            About me
          </Text>
          <Text>
            Hello there! I'm Luca, a Web Developer based in Bolzano, Italy. I
            have a very weird background, jumping from classic literature, to
            nerdy computer science. I enjoy crafting beautiful UIs while keeping 
            clean and performant code!
          </Text>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Home = (props) => {
  // const device = useMobileDetect();

  return (
    <div>
      <AnimatePresence mode="wait">
        <SocialBar key={1} />
        <IntroductionSection key={2} />
        <ProjectsSection />
        <EmailContainer key={3} />
      </AnimatePresence>
    </div>
  );
};

export default Home;
