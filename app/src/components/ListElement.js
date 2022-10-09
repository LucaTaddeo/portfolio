import { Text } from "@nextui-org/react";

const ListElement = ({ children }) => {
  return (
    <span>
      <Text
        color="secondary"
        size="small"
        style={{ display: "inline-block", marginRight: "0.5rem" }}
      >
        ▶
      </Text>
      <Text style={{ display: "inline-block" }}>{children}</Text>
    </span>
  );
};

export default ListElement;