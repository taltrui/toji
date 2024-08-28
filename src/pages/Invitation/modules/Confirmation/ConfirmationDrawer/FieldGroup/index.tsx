import { Checkbox, Fieldset, Group, TextInput, Textarea } from "@mantine/core";
import { Field, FieldProps } from "formik";
import { DietaryRestriction } from "../../../../../../services/queries/useInvitees/useInvitees.interface";

const FieldGroup = ({ index, type }: { index: number; type: string }) => (
  <Fieldset
    key={`${type}-${index}`}
    mb={24}
    legend={`${type === "minors" ? "Menor" : "Adulto"} ${index + 1}`}
  >
    <Field name={`${type}.${index}.wont_assist`}>
      {({ field, meta }: FieldProps) => (
        <Checkbox
          {...field}
          {...meta}
          checked={field.value}
          size="md"
          label="No asistirá"
        />
      )}
    </Field>
    <Field name={`${type}.${index}.name`}>
      {({ field, meta, form }: FieldProps) => (
        <TextInput
          {...field}
          {...meta}
          disabled={form.values[type][index]["wont_assist"]}
          label="Nombre"
          placeholder="Nombre"
          size="md"
          mt={16}
        />
      )}
    </Field>
    <Field name={`${type}.${index}.surname`}>
      {({ field, meta, form }: FieldProps) => (
        <TextInput
          {...field}
          {...meta}
          disabled={form.values[type][index]["wont_assist"]}
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
              disabled={form.values[type][index]["wont_assist"]}
              size="md"
              label="Celíaco/a"
            />
            <Checkbox
              size="md"
              value={DietaryRestriction.VEGETARIAN}
              disabled={form.values[type][index]["wont_assist"]}
              label="Vegetariano/a"
            />
            <Checkbox size="md" value={DietaryRestriction.OTHER} label="Otro" disabled={form.values[type][index]["wont_assist"]}
            />
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
            disabled={form.values[type][index]["wont_assist"]}
            label="Detalles"
            placeholder="Comentarios adicionales"
            mt={16}
          />
        )
      }
    </Field>
  </Fieldset>
);

export default FieldGroup;
