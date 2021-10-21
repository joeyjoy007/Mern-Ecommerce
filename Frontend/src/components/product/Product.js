import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import '../product/product.css'
import('../../eimages/2.jpg')
const Product = (props) => {

    const options={
        edit:false,
        activecolor:"tomato",
        value:2.5,
        size:window.innerWidth < 600 ?20:25,
        isHalf:true

    }
    return (
    <div >

 
    
    <Link className="productId" to={props.product.id }>
 
         
    <img style={{marginLeft:"-5vw"}} src={props.product.images[0].url} alt={props.product.name} />
  
     <p>{props.product.name} </p>
     <div>
     <ReactStars {...options}/>
     <span>Reviews</span>
     <p>{props.product.price}</p>
     </div>
     
    
     </Link>
  
          
      </div>
    )
}

export default Product
