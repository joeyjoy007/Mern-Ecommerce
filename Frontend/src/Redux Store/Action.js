import { ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAILURE,CLEAR} from "./Constants";
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

export const clearProduct = ()=>(dispatch)=>{

    dispatch({type:CLEAR})
}