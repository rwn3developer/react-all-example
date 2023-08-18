import { useEffect, useState } from "react";

const SimleCrudLocalStorage = () => {

    const [input,setInput] = useState({
        name : '',
        phone : ''
    })
    
    const [all,setAll] = useState([]);
    const [editid,setEditId] = useState("");
    const handleClick = (e) => {
        const {name,value} = e.target;
       setInput({
            ...input,[name] : value
       })
    }

    const handleSubmit = () => {
        let obj = {
            id : Math.floor(Math.random() * 10000),
            name : input.name,
            phone : input.phone
        }
        if(editid){
            let updatedata = all.map((item)=>{
                if(item.id === editid){
                   return {
                        ...item,
                        name : input.name,
                        phone : input.phone
                   }
                }
                return item;
               
            })
            setAll(updatedata);
            localStorage.setItem('crud',JSON.stringify(updatedata));
            setEditId("");
        }else{
            let alldata = [...all,obj];
            setAll(alldata)
            localStorage.setItem('crud',JSON.stringify(alldata));
        }
        setInput({
            name : '',
            phone : ''
        })
            
    }

    const deleteData = (id) => {
        let deletedata = all.filter((item)=>{
            return item.id !== id;
        })
        setAll(deletedata);
        localStorage.setItem('crud',JSON.stringify(deletedata));
    }

    const editData = (id) => {
        let singledata = all.filter((item)=>{
            return item.id == id;
        })
        setInput(singledata[0]);
        setEditId(id)
    }

    
    useEffect(()=>{
        const allr = () => {
            let data = localStorage.getItem('crud');
            if(data){
                return JSON.parse(localStorage.getItem('crud'));
            }else{
                return [];
            }
        }
        setAll(allr())
    },[])

    return (
        <center>
            <table border={1}>
                <tr>
                    <td>Name : <input type="text" name="name" value={input.name} onChange={handleClick} /></td>
                </tr>
                <tr>
                    <td>Phone : <input type="text" name="phone" value={input.phone} onChange={handleClick} /></td>
                </tr>
                <tr>
                    <td>
                        {
                            editid ? 
                                (<button onClick={ () => handleSubmit() }>Edit</button>)
                                : (<button onClick={ () => handleSubmit() }>Submit</button>)
                        }
                            
                    </td>
                </tr>
            </table><br></br>

            <div style={{width:'50%'}}>

                        
                <table style={{padding:'50px'}} className="table table-striped" border={1}>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>

                    {
                        all.map((val)=>{
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button onClick={ () => deleteData(val.id) }>Delete</button> ||
                                        <button onClick={ () => editData(val.id) }>Edit</button>
                                    </td>
                                </tr>
                            )   
                        })
                    }
                        

                </table>
            </div>

        </center>
    )
}
export default SimleCrudLocalStorage;