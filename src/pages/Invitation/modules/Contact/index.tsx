import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <Stack
      align="center"
      style={{
        backgroundColor: "rgba(7,91,0,0.16)",
        padding: 32,
        marginTop: 24,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          width: "80%",
        }}
      >
        Por cualquier duda, no dudes en contactarte con nosotros
      </Text>

      <Group gap={48}>
        <Stack gap={4} align="center">
          <ActionIcon
            component="a"
            href="https://wa.me/5491136712562"
            className={styles.actionIcon}
            target="_blank"
          >
            <IconBrandWhatsapp color="#007039" />
          </ActionIcon>
          <Text>Jimena</Text>
        </Stack>
        <Stack gap={4} align="center">
          <ActionIcon
            component="a"
            href="https://wa.me/5491159885395"
            target="_blank"
            className={styles.actionIcon}
          >
            <IconBrandWhatsapp color="#007039" />
          </ActionIcon>
          <Text>Tomás</Text>
        </Stack>
      </Group>
    </Stack>
  );
};

export default Contact;
