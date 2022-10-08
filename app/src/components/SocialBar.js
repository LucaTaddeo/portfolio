import { Button } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
//import useMobileDetect from "use-mobile-detect-hook";
import CONTACTS from "../data/contacts";

const SocialBar = () => {
  return (
    <motion.div style={{ position: "fixed", bottom: 0 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "3rem 2rem",
          gap: 15,
        }}
      >
        {CONTACTS.map((contact) => {
          return (
            <Button
              onPress={contact.action}
              light
              color="secondary"
              key={contact.name}
              auto
              icon={contact.icon}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default SocialBar;