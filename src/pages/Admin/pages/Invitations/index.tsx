import { ActionIcon, Box, Checkbox, CopyButton, Dialog, Table, Text, Tooltip, useMantineTheme } from "@mantine/core";
import useInvitations from "../../../../services/queries/useInvitations";
import { IconCheck, IconCopy, IconUserPlus } from "@tabler/icons-react";
import { Invitation } from "../../../../services/queries/useInvitation/useInvitation.interface";
import { useState } from "react";
import AssignDialog from "./AssignDialog";

const getConfirmedInviteesText = (invitation: Invitation) => {

    let text = '';
    let adults = 0;
    let minors = 0;

    invitation.invitees?.forEach((invitee) => {
        invitee.minor ? minors++ : adults++;
    });

    if (adults === 0 && minors === 0) {
        return '-'
    }

    if (adults > 0) {
        text += `${adults} A`
    }

    if (minors > 0) {
        text += ` ${minors} M`
    }

    return text;


};

const Invitations = () => {
    const { data } = useInvitations();
    const theme = useMantineTheme()
    const [selectedInvitation, setSelectedInvitation] = useState<Invitation | undefined>();

    const onAssignDialogClose = () => setSelectedInvitation(undefined);
    const onAssignDialogOpen = (invitation: Invitation) => setSelectedInvitation(invitation);

    const sortedInvitations = data?.sort((a, b) => a.adults - b.adults || a.minors - b.minors);
    const rows = sortedInvitations?.map((invitation) => (
        <Table.Tr key={invitation.id} style={{
            backgroundColor: invitation.invitees?.length === invitation.adults + invitation.minors ? theme.colors.green[0] : undefined,
        }}>
            <Table.Td><Text>{new Date(invitation.created_at).toLocaleDateString()}</Text></Table.Td>
            <Table.Td><Text>{new Date(invitation.last_update).toLocaleDateString()}</Text></Table.Td>
            <Table.Td><Text>{invitation.assigned_to || 'N/A'}</Text></Table.Td>
            <Table.Td><Text>{getConfirmedInviteesText(invitation)}</Text></Table.Td>
            <Table.Td><Text>{invitation.adults}</Text></Table.Td>
            <Table.Td><Text>{invitation.minors}</Text></Table.Td>
            <Table.Td>
                <Box style={{ display: 'flex' }}>
                    <Box w={200}><Text truncate="end">{`https://toji.ar/?inv=${invitation.id}`}</Text></Box>
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
            <Table.Td>
                <Box style={{
                    alignItems: 'center',
                    display: 'flex'
                }}>

                    <Tooltip label="Asignar" position="top">
                        <ActionIcon variant="transparent" size="sm" onClick={() => { onAssignDialogOpen(invitation) }}>
                            <IconUserPlus />
                        </ActionIcon>
                    </Tooltip>

                </Box>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <AssignDialog opened={!!selectedInvitation} invitation={selectedInvitation} onClose={onAssignDialogClose} />
            <Table stickyHeader stickyHeaderOffset={60} highlightOnHover>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Creada</Table.Th>
                        <Table.Th>Actualizada</Table.Th>
                        <Table.Th>Asignado a</Table.Th>
                        <Table.Th>Confirmados</Table.Th>
                        <Table.Th>Adultos</Table.Th>
                        <Table.Th>Menores</Table.Th>
                        <Table.Th>Link</Table.Th>
                        <Table.Th>Cerrada</Table.Th>
                        <Table.Th>Acciones</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    )
}

export default Invitations