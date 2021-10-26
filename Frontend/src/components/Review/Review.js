import React from 'react'
import ReactStars from 'react-rating-stars-component'
const Review = (props) => {

    const options={
        edit:false,
        activecolor:"tomato",
       value:`${props.review.rating}`,
        size:window.innerWidth < 600 ?20:25,
        isHalf:true
      
      }
    return (
        <div style={{border:"2px solid black"}}>
           
        <p><h5>Reviews</h5>{props.review.comments}</p>
        <ReactStars {...options}/>
           
           
        </div>
    )
}

export default Review
