import React from 'react'
import classes from './Styles.module.css';
import { Box, Card, Container, Flex, Title } from '@mantine/core';


export const CarsLayout = () => {
  return (
    <Container className={classes.parentContainer} size="xl" my="sm" py="md" >
        <Flex justify="flex-end"> {/* Hide the map */}  </Flex>

        <Flex
            direction={{base: 'column', md: 'row'}}
            className={classes.container}
            >
                <Card w={{base: '100%', md: '350px'}} >
                    <Flex align="center" justify="space-between" >
                        <Title order={4} > Filters </Title>
                        <Box display={{base: 'none', md: 'inline-block'}} >

                        </Box>

                    </Flex>

                </Card>


            </Flex>

    </Container>
  )
}
