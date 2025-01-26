"use client";
import { Box, Group } from '@mantine/core'
import React from 'react'
import classes from './Style.module.css'
import { Logo } from './Logo'
import AuthButtons from './AuthButtons'
import { ThemeSwitcher } from './ThemeSwitcher'
import {NavigationMobile} from './NavigationMobile'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
  return (
    <Box className={classes.header}>
    <Group justify='space-between' h="100%">
        <Logo />

        <Box visibleFrom="xs">
            <AuthButtons/>
        </Box>

        <Box visibleFrom="xs">
          <ThemeSwitcher />
        </Box>

        <Box hiddenFrom='xs' >
            < NavigationMobile />
        </Box>
    </Group>
    </Box>
  )
}

export default Navbar