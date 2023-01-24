const initialState = {
    filters: [],
    activeFilter: 'All',
    filtersIsLoading: 'sam'
}
export const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersIsLoading: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersIsLoading: 'sam'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersIsLoading: 'error'
            }
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload
            }
        default:
            return state;
    }
}