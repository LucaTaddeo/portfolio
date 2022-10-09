import React from 'react';
import {Text} from "@nextui-org/react";
import {MAX_WIDTH} from "../constants";
import {motion} from "framer-motion";

const cardVariants = {
    offscreen: {
        y: -20, opacity: 0,
    }, onscreen: {
        y: 0, opacity: 1, rotate: 0, transition: {
            type: "spring", bounce: 0.4, duration: 1,
        },
    },
};
const SectionContainer = ({title, children}) => {
    return <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.8}}
    >
        <div
            style={{
                margin: "10rem auto 0 auto",
                padding: "0.5rem 1.5rem 5rem 1.5rem",
                maxWidth: MAX_WIDTH,
                display: "flex",
                flexDirection: "column",
                minHeights: "20vh",
            }}>
            <motion.div className="card" variants={cardVariants}>

                <Text h4 color="secondary" size="x-large">
                    {title}
                </Text>
                {children}
            </motion.div>
        </div>
    </motion.div>;
}

export default SectionContainer;