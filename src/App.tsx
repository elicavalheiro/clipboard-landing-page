import React from 'react';
import './assets/style/style.scss';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      Clipboard Landing Page
      <Button variation="primary">Download for iOS</Button>
      <Button variation="secondary">Download for Mac</Button>
    </div>
  );
}

export default App;
