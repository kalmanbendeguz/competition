import Link from 'next/link';
import { Button } from '@mantine/core';

export function LoginLinkButton() {
    return (
        <Button
            component={Link}
            href="/"
            size="md"
        >
            Login
        </Button>
    )
}