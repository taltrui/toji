import { AppShell, Burger, Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useLogout from '../../../../services/mutations/useLogout';

function Dashboard() {
    const [opened, { toggle }] = useDisclosure();

    const { mutate, isPending } = useLogout()

    const navigate = useNavigate();

    const location = useLocation();

    const locationName = location.pathname.split('/').pop();

    console.log(locationName)
    const goToInvitations = () => {
        navigate('/admin/invitations');
        toggle();
    }

    const goToInvitees = () => {
        navigate('/admin/invitees');
        toggle();
    }

    const logout = () => {
        mutate(undefined, {
            onSuccess: () => navigate('/admin/login')
        });
    }

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 200,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header style={{ display: 'flex', alignItems: 'center', paddingLeft: 12, paddingRight: 12 }}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="md"
                />
                <Text size="xl" style={{ marginLeft: 12 }}>
                    Dashboard
                </Text>
                <Button style={{ marginLeft: 'auto' }} variant='outline' onClick={logout} loading={isPending}>
                    Cerrar sesión
                </Button>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Button onClick={goToInvitations} style={{ marginBottom: 12 }} variant={locationName === 'invitations' ? 'light' : 'transparent'}>
                    Invitaciones
                </Button>
                <Button onClick={goToInvitees} variant={locationName === 'invitees' ? 'light' : 'transparent'}>
                    Invitados
                </Button>
            </AppShell.Navbar>

            <AppShell.Main><Outlet /></AppShell.Main>
        </AppShell>
    );
}

export default Dashboard