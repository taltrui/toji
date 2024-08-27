import { Box, Modal, Stack, Text } from "@mantine/core";
import TextWithCopy from "../../../../../components/TextWithCopy";

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
      <Stack gap={3}>
        <Text fw={600}>Jimena Belen Figueroa</Text>
        <Text fw={600}>CUIT: 20-38278485-6</Text>
        <Text fw={600}>Banco Hipotecario</Text>
        <Text style={{ marginTop: 12 }} fw={600}>Cuenta en pesos</Text>
        <Box style={{ marginLeft: 12, display: 'flex' }}>CBU: <TextWithCopy style={{ marginLeft: 6 }}>0440073840000325001616</TextWithCopy></Box>
        <Box style={{ marginLeft: 12, display: 'flex' }}>Alias: <TextWithCopy style={{ marginLeft: 6 }}>JIME.BEL.CAPES</TextWithCopy></Box>
        <Text style={{ marginLeft: 12 }}>Número de cuenta: 407300032500161</Text>
        <Text style={{ marginTop: 12 }} fw={600}>Cuenta en dólares</Text>
        <Box style={{ marginLeft: 12, display: 'flex' }}>CBU: <TextWithCopy style={{ marginLeft: 6 }}>0440073820000341358022</TextWithCopy></Box>
        <Box style={{ marginLeft: 12, display: 'flex' }}>Alias: <TextWithCopy style={{ marginLeft: 6 }}>JIME.BEL.CADOL</TextWithCopy></Box>
        <Text style={{ marginLeft: 12 }}>Número de cuenta: 207300034135802</Text>
      </Stack>
    </Modal>
  );
};

export default BankAccountInfoDrawer;
