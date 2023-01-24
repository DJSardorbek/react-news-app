import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "../../hook/useHttp";
// import {fetchNews, newsDeleted} from "../../redux/actions";
import Spinner from "../Spinner";
import Error from "../Error";
import NewsListItem from "../NewsListItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {createSelector} from "reselect";
import {newsDeleted, fetchNews, selectAll} from "./news_slice";

function NewsList() {
    const {newsIsLoading} = useSelector(state => state.news);
    const filteredNewsSelected = createSelector(
        (state) => state.filter.activeFilter,
        selectAll,
        (activeFilter, news) => {
            if(activeFilter === 'All') {
                return news;
            } else {
                return news.filter(s => s.category === activeFilter);
            }
        }
    )
    const filteredNews = useSelector(filteredNewsSelected);
    const dispatch = useDispatch();
    const {request} = useHttp();
    const removeNews = (newsId) => {
        dispatch("NEWS_FETCHING");
        request('http://localhost:3001/news/' + newsId, 'DELETE')
            .then(() => {
                dispatch(newsDeleted(newsId))
            })
            .catch(() => dispatch("NEWS_FETCHING_ERROR"));
    }

    useEffect(() => {
        dispatch(fetchNews());
    }, []);
    if(newsIsLoading === 'loading') {
        return (
            <Spinner/>
        )
    } else if(newsIsLoading === 'error') {
        return (
            <Error/>
        )
    }
    const renderNewsList = (arr) => {
        if(arr.length === 0) {
            return (
                <CSSTransition timeout={500} classNames="item">
                    <h4 className='text-center mt-5'>News doesn't exists</h4>
                </CSSTransition>
            )
        }
        return arr.map(({...item}) => {
            return (
                <CSSTransition key={item.id}
                               timeout={500}
                               classNames="item">
                    <NewsListItem {...item} removeNews={removeNews}/>
                </CSSTransition>
            )
        })
    }
    const element = renderNewsList(filteredNews);
    return (
            <TransitionGroup component="ul">
                {element}
            </TransitionGroup>
    );
}

export default NewsList;