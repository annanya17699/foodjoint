import { BUY_ICECREAM , BUY_CAKE, BUY_CHOCOLATE } from "./ItemType"

export const buyIcecream = (numIcecream=1) => {
    return{
        type: BUY_ICECREAM,
        payload : numIcecream
    }
}

export const buyCake = (numCake=1) => {
    return{
        type: BUY_CAKE,
        payload : numCake
    }
}

export const buyChocolate = (numChocolate=1) => {
    return{
        type: BUY_CHOCOLATE,
        payload : numChocolate
    }
}