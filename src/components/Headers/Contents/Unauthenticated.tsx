import { Group } from '@mantine/core';
import { Global } from './Global';

export function Unauthenticated() {

    return (
        <>
            <Group>
                <div>signup</div>
                <div>login</div>
            </Group>

            <Global />
        </>
    );
}