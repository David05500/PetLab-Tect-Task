const productsReducer = (state, action) => {
    const {type, key, payload} = action

    switch (type) {
        case "UPDATE_VALUE":
            return {
                ...state,
                [key]: payload
            }
        default:
            throw new Error(`No action fount for: ${type}`)
    }
} 

export default productsReducer