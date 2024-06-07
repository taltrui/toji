import { Button, Image, Stack, Text, Title } from "@mantine/core";

const Place = () => {
  return (
    <Stack align="center">
      <Image
        src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b"
        alt="Quinta La Paz"
      />
      <Title order={2}>Ceremonia</Title>
      <Text>
        Te esperamos en <b>Gorostiaga 760, Fatima, Buenos Aires</b> para
        festejar juntos nuestra ceremonia ¡Por favor, se puntual!
      </Text>
      <a href="https://maps.app.goo.gl/QHn4DHRVouxJkZgZA" target="_blank">
        <Button variant="light">Como llegar</Button>
      </a>
    </Stack>
  );
};

export default Place;
