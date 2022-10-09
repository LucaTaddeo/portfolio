import { Text } from "@nextui-org/react";
import React from "react";
import USER from "../data/thisIsMe";
import { motion } from "framer-motion";

const Introduction = ({maxWidth}) => {
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
          maxWidth: maxWidth,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
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
            textGradient: "112deg, #FF4ECD -20.3%, #660099 70.46%",
          }}
        >
          {USER.firstName + " " + USER.lastName}.
        </Text>
        <Text h2>{USER.subtitle}</Text>
        <Text style={{ fontSize: 17 }}>
          I'm a {USER.whatAmI}, based in {USER.city}, {USER.state}, specialized
          in building
        </Text>
        <Text style={{ fontSize: 17 }}>
          incredible web applications, with a keen eye on astonishing UIs
        </Text>
      </div>
    </motion.section>
  );
};

export default Introduction;


