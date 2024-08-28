import { array, boolean, object, string } from "yup";

const inviteeSchema = array().of(
  object({
    wont_assist: boolean(),
    name: string().when(
      "wont_assist", {
      is: true,
      then: () => string().nullable(),
      otherwise: () => string().required("Completá tu nombre"),
    }
    ),
    surname: string().when(
      "wont_assist", {
      is: true,
      then: () => string().nullable(),
      otherwise: () => string().required("Completá tu apellido"),
    }
    ),
    minor: boolean(),
    dietary_restriction: array(),
    dietary_restriction_detail: string().nullable(),
  })
);

export const validationSchema = object().shape({
  adults: inviteeSchema,
  minors: inviteeSchema,
});
