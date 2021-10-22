import {
    ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAILURE,CLEAR, DETAIL_PRODUCT_REQUEST, DETAIL_PRODUCT_SUCCESS, DETAIL_PRODUCT_FAILURE
} from './Constants'

export const productReducer  =(state={products:[]},action)=>{

switch(action.type){
    case ALL_PRODUCT_REQUEST:return{
        loading:true,
        products:[]
    }
    case ALL_PRODUCT_SUCCESS:return{
        loading:false,
        products:action.payload.products,
        productsCount:action.payload
    }
    case ALL_PRODUCT_FAILURE:return{
        loading:false,
        products:action.payload
    
    }
    case CLEAR:return{
        ...state,
        err:null
    
    }

    default:return state;
}




}

export const productDetailReducer = (state={products:{}},action)=>{
    switch(action.type){
        case DETAIL_PRODUCT_REQUEST:
            return{
                loading:true,
               products:{}
            }
            case DETAIL_PRODUCT_SUCCESS:
                return{
                    loading:false,
                products:action.payload
                }
                case DETAIL_PRODUCT_FAILURE:
                    return{
                        loading:false,
                        products:"Error"
                    }

                    default:return state
    }
}

