export const AppReducer =  (state, action) => {

    switch (action.type) {
        case 'INITIAL_DATA':
            const data = []
            action.payload.forEach((app) => {
                data.unshift(app);
            })
            return {
                transactions: data
            }



        case 'ADD_TRANSACTION':
            return{
                transactions: [action.payload, ...state.transactions]
            }

        default:
            return state
    }
}; 