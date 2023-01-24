//                                        dispatch
export const stringMiddleware = (store) => (next) => (action) => {
    if(typeof action === 'string') {
        return next({type: action});
    }
    return next(action);
}

// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if(typeof action === "string") {
//             return oldDispatch({type: action})
//         }
//         return oldDispatch(action)
//     }
//     return store;
// }