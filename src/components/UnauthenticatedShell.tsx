'use client';

import { useDisclosure } from '@mantine/hooks';
import { AppShell, BackgroundImage, Skeleton, Burger } from '@mantine/core';
import { UnauthenticatedHeader } from './Headers/Unauthenticated';
import LandingImageMain from '@/components/LandingImageMain'
import { HeroContentLeft } from './HeroContentLeft/HeroContentLeft';
import { LanguagePicker } from './LanguagePicker/LanguagePicker';
import { ButtonMenu } from './ButtonMenu';


export function UnauthenticatedShell({
    children,
}: {
    children: React.ReactNode
}) {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            aside={{ width: 200, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
            padding="md"
        >
            <UnauthenticatedHeader opened={opened} toggle={toggle}/>
            {/** KELL MAJD NAVBAR */}
            <AppShell.Navbar>
                sdfgsdf
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>

                {/*<HeroContentLeft />*/}
                {/* <LanguagePicker /> */}
                {/*</AppShell>*/}{children}
                {/* UNAUTHENTICATED Aside is hidden on on md breakpoint and cannot be opened when it is collapsed */}
            </AppShell.Main>
            <AppShell.Footer p="md">Footer</AppShell.Footer>

        </AppShell>
    );
}