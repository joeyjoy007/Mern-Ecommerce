import React from 'react'

const Review = (props) => {
    return (
        <div>
            <p>{props.products.reviews[0].ratings}</p>
            <p>{props.products.reviews[0].coments}</p>
           
        </div>
    )
}

export default Review
