import React, {useState} from "react";
 

function Store () {

    const submit = (e) =>{
        console.log("button Trigerred")

        const data = {name:name, surename:surename}
        console.log(data)
    }

    const [name, setName] = useState()
    const [surename, setSurename] = useState()
    return(
       <div>
        <input value={name} placeholder="Name" onChange={(e) => {setName(e.target.value) }}></input> <br></br>
        <input  value={surename} placeholder="Sure Name" onChange={(e) => {setSurename(e.target.value) }}></input><br></br>
        <button onClick={(e) => {submit(e)}}>Submit</button>
       </div>
    );
}

export default Store;