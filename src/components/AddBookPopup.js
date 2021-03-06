import React from 'react';
import Popup from './popup';

import __ from '../utilities';


class AddBookPopup extends React.Component {
    constructor(props) {

        super(props);

        this._titleChange = this._titleChange.bind(this);
        this._authorChange = this._authorChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._IsbnChange = this._IsbnChange.bind(this);

        this.isbnRegex =  new RegExp('^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$');
            

        this.state = {
            'title': '',
            'author': '',
            'isbn': '',
            'bookAdded': false,
            'popupContent': '',
        }
    }

    _handleSubmit(e) {
        e.preventDefault();                            
            this.props.addBook(this.state.isbn).then((didAdd) => {
                if (didAdd) {
                    this.setState({ title: '', author: '', bookAdded: true, popupContent: 'Book Added' });
                } else {
                    this.setState({ title: '', author: '', bookAdded: true, popupContent: 'Book Not Found' });
                }
            });        
     
    }

    _titleChange(e) {

        this.setState({ 'title': e.target.value });



    }

    _authorChange(e) {

        this.setState({ 'author': e.target.value });



    }
    _IsbnChange(e) {

        this.setState({ 'isbn': e.target.value });

    }


    _displayForm() {
        if (!this.state.bookAdded) {
            return (<form action="#" className="addBookContainer__form" onSubmit={this._handleSubmit}>
                {/* <input type="text" placeholder="Title" onChange={this._titleChange} /> */}
                {/* <input type="text" placeholder="Author" onChange={this._authorChange} /> */}
                <input type="text" placeholder="ISBN" onChange={this._IsbnChange} required />
                <input type="submit" value="Add Book" />
            </form>)
        } else {
            return (<h5 className="addBookContainer__didAddTitle">{this.state.popupContent}</h5>);
        }
    }

    render() {
        return (<Popup popupTitle='Add Book' show={this.props.show} close={this.props.close}>
            <div className="addBookContainer">
                {this._displayForm()}
            </div>

        </Popup>);
    }
}

export default AddBookPopup;
