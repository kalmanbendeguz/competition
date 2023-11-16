import { Group, Stack, Container, Box } from '@mantine/core';
import { Burger } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { LanguagePicker } from '@/components/LanguagePicker/LanguagePicker';


export function Global() {

    return (
        <>

            <Group >
                <div>ThemeButton</div>
                <div>LangPicker</div>
                <div>

                <Box style={{flex: 1, overflow:'auto'}}>
                    <LanguagePicker />
                </Box>
                </div>





            </Group>
        </>
    );
}