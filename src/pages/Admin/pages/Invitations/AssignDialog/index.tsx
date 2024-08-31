import { Button, Group, Modal, Stack, TextInput } from "@mantine/core";
import { Invitation } from "../../../../../services/queries/useInvitation/useInvitation.interface";
import useUpdateInvitation from "../../../../../services/mutations/useUpdateInvitation";
import { Field, FieldProps, Form, Formik } from "formik";
import { object, string } from "yup";
import { useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";

const AssignDialog = ({ opened, invitation, onClose }: { opened: boolean, invitation?: Invitation, onClose: () => void }) => {

    const { mutate, isPending } = useUpdateInvitation();

    const queryClient = useQueryClient()

    const onSubmit = (values: { assignedTo: string }) => {
        mutate({ id: invitation?.id || '', toUpdate: { assigned_to: values.assignedTo } }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['invitations'] })
                onClose();
                notifications.show({ title: '¡Listo!', message: '¡Invitación asignada!' });
            },
            onError: () => {
                notifications.show({ title: '¡Ups!', message: 'La invitación no pudo ser asignada' });
            }
        });
    }

    return <Modal opened={opened} onClose={onClose} title="Asignar" centered>
        <Formik
            initialValues={{ assignedTo: invitation?.assigned_to || '' }}
            onSubmit={onSubmit}
            validationSchema={
                object({
                    assignedTo: string().required('Este campo es requerido')
                })
            }
        >
            <Form>
                <Stack >
                    <Field name="assignedTo">
                        {({ field, meta }: FieldProps) => (
                            <TextInput
                                {...field}
                                {...meta}
                                label="Asignado a"
                                placeholder="Nombre"
                                size="md"
                                mt={16}
                            />
                        )}
                    </Field>
                    <Group justify="space-between">
                        <Button onClick={onClose} size="md" disabled={isPending}>
                            Cancelar
                        </Button>
                        <Button type="submit" size="md" loading={isPending} disabled={isPending}>
                            Confirmar
                        </Button>
                    </Group>
                </Stack>
            </Form>
        </Formik>
    </Modal >

}

export default AssignDialog;