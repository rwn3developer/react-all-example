import { useState } from "react";

const FormValidation = () => {

    const [input,setInput] = useState({
        name : '',
        phone : ''
    })
    const [formerrors,setFormerrors] = useState({});

    const handleClick = (e) => {
       const {name,value} = e.target;
       setInput({
            ...input,[name] : value
       })
    }

    const handleSubmit = () => {
        setFormerrors(validateForm(input));
    }

    const validateForm = (input) =>{
        const error = {};
        if(!input.name){
            error.name = "Name is required";
        }
        if(!input.phone){
            error.phone = "Phone is required";
        }
        return error;
    }

   
    

    return (
        <center>
            <table border={1}>
                <tr>
                    <td>Name :- </td>
                    <input type="text" value={input.name} name="name" onChange={handleClick}/>
                    <span style={{color:'red'}}>{formerrors.name}</span>
                </tr>
                <tr>
                    <td>Phone :- </td>
                    <input type="text" value={input.phone} name="phone" onChange={handleClick}/>
                    <span style={{color:'red'}}>{formerrors.phone}</span>
                </tr>
                <tr>
                    <td></td>
                    <input type="button" onClick={ () => handleSubmit() } value="submit"/>
                </tr>
            </table>
        </center>
    )
}

export default FormValidation;