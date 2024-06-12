import { Button, Image, Stack, Text, Title } from "@mantine/core";

import Rings from "../../../../assets/rings.svg";
import { IconMap2 } from "@tabler/icons-react";

const Place = () => {
  return (
    <Stack align="center" mb={24}>
      <Image
        src={Rings}
        alt="Quinta La Paz"
        style={{
          width: "25%",
        }}
      />
      <Title order={1}>Ceremonia</Title>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Te esperamos en <br />
        <b>Gorostiaga 760, Fatima, Buenos Aires</b>
        <br /> para festejar juntos nuestra ceremonia <br /> ¡Por favor, se
        puntual!
      </Text>
      <a href="https://maps.app.goo.gl/QHn4DHRVouxJkZgZA" target="_blank">
        <Button leftSection={<IconMap2 />} variant="light" size="lg">
          Como llegar
        </Button>
      </a>
    </Stack>
  );
};

export default Place;
