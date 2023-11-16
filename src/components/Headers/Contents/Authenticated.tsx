import { Group } from '@mantine/core';
import { Global } from './Global';

export function Authenticated() {

    return (
        <>
            <Group>
                <div>userbutton</div>
            </Group>
            <Global />
        </>
    );
}