import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {

    const [date,setDate] = useState('');
    const [age,setAge] = useState('');

    const change = (e) => {     
        setDate(e.target.value);
    }

    const calculate = () => {
        
        var x = 2023 - parseInt(date.slice(0,4));
        setAge(x);
    }

  return (
    <div className="App">
        <h1 style={{textAlign:'center'}}>Age Calculator</h1><br/>
        <b><p style={{textAlign:'center'}}>Enter your date of birth</p></b>
        <center><input type='date' className='form-control' style={{maxWidth:300}} onChange={change}></input></center><br/>
        <center><button type='submit' className='btn btn-primary' onClick={calculate}>Calculate Age</button></center><br/>
        <center><p>You are {age} years old.</p></center>
    </div>
  );
}

export default App;
