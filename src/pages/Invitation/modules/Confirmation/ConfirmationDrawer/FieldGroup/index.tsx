import { Checkbox, Fieldset, Group, TextInput, Textarea } from "@mantine/core";
import { Field, FieldProps } from "formik";
import { DietaryRestriction } from "../../../../../../services/queries/useInvitees/useInvitees.interface";

const FieldGroup = ({ index, type }: { index: number; type: string }) => (
  <Fieldset
    key={`${type}-${index}`}
    mb={24}
    legend={`${type === "minors" ? "Menor" : "Adulto"} ${index + 1}`}
  >
    <Field name={`${type}.${index}.name`}>
      {({ field, meta }: FieldProps) => (
        <TextInput
          {...field}
          {...meta}
          label="Nombre"
          placeholder="Nombre"
          size="md"
        />
      )}
    </Field>
    <Field name={`${type}.${index}.surname`}>
      {({ field, meta }: FieldProps) => (
        <TextInput
          {...field}
          {...meta}
          size="md"
          label="Apellido"
          placeholder="Apellido"
          mt={16}
        />
      )}
    </Field>
    <Field name={`${type}.${index}.dietary_restriction`}>
      {({ field, meta, form }: FieldProps) => (
        <Checkbox.Group
          {...field}
          onChange={(value) => form.setFieldValue(field.name, value)}
          {...meta}
          size="md"
          label="Restricciones alimenticias"
          mt={16}
        >
          <Group mt={4}>
            <Checkbox
              value={DietaryRestriction.CELIAC}
              size="md"
              label="Celíaco/a"
            />
            <Checkbox
              size="md"
              value={DietaryRestriction.VEGETARIAN}
              label="Vegetariano/a"
            />
            <Checkbox size="md" value={DietaryRestriction.OTHER} label="Otro" />
          </Group>
        </Checkbox.Group>
      )}
    </Field>
    <Field name={`${type}.${index}.dietary_restrictions_detail`}>
      {({ field, meta, form }: FieldProps) =>
        form.values[type][index]["dietary_restriction"].length > 0 && (
          <Textarea
            size="md"
            {...field}
            {...meta}
            label="Detalles"
            placeholder="Detalles"
            mt={16}
          />
        )
      }
    </Field>
  </Fieldset>
);

export default FieldGroup;
