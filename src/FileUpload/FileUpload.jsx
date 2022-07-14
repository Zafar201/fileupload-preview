import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './FileUpload.scss'
import axios from 'axios'
import { useState } from 'react'

const FileUpload = ({ files, setFiles, removeFile,cancel }) => {
    const [name,setName] = useState('')
    const uploadHandler = (event) => {
      
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])
        setName(file)
        console.log(file,'dts')

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
        
    }

    return (
        <>
            <div className="file-card body">
            <div className='close' onClick={cancel}>
                x
            </div>
                <div className="file-inputs">
                    <input type="file" multiple onChange={uploadHandler} />
                    <button>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i>
                        Upload
                    </button>
                  
                </div>
                <div className="file-inputs">
                    <input type="file" multiple  />
                    <button>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i>
                        Download Bin File
                    </button>
                  
                </div>

                <p className="main">Supported files</p>
                {name && name.name}
                <p className="info">PDF, JPG, PNG</p>

            </div>
        </>
    )
}

export default FileUpload
