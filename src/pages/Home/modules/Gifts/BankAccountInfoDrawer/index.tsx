import { Modal, Stack, Text } from "@mantine/core";
import styles from "./styles.module.scss";

const BankAccountInfoDrawer = ({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      centered
      title={<Text size="xl">Datos bancarios</Text>}
    >
      <Stack gap={1}>
        <Text fw={600}>Jimena Belen Figueroa</Text>
        <Text fw={600}>CUIT: 20-12345678-9</Text>
        <Text fw={600}>Banco Hipotecario</Text>
        <Text style={{marginTop: 12}} fw={600}>Cuenta en pesos</Text>
        <Text style={{marginLeft: 12}}>CBU: 0440000432000000000041</Text>
        <Text style={{marginLeft: 12}}>Alias: JIMETOMI</Text>
        <Text style={{marginTop: 12}} fw={600}>Cuenta en dólares</Text>
        <Text style={{marginLeft: 12}}>CBU: 0440000432000000000041</Text>
        <Text style={{marginLeft: 12}}>Alias: JIMETOMI</Text>
      </Stack>
    </Modal>
  );
};

export default BankAccountInfoDrawer;
