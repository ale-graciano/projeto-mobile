import { useState } from "react"

export default function HelloWorld(){

    let [name, setName] = useState('');
    let [message, setMessage] = useState('')
    
    const handleHelloWorld = (evento) => {
        setMessage(`Hello World, ${name}!`)
    }

    const handleClear = () => {
        console.log(arguments)
        setName('')
        setMessage('')
    }

    const handleChangeInput = (event) =>{
        setName (event.target.value)
        console.log('name: ',name)
    }

    const handleKeyInput = (event) => {
        if (event.key === 'Escape'){ handleClear()
        } else if (event.key === 'Enter'){handleHelloWorld()}
    }
    
    return (
        <>
            <h1>Hello World!</h1>
            <input type="text" onKeyUp={handleKeyInput} onChange={handleChangeInput} value = {name}/>
            <button onClick={handleHelloWorld}>Hello World</button>
            <button onClick={handleClear}>Limpar</button>
            {message && <p>{message}</p>}
        </>
    )

}