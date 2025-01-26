import React from 'react';
import { Text } from '@mantine/core';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Text
      component={Link}
      href="/"
      fz="lg"
      fw="bold"
      variant="gradient"
      gradient={{ from: 'pink', to: 'yellow'}}
    >
      CarSpace
    </Text>
  );
};