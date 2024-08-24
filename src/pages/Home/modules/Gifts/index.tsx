import { Button, Stack, Text, Title } from "@mantine/core";
import BankAccountInfoDrawer from "./BankAccountInfoDrawer";
import { useState } from "react";

const Gifts = () => {
  const [opened, setOpened] = useState(false);
  const onClose = () => setOpened(false);
  const onOpen = () => setOpened(true);

  return (
    <Stack
      align="center"
      style={{
        marginTop: 24,
      }}
    >
      <Title
        style={{
          fontSize: "2.5em",
        }}
      >
        Regalos
      </Title>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 12,
          padding: "0 24px",
        }}
      >
        ¡Tu presencia es nuestro mejor regalo! Sin embargo, si deseas dejarnos
        un detalle, te compartimos nuestros datos.
      </Text>
      <Button size="md" onClick={onOpen}>
        Ver datos
      </Button>
      <BankAccountInfoDrawer opened={opened} onClose={onClose} />
    </Stack>
  );
};

export default Gifts;
