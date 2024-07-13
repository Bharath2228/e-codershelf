export const filterReducer = (state, action) => {
    const { type, payLoad} = action;

    switch(type){
        case "PRODUCT_LIST":
            return { productList: payLoad.products }

        case "SORT_BY":
            return {...state, sortBy: payLoad.sortBy}

        case "RATINGS":
            return { ...state, ratings: payLoad.ratings}

        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerOnly: payLoad.bestSellerOnly };
        
        case "ONLY_IN_STOCK":
            return { ...state, onlyInStock: payLoad.onlyInStock}
        
        case "CLEAR_FILTER":
            return

        default:
            throw new Error ("No Case Found")
    }
}