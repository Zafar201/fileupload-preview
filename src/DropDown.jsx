import React, { useState } from 'react'
import Navbar from './Navbar';
import {Container} from 'react-bootstrap'

function DropDown({selected, setSelected,active,show}) {
  const [isActive, setIsActive] = useState(false);
  const options = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"];
  const option = ["M1", "M2", "M3", "M4", "M5", "M6"];
  const [selectedFile, setSelectedFile] = useState();
  return (
    <div className="ota-mng">
  
    <div className="title">OTA Management page</div>
    <Container className="box">
      <div className="dropdown">
        <div className="heading">Device</div>
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {!selected ? 'Choose one' : selected}
          <span className="fa fa-caret-down"></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            <div className="options">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="options" style={{ marginTop: "20px" }}>
              {option.map((opt) => (
                <div
                  onClick={(e) => {
                    setSelected(opt);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        )}
          <div className="dropdown">
        <div className="heading">Version</div>
        <div className="dropdown-btn">
          <input type="text" value={selected} name="" id="" />
        </div>
      </div>
      </div>
      {/* <div className="dropdown">
        <div className="heading">Version</div>
        <div className="dropdown-btn">
          <input type="text" name="" id="" />
        </div>
      </div> */}
      <div className="dropdown">
        <div className="heading">File Upload</div>
        <div className="upload-btn">
           <button onClick={show}>Upload button</button>
        </div>
        <div className="upload-btn">
           <button>Download Bin File</button>
        </div>
      </div>
      <div className="dropdown">
        {/* <div className="heading" style={{ alignSelf: "start" }}>
          file upload
        </div> */}
       
      </div>

    </Container>

   
  </div>
  )
}

export default DropDown