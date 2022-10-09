import { Card, Text, Grid } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
//import useMobileDetect from "use-mobile-detect-hook";
import ProfilePic from "../data/profile.jpeg";
import ListElement from "../components/ListElement";

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

const AboutMe = ({maxWidth}) => {
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
          maxWidth: maxWidth,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "20vh",
        }}
      >
        <motion.div className="card" variants={cardVariants}>
          <Text h4 color="secondary" size="x-large">
            About me
          </Text>
          <Grid.Container justify="center">
            <Grid
              xs={8}
              justify="left"
              direction="column"
              style={{ paddingRight: "1rem" }}
            >
              <Text style={{ marginBottom: "1rem" }}>
                Hello there! I'm Luca, a Web Developer based in Bolzano, Italy.
                I have a very weird background, jumping from classic literature,
                to nerdy computer science. I enjoy crafting beautiful UIs while
                keeping clean and performant code!
              </Text>
              <Text style={{ marginBottom: "0.25rem" }}>
                Recently, I have been using and studying these technologies:
              </Text>
              <Grid.Container justify="left">
                <Grid xs={3} justify="left" direction="column">
                  <ListElement>React</ListElement>
                  <ListElement>Java</ListElement>
                </Grid>
                <Grid xs={4} justify="left" direction="column">
                  <ListElement>Node & Express.js</ListElement>
                  <ListElement>AWS & Terraform</ListElement>
                </Grid>
                <Grid xs={3} justify="left" direction="column">
                  <ListElement>MongoDB</ListElement>
                </Grid>
              </Grid.Container>
            </Grid>
            <Grid xs={4} justify="right">
              <Card isHoverable>
                <Card.Image
                  src={ProfilePic}
                  objectFit="cover"
                  width="100%"
                  alt="Luca Taddeo"
                />
              </Card>
            </Grid>
          </Grid.Container>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;