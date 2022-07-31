import React from 'react';
import { useState } from 'react';
import { Paper, Container,InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import SelectCategory from './SelectCategory'
import "./styles.css"


const defaultCategory = {id: 1, name:"All"};

const FilterProduct = ({categories}) => {

  const [selectedCategory, setSelectedCategory] = useState([defaultCategory]);

  const handleSelectedChange = (e) =>{
    const {value} = e.target;
    const category = categories.find((cat) => cat.id === value);
    setSelectedCategory(category);

  }
  return (
    <div className="filter-bar">
      <Container>
        <Paper component="form" className="root" onSubmit={() => {}}>
        <SelectCategory
           categories={[defaultCategory, ...categories]}
           selectedCategory={selectedCategory}
           onChange={handleSelectedChange}       
        />
          <InputBase className="input" onChange={() => {}} placeholder="Search for products, brands and more..." inputProps={{"aria-label": "Search for a product"}}/>
           <IconButton type="submit" aria-label="search">
            <Search />
           </IconButton>
        </Paper>
      </Container>      
    </div>
  )
}

export default FilterProduct