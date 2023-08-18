import { useEffect, useState } from "react";
import { NavLink, json, useNavigate, useParams } from "react-router-dom";
const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [input,setInput] = useState({
        name : '',
        phone : ''
    })
    let data = localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [];
    const [alldata,setAlldata] = useState(data); 
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input,[name] : value
        })
    }

    const handleSubmit = () => {
        const {name,phone} = input;
        let ans = alldata.map((item)=>{
            if(item.id == id){
                return {
                    ...item,
                    name : name,
                    phone : phone
                }
            }
            return item;
        })
       localStorage.setItem('crud',JSON.stringify(ans));
       navigate('/view');

    }

    useEffect(()=>{
        let ans = alldata.filter((item)=>{
            return item.id == id
        });
        setInput(ans[0])
    },[id])

    return (
        <center>
            <table border={1}>
                <tr>
                    <td>Name : <input type="text" name="name" value={input.name} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>Phone : <input type="text" name="phone" value={input.phone} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>
                        <button onClick={ () => handleSubmit() }>Edit</button>     
                    </td>
                </tr>
            </table>
            <button>
                <NavLink to='/view'>View</NavLink>
            </button>
                
        </center>
    )
}

export default Edit;