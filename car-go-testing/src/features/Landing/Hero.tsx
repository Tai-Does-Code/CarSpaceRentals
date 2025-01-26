// import { SearchEngine } from '@/components/SearchEngine/SearchEngine';
import { Container } from '@mantine/core';
import classes from './Hero.module.css';
import { Slider } from './Slider';
import SearchEngine from '@/components/SearchEngine/SearchEngine';

export const Hero = () => {
  return (
    <Container pb="4rem" fluid className={classes.hero}>
      <Slider />
      <Container>
        <SearchEngine />
      </Container>
    </Container>
  );
};