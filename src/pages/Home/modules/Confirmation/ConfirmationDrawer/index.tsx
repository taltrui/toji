import { Button, Drawer, Group, Text, Title } from "@mantine/core";
import useCreateInvitees from "../../../../../services/mutations/useCreateInvitees";
import { Invitation } from "../../../../../services/queries/useInvitation/useInvitation.interface";
import useInvitees from "../../../../../services/queries/useInvitees";
import { Invitee } from "../../../../../services/queries/useInvitees/useInvitees.interface";
import FieldGroup from "./FieldGroup";
import { Form, Formik } from "formik";
import { validationSchema } from "./ConfirmationDrawer.formik";
import useUpdateInvitees from "../../../../../services/mutations/useUpdateInvitees";
import { getInitialValues } from "./utils";

const ConfirmationDrawer = ({
  opened,
  onClose,
  invitation,
}: {
  opened: boolean;
  onClose: () => void;
  invitation?: Invitation;
}) => {
  const { mutate: createInvitees } = useCreateInvitees();
  const { mutate: updateInvitees } = useUpdateInvitees();

  const { data: invitees } = useInvitees(invitation?.id || "", {
    enabled: !!invitation?.id,
  });

  const onSubmit = (values: { adults: Invitee[]; minors: Invitee[] }) => {
    const invitees = [...values.adults, ...values.minors];
    const updates = invitees.filter((invitee) => !!invitee.id);
    const creates = invitees.filter((invitee) => !invitee.id);

    if (updates.length > 0) updateInvitees(updates);
    if (creates.length > 0) createInvitees(creates);
  };

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      position="bottom"
      title={<Text size="xl">¡Confirmá asistencia!</Text>}
      size="100%"
    >
      <Formik
        initialValues={getInitialValues(invitees, invitation)}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          {Array.from({ length: invitation?.adults || 0 }).map((_, index) => (
            <FieldGroup index={index} type="adults" key={`adult-${index}`} />
          ))}
          {Array.from({ length: invitation?.minors || 0 }).map((_, index) => (
            <FieldGroup index={index} type="minors" key={`minor-${index}`} />
          ))}

          <Text size="sm" mb={16} fs="italic" c="dimmed">
            Vas a poder actualizar la información de los invitados hasta el 20
            de Octubre.
          </Text>
          <Group justify="space-between">
            <Button onClick={onClose} size="lg">
              Cancelar
            </Button>
            <Button type="submit" size="lg">
              Confirmar
            </Button>
          </Group>
        </Form>
      </Formik>
    </Drawer>
  );
};

export default ConfirmationDrawer;
