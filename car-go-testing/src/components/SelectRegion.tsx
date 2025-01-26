import { Select } from '@mantine/core'
import React from 'react'

export const SelectRegion = () => {
  return (
    <Select 
        label = "Region"
        placeholder='Northeast'
        data={["Midwest","Southwest","Northeast","Southeast", "West"]}
        // Midwest, Southwest, Northeast, Southeast, and West.
        searchable
        nothingFoundMessage="Nothing Found"
    />
  )
}