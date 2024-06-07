import { array, boolean, object, string } from "yup";

const inviteeSchema = array().of(
  object().shape({
    name: string().required("Nombre es requerido"),
    surname: string().required("Apellido es requerido"),
    minor: boolean(),
    dietary_restriction: array(),
    dietary_restriction_detail: string().nullable(),
  })
);

export const validationSchema = object().shape({
  adults: inviteeSchema,
  minors: inviteeSchema,
});
