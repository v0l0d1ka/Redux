const initialState = {
    counter: 0,
    results: []
}



const reducer = (state = initialState, action) => {
    // if(action.type === 'INCREMENT') {
    //     return {
    //         ...state,
    //         counter : state.counter + 1
    //     };
    // }
    // return state;

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), val: state.counter })
            }
        case 'DELETE_RESULT':
            const newArr = state.results.filter(elem => elem.id !== action.resId);
            return {
                ...state,
                results: newArr
            }
        default:
            return state;
    }

}

export default reducer;