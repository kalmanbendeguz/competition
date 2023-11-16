'use client';

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { CompetitorHeader } from './Headers/Competitor';

export function AuthenticatedShell({
    children,
}: {
    children: React.ReactNode
}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: false } }}
            padding="md"
        >
            <CompetitorHeader />
            <AppShell.Navbar p="md">
                Navbar
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
                AUTHENTICATED Aside is hidden on on md breakpoint and cannot be opened when it is collapsed
            </AppShell.Main>
            <AppShell.Aside p="md">Aside</AppShell.Aside>
            <AppShell.Footer p="md">Footer</AppShell.Footer>

        </AppShell>
    );
}