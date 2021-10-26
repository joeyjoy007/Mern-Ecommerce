import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../Redux Store/Action'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import ReactStars from 'react-rating-stars-component'

import './detail.css'
import Review from '../Review/Review'
import Loader from '../Loader/Loader'
const ProductDetail = (props) => {



  const { id } = useParams()

  const dispatch = useDispatch()

  const { loading, products } = useSelector(state => state.productDetail)




  useEffect(() => {

    dispatch(getProductDetail(id))

  }, [dispatch])


  // {products.reviews && products.reviews[0] ?
  //   (products.reviews && products.reviews.map((review) => {
  //     return <Review review={review} />
  //   }

  //   )) : <div>No reviews yet</div>}

  const options = {
    edit: false,
    activecolor: "tomato",
    value: `${products.rating}`,
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true

  }

  return (
    < >

{loading? <Loader/> :      <div className="container first mt-5 d-flex justify-content-center flex-wrap" style={{}}>
<div>
  <div style={{ width: "25vmax", marginRight:"1vmax" }}>
    <div id="carouselExampleFade" class="carousel slide carousel-fade"  data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active img-fluid">
          <img style={{marginTop:"1vmax"}} src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1265384/2018/2/7/11517995803839-Highlander-White-Slim-Fit-Casual-Shirt-7581517995803601-1.jpg" class="d-block w-100" alt="..." />
        </div>

        <div class="carousel-item img-fluid">
          <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1265384/2018/2/7/11517995803839-Highlander-White-Slim-Fit-Casual-Shirt-7581517995803601-1.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
<div style={{ marginLeft: "5vmax" }} className="item">
  <div className="inner">

    <div>
      <h1 style={{color:"#6b8889"}}>{products.name}</h1>
    </div>
   
    <h4 style={{marginTop:"2vmax"}}> ₹{products.price}</h4>
    <p style={{color:"#6b8889"}}>{products.description}</p>
    
    <h4>{products.category}</h4>
    
    <div>
      Add to Cart : <input type="button" value="-" /><input style={{ width: "4vmax", textAlign: "center" }} value="1" type="text" /> <input type="button" value="+" style={{marginLeft:"-1vmax"}} />
    </div>


    <h4>Reviews : {products.noOfReviews}</h4>

    <small className={products.stock < 1 ? "text-danger" : "text-success"}>Stock : {products.stock < 1 ? "Out of Stock" : products.stock}</small>

   
   
     
    
    <ReactStars {...options} />
    <button className="btn btn-outline-success btn-sm">Submit Review</button>

  </div>
</div>

</div>
}



    </>

  )
}

export default ProductDetail
