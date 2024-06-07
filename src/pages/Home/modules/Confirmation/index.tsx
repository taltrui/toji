import { Button, Stack, Text } from "@mantine/core";
import useInvitation from "../../../../services/queries/useInvitation";
import { useState } from "react";
import ConfirmationDrawer from "./ConfirmationDrawer";

const Confirmation = ({ invitationId }: { invitationId: string }) => {
  const [opened, setOpened] = useState(false);
  const { data } = useInvitation(invitationId);

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
      <Stack align="center">
        <Text>¡Te esperamos!</Text>
        <Text>
          {`Esta invitación vale para ${createInviteesText()}. Por favor, confirma
        asistencia`}
        </Text>
        <Button onClick={openDrawer}>Confirmar asistencia</Button>
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
