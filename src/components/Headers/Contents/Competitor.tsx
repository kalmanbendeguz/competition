import { Group } from '@mantine/core';
import { Authenticated } from './Authenticated';

export function Competitor() {

    return (
        <>
            <Group>
                <div>competitions</div>
                <div>products</div>
                <div>results</div>
            </Group>
            <Authenticated />
        </>
    );
}