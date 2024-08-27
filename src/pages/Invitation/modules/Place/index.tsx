import { Box, Button, Image, Stack, Text, Title } from "@mantine/core";

import Rings from "../../../../assets/rings.svg";
import Flower1 from "../../../../assets/flower1.svg";
import { IconMap2 } from "@tabler/icons-react";

const Place = () => {
  return (
    <Box style={{
      position: "relative",
    }}>
      <Image src={Flower1} style={{
        position: "absolute",
        top: -200,
        left: 0,
        width: "100%",
        zIndex: -1,
      }}/>
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
    </Box>
  );
};

export default Place;
