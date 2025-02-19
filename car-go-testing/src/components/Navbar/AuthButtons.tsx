"use client";

import React from 'react'
import { primaryGradient } from '@/const'
import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import { useMediaQuery } from '@mantine/hooks'
import { usePathname } from 'next/navigation';
import { useUserSessionContext } from '@/context/UserSessionContext';
import { ProfileMenu } from '../ProfileMenu';

const excludedPaths =['/login','/signup'];

const AuthButtons = () => {
  const smallScreen = useMediaQuery('(max-width: 991px)')
  const pathname = usePathname();
  const { session } = useUserSessionContext();


  return (
    <> 
    {!excludedPaths.includes(pathname) &&
    <Group grow={smallScreen}>
      {session ? <ProfileMenu /> : <>
        <Button component={Link} href="/login" variant="default" >
          Log In
          </Button>
        <Button component={Link} href="/signup" variant="gradient" gradient={primaryGradient} >
          Sign Up
          </Button>
          </>
          }
    </Group> 
    }
    </>
  )
}

export default AuthButtons;