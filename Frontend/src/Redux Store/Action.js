import { ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAILURE,CLEAR, DETAIL_PRODUCT_FAILURE, DETAIL_PRODUCT_REQUEST, DETAIL_PRODUCT_SUCCESS} from "./Constants";
import axios from 'axios'




export const getProduct = ()=>async (dispatch)=>{

    try {

        dispatch({type:ALL_PRODUCT_REQUEST})

        const product = await axios.get('api/v1/products').catch((err)=>{
            console.log(err);
        })

        dispatch({type:ALL_PRODUCT_SUCCESS, payload:product.data})
      
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAILURE,
            payload:"Error"
        })
    }

}



export const  getProductDetail = (id) => async(dispatch)=>{
    try {

        dispatch({type:DETAIL_PRODUCT_REQUEST})

        const {data} = await axios.get(`/api/v1/getProductDetail/${id}`).catch((error)=>{
            console.log(error)
           
        })
        console.log("habbhaiu",data.products)
        
        dispatch({type:DETAIL_PRODUCT_SUCCESS,payload:data.products})
    } catch (error) {

        dispatch({type:DETAIL_PRODUCT_FAILURE,payload:"ERROR"})
        
    }
}
export const clearProduct = ()=>(dispatch)=>{

    dispatch({type:CLEAR})
}