import React from 'react'
import { useState } from 'react'

import {useHistory} from 'react-router-dom'
const Search = () => {

   
const history = useHistory();

        const [keyword, setKeyword] = useState("")

        const handelSubmit = (e)=>{
            e.preventDefault();
           if(keyword){
               history.push(`/products/${keyword}`)
           }
           else{
               history.push('/products')
           }
        }
        
    
    return (
        <>
        <form onSubmit = {(e)=>handelSubmit(e)} >

        <input type="text" placeholder="Search" onChange={(e)=>setKeyword(e.target.value)} />
        <input type="submit" value="search" name="search"/>
        </form>

       
        </>
    )
}

export default Search
