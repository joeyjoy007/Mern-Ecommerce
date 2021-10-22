import React from 'react'
import '../Home/home.css'
import Product from '../product/Product'
import Metadata from '../Header/Metadata'
import { getProduct } from '../../Redux Store/Action'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Loader from '../Loader/Loader'



const Home = (props) => {

  


const {loading,products,productsCount} = useSelector(state => state.products)
const dispatch = useDispatch()

useEffect(() => {
   dispatch(getProduct())
}, [dispatch])


    return (
        
      <>
      {loading? "s":  <div>
      <Metadata title="Ecommerce"/>
      <div className="h">

          <img src="" alt="" />
          </div>
          <div>
          
          <p className="fi"><span>Featured items</span></p>
          </div>
          <div className="container " >
<div className="row " style={{marginLeft: "7vw"}}>


{products && products.map((element)=>{
  return (
      <div className="col-md-4">
          
      <Product product={element}/>
      </div>
  )
})}
        
     
       
          </div>
          </div>
          </div>}
      </>
        
    )
}

export default Home
