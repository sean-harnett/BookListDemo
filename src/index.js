import React from 'react';
import ReactDOM from 'react-dom';
import BookList  from './components/BookList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div> <BookList></BookList> </div> );
    }
}


ReactDOM.render(
    <App />,  document.getElementById('app')
  );
 
