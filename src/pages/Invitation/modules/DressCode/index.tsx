import { Image, Stack, Text, Title } from "@mantine/core";

import DressCodeImage from "../../../../assets/dresscode.svg";

const DressCode = () => {
  return (
    <Stack align="center" gap={0}>
      <Image
        src={DressCodeImage}
        alt="Quinta La Paz"
        style={{
          width: "20%",
          marginBottom: 24,
        }}
      />
      <Title
        style={{
          fontSize: "2.5em",
        }}
        mb={6}
      >
        Dress Code
      </Title>
      <Text size="lg">Elegante</Text>
      <Text size="sm" fs="italic">
        Tip: no uses tacos aguja
      </Text>
    </Stack>
  );
};

export default DressCode;
