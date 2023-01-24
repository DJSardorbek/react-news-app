import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {activeFilterChanged, fetchFilters} from "../redux/actions";
import {useHttp} from "../hook/useHttp";
import Spinner from "./Spinner";
import Error from "./Error";
import classNames from "classnames";
import button from "bootstrap/js/src/button";

function NewsFilter() {
    const {filters, filtersIsLoading, activeFilter} = useSelector(state => state.filter);
    const {request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters(request));
    }, [])
    if(filtersIsLoading === 'loading') {
        return (
            <Spinner/>
        )
    } else if(filtersIsLoading === 'error') {
        return (
            <Error/>
        )
    }

    const renderNewsFilter = (arr) => {
        if(arr.length === 0) {
            return <h4 className='text-center'>Filters doesn't exists</h4>
        } else {
            return (
                arr.map(({name, label, classname}) => {
                    const btnClasses = classNames("btn", classname, {
                        "active": name === activeFilter
                    });
                    return <button
                        key={name}
                        id={name}
                        className={btnClasses}
                        onClick={() => dispatch(activeFilterChanged(name))}
                    >
                        {label}
                    </button>
                })
            )
        }
    }

    const element = renderNewsFilter(filters);

    return (
        <div className='card mt-3'>
            <div className='card-body'>
                <p className='card-text'>Filter by category</p>
                <div className='btn-group'>
                    {element}
                </div>
            </div>

        </div>
    );
}

export default NewsFilter;