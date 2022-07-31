import { FormControl, Select, MenuItem } from '@material-ui/core'
import React from 'react'

const SelectCategory = ({ categories, selectedCategory,onChange }) => {
  return (
    <FormControl className="formControl">
      <Select value={selectedCategory.id} onChange={() => {}}>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectCategory