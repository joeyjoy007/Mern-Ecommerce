import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../Redux Store/Action'
import { useEffect } from 'react'
import { useParams } from 'react-router'
const ProductDetail = () => {


  const {id} = useParams()
  console.log(id);
const dispatch = useDispatch()

const state = useSelector(state => state.productDetail)


useEffect(() => {

  dispatch(getProductDetail(id))
   
}, [dispatch])

    return (
        <div>
       
        </div>
    )
}

export default ProductDetail
