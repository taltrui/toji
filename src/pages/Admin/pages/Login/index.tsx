import { Button, Center, Paper, Stack, TextInput, useMantineTheme } from "@mantine/core";
import { Field, FieldProps, Form, Formik } from "formik";
import useLogin from "../../../../services/mutations/useLogin";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = object({
    email: string().email().required(),
    password: string().required()
});

const Login = () => {

    const theme = useMantineTheme();

    const navigate = useNavigate();

    const { mutate, isPending } = useLogin();

    const onSubmit = (values: { email: string, password: string }) => {
        mutate(values, {
            onSuccess: () => navigate('/admin')
        });
    }

    return (
        <Center style={{ height: '100vh', backgroundColor: theme.colors.green[1] }}>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {() =>
                    <Form>
                        <Paper shadow="lg" style={{ padding: 32, borderRadius: 12 }}>
                            <Stack gap={32}>
                                <Field name="email">
                                    {({ field, meta }: FieldProps) => (
                                        <TextInput
                                            {...field}
                                            {...meta}
                                            label="Email"
                                            placeholder="Email"
                                            size="md"
                                        />
                                    )}
                                </Field>
                                <Field name="password">
                                    {({ field, meta }: FieldProps) => (
                                        <TextInput
                                            {...field}
                                            {...meta}
                                            type="password"
                                            label="Password"
                                            placeholder="Password"
                                            size="md"
                                        />
                                    )}
                                </Field>
                                <Button type="submit" size="md" loading={isPending} disabled={isPending}>
                                    Iniciar sesión
                                </Button>
                            </Stack>
                        </Paper>
                    </Form>
                }
            </Formik>
        </Center>
    );
}

export default Login