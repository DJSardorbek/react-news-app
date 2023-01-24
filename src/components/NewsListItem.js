import React from 'react';

function NewsListItem(props) {
    const {id, name, description, category, removeNews} = props;
    let classNames = '';
    if(category === "Hot") {
        classNames = 'bg-danger bg-gradient';
    } else if(category === "Sport") {
        classNames = 'bg-primary bg-gradient';
    } else if(category === "World") {
        classNames = 'bg-success bg-gradient'
    } else {
        classNames = 'bg-info bg-gradient'
    }

    return (
        <li className={`card flex-row shadow-lg text-white my-2 ${classNames}`}>
            <div className='card-body'>
                <h3 className='card-title'>{name}</h3>
                <p className='card-text'>{description}</p>
                <span className='position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light'>
                <button onClick={() => removeNews(id)} className='btn-close aria-label="Close"'></button>
                </span>
            </div>
            <img src='https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                 alt="News img"
                 className='img-fluid w-25 d-inline'
                 style={{OObjectFit: 'cover'}}
            />
        </li>
    );
}

export default NewsListItem;