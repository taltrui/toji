import { Card, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

import styles from "./styles.module.scss";

const Stay = () => {
  return (
    <Stack
      align="center"
      style={{
        paddingRight: 18,
        paddingLeft: 18,
        paddingBottom: 28,
        borderRadius: 4,
        paddingTop: 72,
        background:
          "linear-gradient(0deg, rgba(7,91,0,0.7) 0%, rgba(15,193,0,0.35) 50%, rgba(15,193,0,0) 100%)",
      }}
    >
      <Title order={1}>Hospedaje</Title>
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Te dejamos algunas opciones por si queres pasar la noche cerca
      </Text>

      <UnstyledButton
        component="a"
        href="https://www.hotelgreen.com.ar/"
        target="_blank"
        w={"100%"}
      >
        <Card shadow="xs" padding="lg" radius="md" className={styles.card}>
          <Stack gap={0}>
            <Text size="xl">
              <b>Green</b>
            </Text>
            <Text c="dimmed" size="sm">
              Familiar
            </Text>
          </Stack>
          <IconChevronRight />
        </Card>
      </UnstyledButton>
      <UnstyledButton
        component="a"
        href="https://www.hiltonpilar.ar/"
        target="_blank"
        w={"100%"}
      >
        <Card shadow="xs" padding="lg" radius="md" className={styles.card}>
          <Stack gap={0}>
            <Text size="xl">
              <b>Hilton Pilar</b>
            </Text>
            <Text c="dimmed" size="sm">
              Familiar
            </Text>
          </Stack>
          <IconChevronRight />
        </Card>
      </UnstyledButton>
      <UnstyledButton
        component="a"
        href="https://lapostadelpilar.com/portal/es-es/2152/Home"
        target="_blank"
        w={"100%"}
      >
        <Card shadow="xs" padding="lg" radius="md" className={styles.card}>
          <Stack gap={0}>
            <Text size="xl">
              <b>La Posta del Pilar</b>
            </Text>
            <Text c="dimmed" size="sm">
              Solo adultos
            </Text>
          </Stack>
          <IconChevronRight />
        </Card>
      </UnstyledButton>
      <UnstyledButton
        component="a"
        href="https://www.hotelcamberland.com/"
        target="_blank"
        w={"100%"}
      >
        <Card shadow="xs" padding="lg" radius="md" className={styles.card}>
          <Stack gap={0}>
            <Text size="xl">
              <b>Camberland</b>
            </Text>
            <Text c="dimmed" size="sm">
              Solo adultos
            </Text>
          </Stack>
          <IconChevronRight />
        </Card>
      </UnstyledButton>
    </Stack>
  );
};

export default Stay;
