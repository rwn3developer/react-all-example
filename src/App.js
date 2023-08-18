import 'bootstrap/dist/css/bootstrap.css';
import DynamicFormComponent from "./component/DynamicFormComponent";
import FormValidation from "./component/FormValidation";
// import A from "./component/higherordercomponent/A";
// import B from "./component/higherordercomponent/B";
import SimleCrudLocalStorage from "./SimleCrudLocalStorage/SimleCrudLocalStorage";
import Add from './SimpleCrudLocalStorageRouter/Add';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import View from './SimpleCrudLocalStorageRouter/View';
import Edit from './SimpleCrudLocalStorageRouter/Edit';






const App = () => {
      return (
           <center>
                  {/* <DynamicFormComponent/> */}
                  {/* <FormValidation/> */}
                  {/* <A/>
                  <B/> */}
                  {/* <SimleCrudLocalStorage/> */}
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<Add />}/>
                              <Route path='view' element={<View/>}/>
                              <Route path='edit/:id' element={<Edit/>}/>
                        </Routes>
                  </BrowserRouter>
           </center>
      )
}

export default App;

