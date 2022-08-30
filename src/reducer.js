import{INCREASE,DECREASE,CLEAR_CART,GET_TOTAL,GET_AMOUNT,REMOVE} from './actions'
export const reducer = (state,action)=>{
 switch(action.type){
  case CLEAR_CART:
    return  {...state,cart :[]}
    
   case INCREASE:
      let tempCart=state.cart.map((cartItem)=>{

        if(cartItem.id === action.payload.id){
          cartItem= {...cartItem,amount:cartItem.amount+1}
        }

          return cartItem
        
        })  
        return {...state,cart:tempCart};

     case DECREASE:
      let tempCar= []
      if(action.payload.amount === 1){
        tempCar = state.cart.filter((cartItem)=>{
          cartItem = cartItem.id !==action.payload.id;
        })
       } else{
        tempCar=state.cart.map((cartItem)=>{

          if(cartItem.id === action.payload.id){
            cartItem= {...cartItem,amount:cartItem.amount-1}
        };
        
      
      
      return cartItem
        })
        return {...state,cart:tempCar};
      }
      case REMOVE:
        return {...state, cart:state.cart.filter((cartItem)=>
          cartItem.id !== action.payload.id
          )}
      case GET_TOTAL:
       let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
        const {price,amount} = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;

        cartTotal.amount +=amount;
        
        return cartTotal
       },{
        total:0,
        amount:0
       })   
       total = parseFloat(total.toFixed(2))
       return {...state, amount,total}

  default:
    return state  
 }




  // if(action.type === CLEAR_CART){
// return {...state,cart :[]}
// }
// if(action.type === INCREASE){
// return {...state,cart :[]}
// }
// if(action.type === CLEAR_CART){
// return {...state,cart :[]}
// }
    
    // console.log({state,action})
    return state
  }