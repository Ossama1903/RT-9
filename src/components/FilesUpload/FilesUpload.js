import React from "react";

const FilesUpload = ({ allowedExtensions, files, setFiles }) => {
  const isValidExtension = (fileExtension) => {
    let returnValue = false;
    allowedExtensions.forEach((extension) => {
      if (extension === fileExtension) returnValue = true;
    });
    return returnValue;
  };

  const addFile = (file) => {
    setFiles([...files, file]);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileExtension = file?.name.split(".").slice(-1)[0];

    isValidExtension(fileExtension)
      ? addFile(file)
      : console.log("Invalid extension");
  };

  return (
    <>
      <form /*onSubmit={handleSubmit}*/ style={{ backgroundColor: "red" }}>
        <input
          type="file"
          onChange={handleFileChange}
          onDrop={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
      <div
        style={{
          backgroundColor: "blue",
          maxHeight: "20px",
          overflowY: "scroll",
        }}
      >
        {files.length > 0 &&
          files.map((file, index) => <p key={index}>{file.name}</p>)}
      </div>
    </>
  );
};

export default FilesUpload;
