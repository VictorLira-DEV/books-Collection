export const AppReducer =  (state, action) => {

    switch (action.type) {

        case 'INITIAL_DATA':
            const data = []
            action.payload.forEach((app) => {
                data.unshift(app);
            })
            return {
                spentAnalysis: data
            }



        case 'ADD_TRANSACTION':
            return{
                spentAnalysis: [action.payload, ...state.spentAnalysis]
            }

        default:
            return state
    }
}; 