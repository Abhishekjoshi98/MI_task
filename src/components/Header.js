import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import data from '../data';
import CardContainer from './CardContainer';




const Header = _ => {
    const [list, setList] = useState(data);
    const [keyword, setKeyword] = useState('')
    const [price, setPrice] = useState(['',500,2500]);


    const handleChange = (event) => {
        setKeyword(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value.split(/[$-]+/));
    }

    useEffect(_ => {
        //Filter based on location
        const filterList = data.filter(singleData => {

            if (singleData.locationTitle === keyword) {
                return true;
            }

            return false;
        });

        setList(filterList);
    }, [keyword]);
    useEffect(_ => {
        //Filter based on location price
        const filterList = data.filter(singleData => {

            if (singleData.rentAmount >= price[1] && singleData.rentAmount <= price[2]) {
                return true;
            }

            return false;
        });

        setList(filterList);
    }, [price]);


    return (
        <> 
            <div className='main-cont'>
                <div className='header-cont'>
                    <div className='text'>
                        <h1 className='heading'>Search Properties to Rent</h1>
                    </div>
                    <Box sx={{ width: 350, marginLeft: '26rem' }} size='small'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Search with SearchBar</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Search with SearchBar"
                                value={keyword}
                                onChange={handleChange}
                            >
                                {
                                    data.map((item, idx) => {
                                       return <MenuItem value={`${item.locationTitle}`} key={idx}>{item.locationTitle}</MenuItem>
                                    })
                                }


                            </Select>
                        </FormControl></Box>
                </div>
                <div className='price-input'>
                    <div className='price-cont'>
                        <Stack spacing={2} direction="row">
                            <label htmlFor="price">Price</label><br />
                            <select id="price" name="price" onChange={handlePriceChange}>
                                <option value="$500-$2500">$500-$2500</option>
                                <option value="$2500-$5000">$2500-$5000</option>
                                <option value="$5000-$7500">$5000-$7500</option>
                                <option value="$7500-$10000">$7500-$10,000</option>
                            </select>
                            <Button variant="contained">Search</Button>
                        </Stack>
                    </div>
                </div>
            </div>
            
            <CardContainer list={list} />
        </>
    )

}

export default Header