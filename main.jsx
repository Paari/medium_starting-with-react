import React from 'react';
import ReactDOM from 'react-dom';

import FirstComponent from './Components/FirstComponent.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
           Cool! It's working
           <FirstComponent />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
