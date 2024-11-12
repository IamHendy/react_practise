import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';
import Progress from './Progress';

const FileUpload = () => {
  const [file, setFIle] = useState(' ');
  const [filename, setFilename] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadpercentage, setUploadpercentage] = useState(0);

  const onChange = e=> {
    setFIle(e.target.files[0]);
    setFilename(e.target.files[0].name);


  }
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: ProgressEvent => {
        setUploadpercentage(parseInt(Math.round((ProgressEvent.loaded * 100) /
      ProgressEvent.total)))
      }

      });
         //clear percentage  
         setTimeout(() => setUploadpercentage(0), 10000);

      const {fileName, filePath} = res.data;

      setUploadedFile({fileName, filePath}); 

      setMessage('File Uploaded')

    }catch(err) {
      if (err.response.status === 500){
        setMessage('There was a problem with the server');
      }else {
        setMessage(err.response.data.msg);
      }
    }
  }

  return (
    <>
    {message ? <Message msg={message}/>: null}
      <form onSubmit={onSubmit}>
      <div className="mb-4">
      <label htmlFor="formFile" className="form-label">Upload your file</label>
       <input className="form-control" type="file" id="formFile" onChange={onChange}/>
       </div>

       <Progress percentage={uploadpercentage}/>
       <input type='submit' value='Upload' className='btn btn-primary btn-block mt-4'/>
      </form>
      { uploadedFile ? <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <h3 className='text-center'>
            {uploadedFile.fileName}</h3>
            <img style={{ width: '100% '}} src={uploadedFile.filePath} alt=""/>
        </div>
      </div>: null}
    </>
  )
}

export default FileUpload
