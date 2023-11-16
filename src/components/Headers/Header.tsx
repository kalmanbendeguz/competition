import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import classes from './Header.module.css';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function Header({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);
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
        <header className={classes.header}>
            <div className={classes.inner}>

                    <Group>
                        <Group>
                            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                            <MantineLogo size={28} />
                        </Group>
                        {children}
                    </Group>


            </div>

        </header>
    );
}