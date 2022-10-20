import { Fragment, useState } from "react";

import { searchFilter } from "../redux/filterSlice";
import { useDispatch } from 'react-redux';

const Search = ({ placeholder,filter }) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const changeHandler = (e) => {
       
        dispatch(searchFilter(e))
        setValue(e.target.value);
    }
    return (
        <Fragment>
            <form className="text-center mt-[22px] relative">
                <div>
                    <input onChange={changeHandler} value={value} type="text" placeholder={placeholder} className="text-right text-[12px] pl-[16px] pr-[49px] py-[17px] border-[1px] border-[#D6D6D6] rounded-[13px] h-[58px] w-[86%]" />
                    <img src="/assets/img/search.png" className="absolute right-[43px] top-[17px] w-[24px]  h-[24px] " />
                </div>
            </form>
        </Fragment>
    );
}

export default Search;
