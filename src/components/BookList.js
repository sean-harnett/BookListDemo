import React from 'react';

import Book from './Book';
import BookInfoPopup from './BookInfoPopup';

import AddBookPopup from './AddBookPopup';
import FakeBook from './FakeBook';

import __ from '../utilities';

class BookList extends React.Component {
    constructor(props) {
        super(props);

        this._hideBookInfo = this._hideBookInfo.bind(this);
        this._hideBookAdd = this._hideBookAdd.bind(this);

        this._markRead = this._markRead.bind(this);

        this.testList = ['9780132350884', '9781617292422', '9781449319793'];


        this._showBookInfo = this._showBookInfo.bind(this);
        this._showAddBook = this._showAddBook.bind(this);

        this._addBook = this._addBook.bind(this);

        this.willCloseInfo = false;
        this.willCloseAdd = false;

        this.state = {
            bookList: [],
            currentTitle: '',
            currentCover: '',
            currentAuthor: '',
            currentDescription: '',
            cover: 'https://images.pexels.com/photos/5095897/pexels-photo-5095897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            displayBookInfo: false,
            displayBookAdd: false,
            removeInfoPopup: true,
            removeAddPopup: true,

        };

        this._createList();
    }

    _showBookInfo(title, cover, author, description) {

        this.setState({ currentAuthor: author, currentDescription: description, currentTitle: title, currentCover: cover, displayBookInfo: true, removeInfoPopup: false });
        clearTimeout(this.willCloseInfo);
        this.willCloseInfo = null;

    }
    _hideBookInfo() {
        if (!this.willCloseInfo) {
            this.setState({ displayBookInfo: false })
            this.willCloseInfo = setTimeout(() => {
                this.setState({ currentTitle: '', currentCover: '', removeInfoPopup: true });
            }, 1800);
        }

    }

    _showAddBook() {

        this.setState({ displayBookAdd: true, removeAddPopup: false });
        clearTimeout(this.willCloseAdd);
        this.willCloseAdd = null;

    }

    _hideBookAdd() {
        if (!this.willCloseAdd) {
            this.setState({ displayBookAdd: false })
            this.willCloseAdd = setTimeout(() => {
                this.setState({ currentTitle: '', currentCover: '', removeAddPopup: true });
            }, 1800);
        }
    }

    _createList() {
        this.testList.forEach(isbn => {
            this._addBook(isbn);
        });
    }
    _addBook(isbn) {

        return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, { 'mode': 'cors' })
            .then(response => response.json())
            .then((data) => {
                if (data.totalItems != 0) {
                    const volume = data['items'][0]['volumeInfo'];
                    const newBook = {};
                    if (volume.hasOwnProperty('description')) {
                        newBook.description = volume.description;
                    }
                    if (volume.hasOwnProperty('imageLinks')) {
                        if (volume.imageLinks.hasOwnProperty('smallThumbnail')) {
                            newBook.thumbnailLink = volume.imageLinks.smallThumbnail;
                        }

                    } else {
                        newBook.thumbnailLink = this.state.cover;
                    }
                    newBook.title = volume.title;
                    newBook.authors = volume.authors;

                    const book = <Book title={newBook.title} key={Math.random()} description={newBook.description} author={newBook.authors} cover={newBook.thumbnailLink} bookInfoPopup={this._showBookInfo} > </Book>;
                    this.setState({ 'bookList': this.state.bookList.concat(book) });
                    return true;
                } else {
                    return false;
                }

            });

    }

    _markRead(title) {

        const filteredBookList = this.state.bookList.filter(book => book.props.title != title);

        this.setState({ bookList: filteredBookList });

    }
    _displayAddBookPopup() {
        // didAdd={this.state.bookFound}

        if (!this.state.removeAddPopup) {

            return (
                <AddBookPopup show={this.state.displayBookAdd} close={this._hideBookAdd} addBook={this._addBook}></AddBookPopup>
            );
        }
        return;

    }

    _displayInfoPopup() {

        if (!this.state.removeInfoPopup) {

            return (

                <BookInfoPopup title={this.state.currentTitle} description={this.state.currentDescription} cover={this.state.currentCover} show={this.state.displayBookInfo} markRead={this._markRead} close={this._hideBookInfo}></BookInfoPopup>
            );
        }
        return;
    }

    render() {
        return (

            <main className="bookListContainer">
                <h4 className="bookListContainer__title">Reading List</h4>
                <div className="bookList">
                    {this.state.bookList.concat(<FakeBook key={Math.random()} addBook={this._showAddBook} />)}
                </div>
                {this._displayAddBookPopup()}
                {this._displayInfoPopup()}

            </main>

        );
    }
}

export default BookList;