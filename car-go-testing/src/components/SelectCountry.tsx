import { Select } from '@mantine/core'
import React from 'react'

export const SelectCountry = () => {
  return (
    <Select 
        label = "Country"
        placeholder='USA'
        data={["USA","Canada","Mexico"]}
        searchable
        nothingFoundMessage="Nothing Found"
    />
  )
}
