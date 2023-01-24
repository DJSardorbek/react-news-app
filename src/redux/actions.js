// import {createAction} from "@reduxjs/toolkit";
// import {newsFetching, newsFetched} from "../components/NewsList/news_slice";

// export const fetchNews = (request) => (dispatch) => {
//     dispatch(newsFetching());
//     request('http://localhost:3001/news')
//         .then(data => {
//             dispatch(newsFetched(data))
//         })
//         .catch(() => dispatch("NEWS_FETCHING_ERROR"))
// }
// export const newsFetching = createAction('NEWS_FETCHING');
// export const newsFetched = createAction('NEWS_FETCHED');
// export const newsFetchingError = createAction('NEWS_FETCHING_ERROR');
// export const newsCreated = createAction('NEWS_CREATED');
// export const newsDeleted = createAction('NEWS_DELETED');

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request('http://localhost:3001/filters')
        .then(resp => dispatch(filtersFetched(resp)))
        .catch(() => dispatch(filtersFetchingError()));
}
export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}
export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}
export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}
export const activeFilterChanged = (name) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: name
    }
}