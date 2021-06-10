import { BUY_ICECREAM , BUY_CAKE, BUY_CHOCOLATE } from "./ItemType"

export const buyIcecream = () => {
    return{
        type: BUY_ICECREAM
    }
}

export const buyCake = () => {
    return{
        type: BUY_CAKE
    }
}

export const buyChocolate = () => {
    return{
        type: BUY_CHOCOLATE
    }
}