import { Image, Stack, Text, Title } from "@mantine/core";

import DressCodeImage from "../../../../assets/dresscode.svg";

const DressCode = () => {
  return (
    <Stack align="center" gap={0}>
      <Image
        src={DressCodeImage}
        alt="Quinta La Paz"
        style={{
          width: "25%",
          marginBottom: 24,
        }}
      />
      <Title order={1} mb={6}>
        Dress Code
      </Title>
      <Text size="lg">Elegante</Text>
      <Text size="sm">Tip: no uses tacos finos</Text>
    </Stack>
  );
};

export default DressCode;
