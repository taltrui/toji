import { Image, Center, Title, Text, Button, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IconCalendarPlus } from "@tabler/icons-react";

import MainImage from "../../../..//assets/main.png";
import styles from "./styles.module.scss";

dayjs.extend(relativeTime);

const weddingDate = dayjs("2024-12-07");
const text = encodeURIComponent("Casamiento Tomi y Jime 🤵🏻🩶👰🏻‍♀️");
const dates = "20241207T213000Z/20241208T063000Z";
const details = encodeURIComponent("Por favor se puntual!");
const location = encodeURIComponent(
  "Quinta La Paz, Gorostiaga, Fatima, Provincia de Buenos Aires"
);
const trp = true;

const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}&trp=${trp}`;

const Header = () => {
  const [now, setTimer] = useState<dayjs.Dayjs>(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeRemaining = weddingDate.diff(now);

  const remainingDays = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
  const remainingHours = Math.floor(
    (timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const remainingMinutes = Math.floor(
    (timeRemaining % (60 * 60 * 1000)) / (60 * 1000)
  );

  const remainingSeconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);


  return (
    <Stack align="center">
      <Title order={1} className={styles.title}>
        Jime y Tomi
      </Title>
      <Center
        style={{
          position: "relative",
        }}
      >
        <Image src={MainImage}></Image>
        <Center
          style={{
            position: "absolute",
            flexDirection: "column",
            bottom: 24,
          }}
        >
          <Title order={3}>¡Nos casamos!</Title>
          <Text>y queremos compartirlo con vos</Text>
        </Center>
      </Center>
      <Text
        style={{
          marginTop: 24,
        }}
      >
        Agenda la fecha
      </Text>
      <Title order={1} className={styles.weddingDate}>
        7 de Diciembre
      </Title>
      <Text c="dimmed">
        {remainingDays}d : {remainingHours}h : {remainingMinutes}m :{" "}
        {remainingSeconds}s
      </Text>
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
  );
};

export default Header;
