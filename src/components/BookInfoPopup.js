import React from 'react';

import Popup from './popup';

import __ from '../utilities';


class BookInfoPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            didRead: '',
            btnContent: 'Read',
        }
    }

    _spliceDescription(description, maxSentenceCount) {

       if(!description || description.length === 0){return;}
        let count = 0;
        let ix = 0;
        const totalLength = description.length;        

        while (count <= maxSentenceCount && ix < totalLength) {
            if (description.charAt(ix) === '.' && /^[A-Z]*$/.test(description.charAt((ix + 2)))) {                
                count++;
            }
            ix++;
        }
        return description.slice(0, ix);
    }    

    render() {
        return (

            <Popup popupTitle='Book Details' show={this.props.show} close={this.props.close}>
                <div className="bookInfoPopup_bookContainer">
                    <img className="bookInfoPopup_bookContainer__img"
                        src={this.props.cover}
                        alt="">
                    </img>
                    <div className="bookInfoPopup_bookContainer__aboutBook">
                        <h5 className="bookInfoPopup_bookContainer__aboutBook__name">{this.props.title}</h5>
                        <p className="bookInfoPopup_bookContainer__aboutBook__description">{this._spliceDescription(this.props.description, 1)}</p>
                        <button className={"bookInfoPopup_bookContainer__aboutBook__button " + this.state.didRead}
                            onClick={() => { this.props.markRead(this.props.title); this.setState({ didRead: 'toReadClicked', btnContent: 'Marked' }) }}>
                            {this.state.btnContent}
                        </button>
                    </div>
                </div>
            </Popup>
        );
    }
}



export default BookInfoPopup;