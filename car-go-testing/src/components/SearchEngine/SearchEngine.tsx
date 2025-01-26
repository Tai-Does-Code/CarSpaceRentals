import { primaryGradient } from '@/const'
import { Button, Container, Flex } from '@mantine/core'
import React from 'react'
import classes from './SearchEngine.module.css';
import { SelectCountry } from '../SelectCountry';
import { SelectRegion } from '../SelectRegion';
import { SelectCarMake } from '../SelectCarMake';
import { SelectDate } from '../SelectDate';

const SearchEngine = () => {
  return (
    <Container className={classes.container}>
        <Flex 
            direction={{base: 'column', sm:'row'}} 
            justify="center" 
            gap={{base: 'sm', sm:'lg'}} 
            align={{
                base: 'stretch', 
                sm: 'flex-end',
                }}
        >
            <SelectCountry /> 
            <SelectRegion />
            <SelectCarMake />
            <SelectDate label="Pickup Date" />
            <SelectDate label="Dropoff Date" />
            <Button variant='gradient' gradient={primaryGradient}>
                Search For A Car
            </Button>
        </Flex>
    </Container>
  )
}

export default SearchEngine