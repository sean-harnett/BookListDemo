import React from 'react';


const FakeBook = function (props) {
    return (
        <div className="bookList__book" onClick={props.addBook}>
            <div className="bookList__book__fakeBook">
                <span className="bookList__book__fakeBook__plus">+</span>
                <h5 className="bookList__book__fakeBook__title">Add new Book</h5>
            </div>
        </div>
    );
}
export default FakeBook;