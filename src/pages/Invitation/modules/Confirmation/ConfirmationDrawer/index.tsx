import { Button, Drawer, Group, Stack, Text } from "@mantine/core";
import { notifications } from '@mantine/notifications';
import useCreateInvitees from "../../../../../services/mutations/useCreateInvitees";
import { Invitation } from "../../../../../services/queries/useInvitation/useInvitation.interface";
import useInvitees from "../../../../../services/queries/useInvitees";
import { Invitee } from "../../../../../services/queries/useInvitees/useInvitees.interface";
import FieldGroup from "./FieldGroup";
import { Form, Formik } from "formik";
import { validationSchema } from "./ConfirmationDrawer.formik";
import useUpdateInvitees from "../../../../../services/mutations/useUpdateInvitees";
import { getInitialValues } from "./utils";
import styles from "./styles.module.scss";

const ConfirmationDrawer = ({
  opened,
  onClose,
  invitation,
}: {
  opened: boolean;
  onClose: () => void;
  invitation?: Invitation;
}) => {
  const { mutate: createInvitees, isPending: pendingCreate } = useCreateInvitees();
  const { mutate: updateInvitees, isPending: pendingUpdate } = useUpdateInvitees();

  const { data: invitees, refetch } = useInvitees(invitation?.id || "", {
    enabled: !!invitation?.id,
  });

  const onSubmit = (values: { adults: Invitee[]; minors: Invitee[] }) => {
    const invitees = [...values.adults, ...values.minors];
    const updates = invitees.filter((invitee) => !!invitee.id);
    const creates = invitees.filter((invitee) => !invitee.id);

    if (updates.length > 0) updateInvitees(updates, {
      onSuccess: () => {
        refetch();
        onClose();
        notifications.show({ title: '¡Listo!', message: '¡Los datos fueron actualizados!' });
      }
    });
    if (creates.length > 0) createInvitees(creates, {
      onSuccess: () => {
        refetch();
        onClose();
        notifications.show({ title: '¡Listo!', message: '¡Gracias por confirmar asistencia!' });
      }
    });
  };

  const loading = pendingCreate || pendingUpdate;

  return (
    <Drawer.Root
      opened={opened}
      onClose={onClose}
      position="bottom"
      size="100%"
    >
      <Drawer.Overlay backgroundOpacity={0.5} blur={4} />
      <Drawer.Content className={styles.drawerContent}>
        <Drawer.Header>
          <Drawer.Title><Text size="xl">¡Confirmá asistencia!</Text></Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body className={styles.drawerBody}>
          <Formik
            initialValues={getInitialValues(invitees, invitation)}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className={styles.formContainer}>
              <Stack className={styles.form}>
                {Array.from({ length: invitation?.adults || 0 }).map((_, index) => (
                  <FieldGroup index={index} type="adults" key={`adult-${index}`} />
                ))}
                {Array.from({ length: invitation?.minors || 0 }).map((_, index) => (
                  <FieldGroup index={index} type="minors" key={`minor-${index}`} />
                ))}

                <Stack gap={8} mt="auto">
                  <Text size="sm" fs="italic" c="dimmed">
                    Vas a poder actualizar la información de los invitados hasta el 20
                    de Octubre.
                  </Text>
                  <Group justify="space-between">
                    <Button onClick={onClose} size="md" disabled={loading}>
                      Cancelar
                    </Button>
                    <Button type="submit" size="md" loading={loading} disabled={loading}>
                      Confirmar
                    </Button>
                  </Group>
                </Stack>
              </Stack>
            </Form>
          </Formik>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root >
  );
};

export default ConfirmationDrawer;
