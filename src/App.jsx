import { useState } from 'react'
import './App.scss';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';
import DropDown from './DropDown';
import Navbar from './Navbar';

function App() {
  const [files, setFiles] = useState([])
  const [selected, setSelected] = useState("Choose One");
  const [active, setActive] = useState(false)

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  const show=()=>{
    setActive(!active)
  }
const cancel=()=>{
  setActive(false)
}
  return (
    <div className="App">
        <Navbar/>
   <div className="wrapper">
   <DropDown 
   selected={selected} 
   setSelected={setSelected}
    active={active}
    show={show}
   />

      {/* <div className="title">Upload file</div> */}
      {active && (
  <div className="bodya">
  <FileUpload  cancel={cancel}  files={files} setFiles={setFiles}
    removeFile={removeFile} />
  <FileList files={files} removeFile={removeFile} />
  </div>
      )}
    
      <div className="button">
      <button >push update</button>
    </div>
    </div>
    </div>
  );
}

export default App;
