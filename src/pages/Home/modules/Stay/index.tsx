import { Card, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

import styles from "./styles.module.scss";

const Stay = () => {
  return (
    <Stack align="center">
      <Text>Hospedaje</Text>
      <Text>
        Te dejamos algunas opciones por si queres pasar la noche cerca
      </Text>

      <UnstyledButton
        component="a"
        href="https://www.hiltonpilar.ar/"
        target="_blank"
      >
        <Card shadow="sm" padding="lg" radius="md" className={styles.card}>
          <Stack>
            <Text>Hilton en Pilar</Text>
            <Text>
              Ingresa para tener más información. <b>Familar</b>
            </Text>
          </Stack>
          <IconChevronRight />
        </Card>
      </UnstyledButton>

      <UnstyledButton
        component="a"
        href="https://lapostadelpilar.com/portal/es-es/2152/Home"
        target="_blank"
      >
        <Card shadow="sm" padding="lg" radius="md" className={styles.card}>
          <Stack>
            <Text>La Posta del Pilar</Text>
            <Text>
              Ingresa para tener más información. <b>Solo adultos</b>
            </Text>
          </Stack>
          <IconChevronRight />
        </Card>
      </UnstyledButton>
    </Stack>
  );
};

export default Stay;
