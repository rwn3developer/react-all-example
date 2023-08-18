import { useEffect, useState } from "react";
import { Link ,NavLink } from "react-router-dom";


const View = () => {


    let data = localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [];
    const [alldata,setAlldata] = useState(data); 
    const [serch,serchData] = useState("");
    const [sort,sortBy] = useState("");
    const [toggle, setToggle] = useState(true)

    const deleteData = (id) => {
        const d = alldata.filter((item)=>{
            return item.id !== id;
        })
       setAlldata(d);
       localStorage.setItem('crud',JSON.stringify(d));
       alert("Record successfully delete");
    }

    const handleSort = (e) => {
        let sor = e.target.value;
        let sortingData;
        if (sor === "asc") {
            sortingData =  [...alldata].sort((a, b) => {
                return a.name.localeCompare(b.name)
            });
        }
        else if(sor === "des"){
            sortingData =  [...alldata].sort((a, b) => {
                return b.name.localeCompare(a.name)
            });
        }
        setAlldata(sortingData);
    }

    const handle = () => {
        setToggle(!toggle);
        let sortingData;
        if(toggle){
            sortingData =  [...alldata].sort((a, b) => {
                return a.name.localeCompare(b.name)
            });
        }else{
            sortingData =  [...alldata].sort((a, b) => {
                return b.name.localeCompare(a.name)
            });
        }
        setAlldata(sortingData);
    }

    
   useEffect(()=>{
        let ser = alldata.filter((item)=>{
            return item.name.toLowerCase().includes(serch.toLowerCase());
        })
        setAlldata(ser)
   },[serch])
   

    return (
        <div style={{width:'50%'}}>

            <input type="text" name="search" onChange={ (e) => serchData(e.target.value) }/>

            <table style={{padding:'50px'}} className="table table-striped" border={1}>
                <thead>
                    <tr>
                        <td onClick={ () => handle() }>Id</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action</td>
                        <td>
                            <select value="" onChange={handleSort}>
                                <option>---Sort By---</option>
                                <option value="asc">Accending</option>
                                <option value="des">Decending</option>

                            </select>
                        </td>
                    </tr>
                </thead>
                <tbody>
                {
                        alldata.map((item)=>{
                            const {id,name,phone} = item;
                                return (
                                        
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{phone}</td>
                                            <td>
                                                <button onClick={ () => deleteData(id) }>Delete</button> ||
                                                <button><Link to={`/edit/${id}`}>Edit</Link></button>
                                            </td>
                                        </tr>
                                )
                        })
                    }
                </tbody>
                    
                    

            </table>
            <button>
                <NavLink to='/'>Add</NavLink>
            </button>
        </div>
    )
}

export default View;