import React from 'react'
import { MdBrightness4 } from "react-icons/md";
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
                    <form class="example" action="action_page.php">
                        <button type="submit"><AiOutlineSearch /></button>
                        <input type="text" placeholder="" name="search" />

                    </form>
                    {/* 
                    &nbsp;&nbsp;
                    <input type="text" name="" id="" /> */}
                </div>

                <div className='right'>LOGIN
                    <IoMdContact className='icon' />

                </div>
            </div>


        </div>
    )
}

export default SearchBar;