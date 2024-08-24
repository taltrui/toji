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
          width: "20%",
        }}
      />
      <Title
        style={{
          fontSize: "2.5em",
        }}
      >
        Ceremonia
      </Title>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Te esperamos en <br />
        <b>Gorostiaga 760, Fatima</b>, a las <b>18:30hs</b>
        <br /> para festejar nuestra ceremonia <br />
        <b>¡Por favor, se puntual!</b>
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
