import {Card, Text, Grid} from "@nextui-org/react";
import React from "react";
import ProfilePic from "../data/images/profile.jpeg";
import ListElement from "../components/ListElement";
import SectionContainer from "../components/SectionContainer";
//import useMobileDetect from "use-mobile-detect-hook";


const AboutMe = () => {
    return <SectionContainer title="About Me">
        <Grid.Container justify="center">
            <Grid
                xs={8}
                justify="left"
                direction="column"
                style={{paddingRight: "1rem"}}
            >
                <Text style={{marginBottom: "1rem"}}>
                    Hello there! I'm Luca, a Web Developer based in Bolzano, Italy.
                    I have a very weird background, jumping from classic literature,
                    to nerdy computer science. I enjoy crafting beautiful UIs while
                    keeping clean and performant code!
                </Text>
                <Text style={{marginBottom: "0.25rem"}}>
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
    </SectionContainer>;
};

export default AboutMe;