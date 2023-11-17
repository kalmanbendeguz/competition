import { Group } from '@mantine/core';
import { Global } from './Global';
import { LoginLinkButton } from '@/components/LoginLinkButton';

export function Unauthenticated() {

    return (

        <Group>
            <div>signup</div>
            <LoginLinkButton />
            <Global />
        </Group >



    );
}