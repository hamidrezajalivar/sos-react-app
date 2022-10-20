import Select from 'react-select';
import { blogFake } from './../data';
import { useProductACtions } from './../contexts/UserContext';
import { useState } from 'react';

const SelectFilter = (props) => {
   

    return (
        <>
    
            <Select
        value={props.value}
        onChange={props.changeHandler}
        options={props.options}
        placeholder={props.placeholder}

      />

        </>
    );
}

export default SelectFilter;