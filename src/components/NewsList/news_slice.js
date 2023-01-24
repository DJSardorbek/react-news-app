import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../../hook/useHttp";

// const initialState = {
//     news : [],
//     newsIsLoading: 'sam'
// }

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({
    newsIsLoading: 'sam'
});

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async () => {
        const {request} = useHttp();
        return await request('http://localhost:3001/news');
    }
)
// newsCreated : (state, action) => {state.news.push(action.payload); state.newsIsLoading = 'sam'},
// newsDeleted : (state, action) => {state.news = state.news.filter(s => s.id !== action.payload); state.newsIsLoading = 'sam'}
const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        newsCreated : (state, action) => {
            newsAdapter.addOne(state, action.payload);
            state.newsIsLoading = 'sam'},
        newsDeleted : (state, action) => {
            newsAdapter.removeOne(state, action.payload);
            state.newsIsLoading = 'sam'}
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNews.pending, state => {state.newsIsLoading = 'sam'})
            .addCase(fetchNews.fulfilled, (state, action) => {
                newsAdapter.setAll(state, action.payload);
                state.newsIsLoading = 'sam'})
            .addCase(fetchNews.rejected, state => {state.newsIsLoading = 'error'})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = newsSlice;
export default reducer;
export const {selectAll} = newsAdapter.getSelectors(state => state.news);
export const {newsFetching, newsFetchingError, newsCreated, newsDeleted} = actions;