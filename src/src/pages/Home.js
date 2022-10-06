import { Card, Text } from "@nextui-org/react";
import React from "react";

const Home = (props) => {
  return (
    <>
      <div
        style={{
          border: "1px solid red",
          margin: "4rem auto 0 auto",
          padding: "0.5rem 1.5rem",
          maxWidth: "800px",
          height: "200vh",
        }}
      >
        <Card
          style={{
            background:
              "linear-gradient(112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%)",
            color: "white",
          }}
        >
          <Card.Header style={{ paddingBottom: 0 }}>
            <Text h4 color="white">Welcome, I'm</Text>
          </Card.Header>
          <Card.Body style={{ paddingTop: 0 }}>
            <Text h1 color="white">Luca Taddeo</Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;
