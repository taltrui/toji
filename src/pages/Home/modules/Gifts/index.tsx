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
      <Title>Regalos</Title>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 12,
          maxWidth: 400,
        }}
      >
        ¡Tu presencia es nuestro mejor regalo! <br /> de igual forma, te pasamos
        nuestros datos por si queres dejarnos un detalle
      </Text>
      <Button size="md" onClick={onOpen}>
        Ver datos
      </Button>
      <BankAccountInfoDrawer opened={opened} onClose={onClose} />
    </Stack>
  );
};

export default Gifts;
