import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import '../product/product.css'
import('../../eimages/2.jpg')
const Product = (props) => {
  
    const options={
        edit:false,
        activecolor:"tomato",
        value:`${props.product.ratings}`,
        size:window.innerWidth < 600 ?20:25,
        isHalf:true

    }
    return (
    <div >

 
    
    <Link className="productId" to={props.product.id }>
 
         
   
    // <img style={{marginLeft:"-5vw"}} src='https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1265384/2018/2/7/11517995803839-Highlander-White-Slim-Fit-Casual-Shirt-7581517995803601-1.jpg' style={{height:"20vh"}} alt={props.product.name} />
     <p>{props.product.name} </p>
     <div>
     <ReactStars {...options}/>
     <span>({props.product.noOfReviews})Reviews</span>
     <p>{props.product.price}</p>
    
     </div>
     
    
     </Link>
  
          
      </div>
    )
}

export default Product
