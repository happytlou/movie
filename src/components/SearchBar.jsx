import React from 'react'
import { MdBrightness4 } from "react-icons/md";
import { IoIoSearch } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { AiOutlineSearch } from 'react-icons/ai';



const SearchBar = () => {
    return (

        <div className="container">
        <div className='search'>

           

                <div className='left'>
                    <MdBrightness4 />
                </div>

                <div className='center'>
                    <AiOutlineSearch />
                    <input type="text" name="" id="" />
                </div>

                <div className='right'>LOGIN 
                    <IoMdContact />
                </div>
            </div>


        </div>
    )
}

export default SearchBar;