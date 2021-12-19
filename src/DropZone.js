import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import store from './store';
import {updateData} from './updateStore';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '80px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#ff0000'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function Dropzone() {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'application/json',
    onDropAccepted: file => {
      const reader = new FileReader();
      reader.readAsText(file[0]);
      reader.onload = function (e) {
        const result = e.target.result;
        const data = JSON.parse(result);
        store.dispatch(updateData(data));
      };
    },
    onDropRejected: () => alert("Only file in JSON format is accepted.")
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag & drop your YouTube History .json file</p>
      </div>
    </div>
  );
}