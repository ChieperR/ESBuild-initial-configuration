import React, {useState} from 'react';
import './index.css'
import Logo from './vk.png'

const App = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <img src={Logo} alt=""/>
            <h1>value: ${count}</h1>
            <button onClick={() => setCount(count + 1)}>CLICK ME!</button>
        </div>
    );
};

export default App;