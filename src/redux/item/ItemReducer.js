import { BUY_ICECREAM , BUY_CAKE, BUY_CHOCOLATE } from "./ItemType"

const initialState = {
    numOfIceCream : 20,
    numOfCake: 10,
    numOfChocolate : 50
}
const ItemReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCream : state.numOfIceCream -1
        }
        case BUY_CAKE : return{
            ...state,
            numOfCake : state.numOfCake -1
        }
        case BUY_CHOCOLATE : return{
            ...state,
            numOfChocolate : state.numOfChocolate -1
        }
        default : return state
    }
}
export default ItemReducer
