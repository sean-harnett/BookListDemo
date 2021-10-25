import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_hide: this.props.show ? 'popupContainer zoom_in' : 'popupContainer zoom_out',
            fade_out_wrapper: 'modal fade_in',
        }
    }

    _close() {
        this.setState({ show_hide: 'popupContainer zoom_out' });
        setTimeout(() => {
            this.setState({ fade_out_wrapper: 'modal fade_out' });
        }, 1000);
    }

    render() {
        return (
            <div className={this.state.fade_out_wrapper}>

                <main className={this.state.show_hide}>
                    <div className="mainContainer">
                        <div className="bookInfoPopup">
                            <div className="bookInfoPopup__header">
                                <h3 className="bookInfoPopup_title">{this.props.popupTitle}</h3>
                                <span className="bookInfoPopup_close" onClick={() => { this.props.close(); this._close() }}>&times; </span>
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Popup;