import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Group, Stack, Text } from "@mantine/core";

dayjs.extend(relativeTime);

const weddingDate = dayjs("2024-12-07");

const Timer = () => {
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
    <Group
      gap={0}
      w="100%"
      style={{
        justifyContent: "space-between",
        marginTop: -6,
      }}
    >
      <Stack align="center" gap={0} flex={1}>
        <Text
          style={{
            fontSize: "2em",
          }}
        >
          {remainingDays}
        </Text>
        <Text c="dimmed" size="sm">
          Días
        </Text>
      </Stack>
      <Text
        style={{
          fontSize: "2em",
          alignSelf: "baseline",
        }}
      >
        :
      </Text>
      <Stack align="center" gap={0} flex={1}>
        <Text
          style={{
            fontSize: "2em",
          }}
        >
          {remainingHours}
        </Text>
        <Text c="dimmed" size="sm">
          Hs
        </Text>
      </Stack>
      <Text
        style={{
          fontSize: "2em",
          alignSelf: "baseline",
        }}
      >
        :
      </Text>
      <Stack align="center" gap={0} flex={1}>
        <Text
          style={{
            fontSize: "2em",
          }}
        >
          {remainingMinutes}
        </Text>
        <Text c="dimmed" size="sm">
          Min
        </Text>
      </Stack>
      <Text
        style={{
          fontSize: "2em",
          alignSelf: "baseline",
        }}
      >
        :
      </Text>
      <Stack align="center" gap={0} flex={1}>
        <Text
          style={{
            fontSize: "2em",
          }}
        >
          {remainingSeconds}
        </Text>
        <Text c="dimmed" size="sm">
          Seg
        </Text>
      </Stack>
    </Group>
  );
};

export default Timer;
