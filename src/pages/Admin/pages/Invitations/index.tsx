import { ActionIcon, Box, Checkbox, CopyButton, Table } from "@mantine/core";
import useInvitations from "../../../../services/queries/useInvitations";
import { IconCheck, IconCopy } from "@tabler/icons-react";

const Invitations = () => {
    const { data } = useInvitations();

    console.log(data)
    const rows = data?.map((invitation) => (
        <Table.Tr key={invitation.id}>
            <Table.Td>{new Date(invitation.created_at).toLocaleDateString()}</Table.Td>
            <Table.Td>{new Date(invitation.last_update).toLocaleDateString()}</Table.Td>
            <Table.Td>{invitation.adults + invitation.minors}</Table.Td>
            <Table.Td>{invitation.adults}</Table.Td>
            <Table.Td>{invitation.minors}</Table.Td>
            <Table.Td>
                <Box style={{ display: 'flex' }}>
                    {`https://toji.ar/?inv=${invitation.id}`}
                    <CopyButton value={`https://toji.ar/?inv=${invitation.id}`}>
                        {({ copied, copy }) => (
                            <ActionIcon onClick={copy} variant="transparent" size="sm" ml={8} >
                                {copied ? <IconCheck /> : <IconCopy />}
                            </ActionIcon>
                        )}
                    </CopyButton>
                </Box>
            </Table.Td>
            <Table.Td><Checkbox checked={invitation.closed} /></Table.Td>
        </Table.Tr>
    ));

    return (
        <Table stickyHeader stickyHeaderOffset={60}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Creada</Table.Th>
                    <Table.Th>Actualizada</Table.Th>
                    <Table.Th>Invitados</Table.Th>
                    <Table.Th>Adultos</Table.Th>
                    <Table.Th>Menores</Table.Th>
                    <Table.Th>Link</Table.Th>
                    <Table.Th>Cerrada</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    )
}

export default Invitations