import React from 'react';

const BookCard = ({ book }) => {
    const { id, title, author, price, description } = book;
    return (
        <div className="card bg-blue-950 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;