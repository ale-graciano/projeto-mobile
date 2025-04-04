import { useState } from "react"

export default function HelloWorld(){

    let [name, setName] = useState('')

    const handleHelloWorld = (evento) => {
        console.log(evento)
    }

    const handleClear = () => {
        console.log(arguments)
        setName('')
    }

    const handleChangeInput = (event) =>{
        setName (event.target.value)
        console.log('name: ',name)
    }

    const handleKeyInput = (event) => {
        console.log(event)
        if (event.key === 'Escape')
            setName('')
    }


    return (
        <>
            <h1>Hello World!</h1>
            <input type="text" onKeyUp={handleKeyInput} onChange={handleChangeInput} value = {name}/>
            <button onClick={handleHelloWorld}>Hello World</button>
            <button onClick={handleClear}>Limpar</button>
            {name && <p>Hello World, {name}!</p>}
        </>
    )

}