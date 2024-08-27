import { Image, Title, Text, Button, Stack, Box } from "@mantine/core";
import { IconCalendarPlus } from "@tabler/icons-react";

import MainImage from "../../../../assets/header-image.jpg";
import styles from "./styles.module.scss";
import Timer from "./Timer";

const text = encodeURIComponent("Casamiento Tomi y Jime 🤵🏻🩶👰🏻‍♀️");
const dates = "20241207T213000Z/20241208T063000Z";
const details = encodeURIComponent("Por favor se puntual!");
const location = encodeURIComponent(
  "Quinta La Paz, Gorostiaga, Fatima, Provincia de Buenos Aires"
);
const trp = true;

const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}&trp=${trp}`;

const Header = () => {
  return (
    <Stack align="center" mb={150}>
      <Box
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <Image src={MainImage} className={styles.mainImage} />
        <Box
          style={{
            position: "absolute",
            bottom: -2,
            left: 0,
            width: "100%",
            height: "52%",
            background:
              "linear-gradient(180deg, rgba(221,223,217,0) 0%, rgba(102,110,82,0.631897742006959) 60%, rgba(255,255,255,1) 100%)",
          }}
        />
        <Stack
          gap={0}
          style={{
            position: "absolute",
            top: 28,
            left: "50%",
            transform: "translate(-50%, 0)",
            alignItems: "center",
          }}
        >
          <Title
            variant="h1"
            style={{
              fontSize: "4em",
              textWrap: "nowrap",
              color: "white",
            }}
          >
            Jime & Tomi
          </Title>
          <Text
            style={{
              color: "white",
              fontSize: "1.5em",
            }}
          >
            ¡Nos casamos!
          </Text>
        </Stack>
        <Stack
          gap={0}
          style={{
            position: "absolute",
            left: "50%",
            bottom: -120,
            transform: "translate(-50%, 0)",
            alignItems: "center",
          }}
        >
          <Text
            size="sm"
            style={{
              marginBottom: 8,
            }}
          >
            Agendá la fecha
          </Text>
          <Title
            style={{
              fontSize: "3em",
            }}
          >
            7 de Diciembre
          </Title>
          <Timer />
          <a href={googleCalendarUrl} target="_blank">
            <Button
              leftSection={<IconCalendarPlus />}
              style={{ marginTop: 24 }}
              size="lg"
            >
              Agregar al calendario
            </Button>
          </a>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Header;
