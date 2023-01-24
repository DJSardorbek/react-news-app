import {createReducer} from "@reduxjs/toolkit";
import {newsFetching, newsFetched, newsFetchingError, newsCreated, newsDeleted} from "../actions";

const initialState = {
    news: [],
    newsIsLoading: "sam"
}

// ************* second way available only JS
export const news = createReducer(initialState, {
    [newsFetching] : state => {state.newsIsLoading = 'sam'},
    [newsFetched] : (state, action) => {state.news = action.payload; state.newsIsLoading = 'sam'},
    [newsFetchingError] : state => {state.newsIsLoading = 'error'},
    [newsCreated] : (state, action) => {state.news.push(action.payload); state.newsIsLoading = 'sam'},
    [newsDeleted] : (state, action) => {state.news = state.news.filter(s => s.id !== action.payload); state.newsIsLoading = 'sam'}
}, [], state => state);
// *************** first way available both JS and TS
// export const news = createReducer(initialState, builder => {
//     builder
//         .addCase(newsFetching, (state) => {
//             state.newsIsLoading = 'loading'
//         })
//         .addCase(newsFetched, (state, action) => {
//             state.news = action.payload;
//             state.newsIsLoading = 'sam'
//         })
//         .addCase(newsFetchingError, (state) => {
//             state.newsIsLoading = 'error'
//         })
//         .addCase(newsCreated, (state, action) => {
//             state.news.push(action.payload);
//             state.newsIsLoading = 'sam';
//         })
//         .addCase(newsDeleted, (state, action) => {
//             state.news = state.news.filter(s => s.id !== action.payload);
//             state.newsIsLoading = 'sam';
//         })
//         .addDefaultCase(() => {})
// })

// ************** Old style **********************
// export const news = (state = initialState, action) => {
//     switch (action.type) {
//         case 'NEWS_FETCHING':
//             return {
//                 ...state,
//                 newsIsLoading: "loading"
//             };
//         case 'NEWS_FETCHED':
//             return {
//                 ...state,
//                 news: action.payload,
//                 newsIsLoading: "sam"
//             };
//         case 'NEWS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 newsIsLoading: "error"
//             };
//         case 'NEWS_CREATED':
//             return {
//                 ...state,
//                 news: [...state.news, action.payload],
//                 newsIsLoading: "sam"
//             };
//         case 'NEWS_DELETED':
//             return {
//                 ...state,
//                 news: state.news.filter(item => item.id !== action.payload),
//                 newsIsLoading: "sam"
//             }
//         default:
//             return state;
//     }
// }