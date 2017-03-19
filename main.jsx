import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   render() {
      return (
         <div>
           Cool! It's working
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
