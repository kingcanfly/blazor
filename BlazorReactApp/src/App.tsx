import React, {useState} from 'react';
import caniuseImage from './caniuse.png';
import './App.css';

function App() {

    const [productName, setProductName] = useState();
    const [productDescription, setProductDescription] = useState();

    const changeProductName = (event: React.FormEvent<HTMLInputElement>) => {
        setProductName(event.currentTarget.value);
    };

    const changeDescription = (event: React.FormEvent<HTMLInputElement>) => {
        setProductDescription(event.currentTarget.value);
    };

    const validateProduct = () => {
        // @ts-ignore
        if(window.Interop){
            // @ts-ignore
            const wasmResult = window.Interop.validateProduct({ name: productName, description: productDescription});
            if (wasmResult.isCompleted && wasmResult.isCompletedSuccessfully && !wasmResult.result.isValid){
                const e = wasmResult.result.errors[0];
                alert(e.errorMessage);
            }
        }
    };

    return (
        <div className="app">
            <div className="column">
                <div className="row">
                    <img src={caniuseImage} alt="Can I use?"/>
                </div>
                <div className="row">
                    <label htmlFor="productName">Product name</label>
                    <input id="productName" type="text" onChange={changeProductName}/>
                </div>
                <div className="row">
                    <label htmlFor="description">Product description</label>
                    <input id="description" type="text" onChange={changeDescription}/>
                </div>
                <div className="row">
                    <input type="button" value="Validate" onClick={validateProduct}/>
                </div>
            </div>
        </div>
    );
}

export default App;
