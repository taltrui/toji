import { Button, Stack, Text, Title } from "@mantine/core";
import useInvitation from "../../../../services/queries/useInvitation";
import { useState } from "react";
import ConfirmationDrawer from "./ConfirmationDrawer";
import { IconAddressBook } from "@tabler/icons-react";

const Confirmation = ({ invitationId }: { invitationId: string }) => {
  const [opened, setOpened] = useState(false);
  const { data, isLoading } = useInvitation(invitationId);

  const openDrawer = () => {
    setOpened(true);
  };

  const closeDrawer = () => {
    setOpened(false);
  };

  const { adults, minors } = data || {
    adults: 0,
    minors: 0,
  };

  const createInviteesText = () => {
    let text = "";
    if (adults === 1) {
      text += `1 adulto`;
    }
    if (adults > 1) {
      text += `${adults} adultos`;
    }
    if (minors === 1 && adults > 0) {
      text += ` y 1 menor`;
    }
    if (minors > 1 && adults > 0) {
      text += ` y ${minors} menores`;
    }
    if (minors === 1 && adults === 0) {
      text += `1 menor`;
    }
    if (minors > 1 && adults === 0) {
      text += `${minors} menores`;
    }

    return text;
  };

  return (
    <>
      <Stack align="center" mt={24}>
        <Title>¡Te esperamos!</Title>
        {!isLoading && (
          <Text
            style={{
              textAlign: "center",
            }}
          >
            {`Esta invitación vale para ${createInviteesText()}.`}
            <br /> Por favor, confirmá asistencia
          </Text>
        )}
        <Button
          leftSection={<IconAddressBook />}
          size="md"
          onClick={openDrawer}
        >
          Confirmar asistencia
        </Button>
      </Stack>
      <ConfirmationDrawer
        opened={opened}
        onClose={closeDrawer}
        invitation={data}
      />
    </>
  );
};

export default Confirmation;
