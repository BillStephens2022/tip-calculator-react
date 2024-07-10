import { useState } from 'react';
import { BillInput } from './components/BillInput';
import './App.css';
import Message from './components/Message';
import SelectInput from './components/SelectInput';

function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState("0");
  const [friendTip, setFriendTip] = useState("0");
  const avgTip = (Number(myTip) + Number(friendTip)) / 2 / 100;
  
  const tipOptions = [
    { value: "0", text: "Completely Dissatisfied (0%)" },
    { value: "10", text: "Needs Improvement(10%)" },
    { value: "15", text: "It was OK (15%)" },
    { value: "20", text: "Absolutely Amazing! (20%)" }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <h1>Tip Calculator</h1>
      </header>
      <main>
        <BillInput bill={bill} setBill={setBill} />
        <SelectInput tipOptions={tipOptions} tip={myTip} setTip={setMyTip}>How did you like the service?</SelectInput>
        <SelectInput tipOptions={tipOptions} tip={friendTip} setTip={setFriendTip}>How did your friend like the service?</SelectInput>
        <Message bill={bill} avgTip={avgTip} />       
      </main>
    </div>
  );
}

export default App;
