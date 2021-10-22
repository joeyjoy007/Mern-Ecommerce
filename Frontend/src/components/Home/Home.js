import React from 'react'
import '../Home/home.css'
import Product from '../product/Product'
import Metadata from '../Header/Metadata'
import { getProduct } from '../../Redux Store/Action'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Loader from '../Loader/Loader'
import { useAlert } from 'react-alert'





const Home = (props) => {

  const alert = useAlert()
  


const {error,loading,products,productsCount} = useSelector(state => state.products)
const dispatch = useDispatch()

useEffect(() => {
  if(error){
    return alert.error(error)
  }
   dispatch(getProduct())
}, [dispatch])


    return (
        
      <>
      {loading? <Loader/>: 
         <div>
      
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
