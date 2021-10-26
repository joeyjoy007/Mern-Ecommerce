import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../Redux Store/Action'

const Products = () => {

    const {loading,products,error} = useSelector(state => state.products)
    

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getProduct())
    }, [dispatch])

    
    return (
        <div>
        <div className="container">
        <div className="row">
     {products && products.map((element)=>{
         return (
            
             <div className="col-md-4">

             <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1265384/2018/2/7/11517995803839-Highlander-White-Slim-Fit-Casual-Shirt-7581517995803601-1.jpg" className="img-fluid" alt="product" />
             <h5>{element.name}</h5>
             <h5>{element.description}</h5>
             <h5>{element.price}</h5>
             <h5>{element.rating}</h5>
             <h5>{element.stock}</h5>
             </div>
            
         )
     })}
     </div>
             
     </div>
        </div>
    )
}

export default Products
