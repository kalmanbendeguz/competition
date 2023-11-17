import { useState } from 'react';
import { Container, Group, Burger, AppShellHeader, AppShell, Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import classes from './Header.module.css';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function Header({ children, opened, toggle }: { children: React.ReactNode, opened: any, toggle: any }) {
    //const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    //const items = links.map((link) => (
    //    <a
    //        key={link.label}
    //        href={link.link}
    //        className={classes.link}
    //        data-active={active === link.link || undefined}
    //        onClick={(event) => {
    //            event.preventDefault();
    //            setActive(link.link);
    //        }}
    //    >
    //        {link.label}
    //    </a>
    //));

    return (
        <AppShellHeader
            withBorder={true}
        >

            <Group
                h="100%"
                px="md"
                justify="space-between"
                align="center"
            >
                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                <MantineLogo size={28} />


                {children}


            </Group>

        </AppShellHeader>
    );
}