import { Button, Stack, Text, Title } from "@mantine/core";

const Gifts = () => {
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
        }}
      >
        ¡Tu presencia es nuestro mejor regalo! <br /> de igual forma, te pasamos
        nuestros datos por si queres dejarnos un detalle
      </Text>
      <Button size="md">Ver datos</Button>
    </Stack>
  );
};

export default Gifts;
