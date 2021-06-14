import { BUY_ICECREAM , BUY_CAKE, BUY_CHOCOLATE } from "./ItemType"

const initialState = {
    numOfIceCream : 20,
    numOfCake: 10,
    numOfChocolate : 50
}
const ItemReducer = (state = initialState, action) =>{
    console.log(action.payload)
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            
            numOfIceCream : state.numOfIceCream - action.payload
        }
        case BUY_CAKE : return{
            ...state,
            numOfCake : state.numOfCake - action.payload
        }
        case BUY_CHOCOLATE : return{
            ...state,
            numOfChocolate : state.numOfChocolate - action.payload
        }
        default : return state
    }
}
export default ItemReducer
