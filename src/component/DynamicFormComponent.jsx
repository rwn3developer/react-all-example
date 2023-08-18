import { useEffect } from "react";
import { useState } from "react";


const DynamicFormComponent = () => {

      let viewRecord = () => {
            let data = JSON.parse(localStorage.getItem('add'))
            if(data){
                  return data;
            }else{
                  return [];
            }
      }
      
      const [alldata,setAlldata] = useState(viewRecord);
      const [input,setInput] = useState([{
            name : '',
            phone : ''
      }])
      const add = () => {
            let data = {name : '',phone : ''};
            setInput([...input,data]);
      }   
      const handleChange = (index,event) => {
            let data = [...input];
            data[index][event.target.name] = event.target.value;
      }
      
      const handleSubmit = () => {
            let all = [...alldata,input];
            localStorage.setItem('add',JSON.stringify(all));
      }

      const removeData = (index) => {
            let a = [...input];
            a.splice(index,1);
            setInput(a);
      }

      

      return (
           <center>
            {
                  input.map((val,index)=>{
                        {
                            return  (index === 0) ?   (
                                    <form>
                                          <table border={1}>
                                                <tr key={index}>
                                                      <td>Name :- </td>
                                                      <td><input name="name" value={input.name} onChange={ (e) => handleChange(index,e) } type="text"/></td>
                                                      <td>Phone :- </td>
                                                      <td><input name="phone" value={input.phone} onChange={ (e) => handleChange(index,e) } type="text"/></td>
                                                      
                                                      <button type="button" onClick={ () => add() }>+</button><br></br> 
                                                </tr>
                                          </table>

                                    </form>

                                    
                              ) : (
                                    <form>
                                          <table border={1}>
                                                <tr key={index}>
                                                      <td>Name :- </td>
                                                      <td><input name="name" value={input.name} onChange={ (e) => handleChange(index,e) } type="text"/></td>
                                                      <td>Phone :- </td>
                                                      <td><input name="phone" value={input.phone} onChange={ (e) => handleChange(index,e) } type="text"/></td>
                                                      <td><input onClick={ () => removeData(index) } type="button" value="remove"/></td>
                                                </tr>
                                          </table>

                                    </form>
                              )
                        }
                             
                  })
            }
                  
           
            <button onClick={ () => handleSubmit() }>Click</button>
           </center>
      )
}

export default DynamicFormComponent;

