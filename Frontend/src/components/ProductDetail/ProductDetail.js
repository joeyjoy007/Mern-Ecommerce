import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../Redux Store/Action'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import ReactStars from 'react-rating-stars-component'
import './detail.css'
import Review from '../Review/Review'
const ProductDetail = (props) => {

 

  const {id} = useParams()

const dispatch = useDispatch()

const {loading,products,error}= useSelector(state => state.productDetail)




useEffect(() => {

  dispatch(getProductDetail(id))
   
}, [dispatch])


const options={
  edit:false,
  activecolor:"tomato",
 value:`${products.rating}`,
  size:window.innerWidth < 600 ?20:25,
  isHalf:true

}

    return (
      <div>
      <div className="container first mt-5 d-flex justify-content-center flex-wrap">
      <div>
        <div style={{width:"230px"}}>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1265384/2018/2/7/11517995803839-Highlander-White-Slim-Fit-Casual-Shirt-7581517995803601-1.jpg"  class="d-block w-100" alt="..."/>
          </div>
          
          <div class="carousel-item">
            <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1265384/2018/2/7/11517995803839-Highlander-White-Slim-Fit-Casual-Shirt-7581517995803601-1.jpg" class="d-block w-100" alt="..."/>
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
        <div style={{marginLeft:"5vmax"}} className="item">
        <div className="inner">

        <div>
        <h2 style={{borderBottom:"1px solid black"}}>{products.name}</h2>
        </div>
        <h4>category : {products.category}</h4>
        <h4>Price : {products.price}</h4>
        <div>
        Add to Cart : <button className=" btn-outline-success btn-sm">+</button><input style={{width:"4vmax",textAlign:"center"}} value="1"  type="text" /> <button className="btn-outline-success btn-sm ">-</button>
        </div>
        
       
        <h4>Reviews : {products.noOfReviews}</h4>
     
        <small className={products.stock<1?"text-danger":"text-success"}>Stock : {products.stock<1?"Out of Stock":products.stock}</small>
        
        <div>
        <h4 className="lineHeight">Description</h4>
        <p>{products.description}</p>
        </div>
        <ReactStars {...options}/>
        <button className="btn btn-outline-success btn-sm">Submit Review</button>
  
        </div>
        </div>
       
        </div>
        <Review products={products} />
       </div>

    )
}

export default ProductDetail
