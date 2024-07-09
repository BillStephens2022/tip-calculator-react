import { useState } from 'react';
import { BillInput } from './BillInput';
import './App.css';
import Message from './Message';

function App() {
  const [bill, setBill] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tip Calculator</h1>
      </header>
      <main>
        <BillInput bill={bill} setBill={setBill} />
        <Message bill={bill} />
      </main>
    </div>
  );
}

export default App;
