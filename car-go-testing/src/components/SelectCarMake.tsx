import { Select } from '@mantine/core'
import React from 'react'

export const SelectCarMake = () => {
  return (
    <Select 
        label = "Car Make"
        placeholder='Ford'
        data={[
            "Acura",
            "Alfa Romeo",
            "Audi",
            "BMW",
            "Buick",
            "Cadillac",
            "Chevrolet",
            "Chrysler",
            "Dodge",
            "Ford",
            "GMC",
            "Honda",
            "Hyundai",
            "Infiniti",
            "Jeep",
            "Kia",
            "Land Rover",
            "Lexus",
            "Lincoln",
            "Mazda",
            "McLaren",
            "Mercedes-Benz",
            "Mini",
            "Mitsubishi",
            "Nissan",
            "Porsche",
            "Ram",
            "Subaru",
            "Tesla",
            "Toyota",
            "Volkswagen",
            "Volvo"
        ]}
        searchable
        nothingFoundMessage="Nothing Found"
    />
  )
}
