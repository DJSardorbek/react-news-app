import React, {useState} from 'react';
import {useHttp} from "../hook/useHttp";
import {useDispatch} from "react-redux";
// import {newsCreated, newsFetching, newsFetchingError} from "../redux/actions";
import {newsFetching, newsFetchingError, newsCreated, fetchNews} from "./NewsList/news_slice";

function NewsAddForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const {request} = useHttp();
    const dispatch = useDispatch();
    const submitNews = (e) => {
        e.preventDefault();
        const newNews = {
            id: new Date().getTime(),
            name,
            description,
            category
        };
        dispatch(fetchNews.pending);
        request('http://localhost:3001/news', 'POST', JSON.stringify(newNews))
            .then(resp => {
                console.log(resp);
                dispatch(newsCreated(resp));
                setName('');
                setDescription('');
                setCategory('');
            })
            .catch(() => newsFetchingError());
    }
    return (
        <form
            onSubmit={submitNews}
            className='border shadow-lg rounded p-3'>
            <div className='mb-3'>
                <label htmlFor="name" className='form-label fs-4'>Name for new News</label>
                <input
                    type="text"
                    required name='name'
                    id='name'
                    className='form-control'
                    placeholder='What is name of news?'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="text" className='form-label fs-4'>Description</label>
                <textarea type="text" required name='text'
                          id='text' className='form-control'
                          placeholder='What is your news about?'
                          style={{height: '120px'}}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="category" className='form-label'>Choose category of news</label>
                <select
                    name="category"
                    id="category" required
                    className='form-select'
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value=''>What's the news category?</option>
                    <option value="Hot">Hot news</option>
                    <option value="Sport">Sport news</option>
                    <option value="World">World news</option>
                </select>
            </div>
            <button className='btn btn-dark w-100'>Create news</button>
        </form>
    );
}

export default NewsAddForm;