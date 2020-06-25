import React, {useState} from 'react';
import './App.css';
import {address} from '@waves/ts-lib-crypto'

function App() {

    const [inputData, setInputData] = useState('')
    const [cryptAddress, setCryptAddress] = useState<string>('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputData(event.target.value)
    }

    function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        setCryptAddress(inputData)
        setInputData('')
    }

    return (
        <section className="text-center">
            <form className="form-signin">
                {cryptAddress &&
                <>
                  <label htmlFor="data" className="">Address:</label>
                  <p id="data">{cryptAddress ? address(cryptAddress) : ''}</p>
                </>
                }
                <br/>
                <h1 className="h3 mb-3 font-weight-normal">Ведите данные</h1>
                <input className="form-control" type="text" id="input" placeholder="Введите данные"
                       onChange={handleChange} value={inputData} name="login"/>
                <br/>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={clickHandler}>submit
                </button>
                <br/>
                <a href="https://github.com/shadesoma/ts-lib-crypto-demo">github</a>
            </form>
        </section>
    );
}

export default App;
