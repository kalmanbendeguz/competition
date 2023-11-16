import { useState } from 'react';
import { UnstyledButton, Menu, Image as MantineImage, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import images from './images';
import classes from './LanguagePicker.module.css';
import Image from 'next/image'

const data = [
    { label: 'English', image: images.english },
    { label: 'German', image: images.german },
    { label: 'Italian', image: images.italian },
    { label: 'French', image: images.french },
    { label: 'Polish', image: images.polish },
];

export function LanguagePicker() {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
        <Menu.Item
            leftSection={<Image src={item.image} width={30} height={30} alt='akarmi' />}
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton className={classes.control} data-expanded={opened || undefined}>

                        <Image src={selected.image}  width={26} height={26} alt="valami" />
                        {/*<span className={classes.label}>aa{selected.label}</span>*/}

                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    );
}