import { Group, Stack, Container, Box } from '@mantine/core';
import { Burger } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { LanguagePicker } from '@/components/LanguagePicker/LanguagePicker';
import { ActionToggle } from '@/components/ActionToggle/ActionToggle';


export function Global() {

    return (
        <>

            <Group
                justify="space-between"
                align="center">
                {/* <div>ThemeButton</div>
                <div>LangPicker</div> */}
                {/* <div> */}

                {/* <Box style={{flex: 1, overflow:'auto'}}> */}
                <ActionToggle />
                <LanguagePicker />
                {/* </Box> */}
                {/* </div> */}





            </Group>
        </>
    );
}