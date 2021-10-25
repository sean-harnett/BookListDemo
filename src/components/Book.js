import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="bookList__book" onClick={() => { this.props.bookInfoPopup(this.props.title, this.props.cover, this.props.author, this.props.description) }}>
                <img className="bookList__book__cover"
                    src={this.props.cover} alt="">
                </img>

                <span className="bookList__book__title">{this.props.title}</span>

            </div>
        );
    }
}

export default Book;
