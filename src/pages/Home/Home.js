import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/Auth/Auth";
import FilesUpload from "../../components/FilesUpload/FilesUpload";

function Home() {
  const { logout } = useAuth();

  const [files, setFiles] = useState([]);

  const allowedExtensions = ["xls", "xlsx", "csv"];

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my app!</p>
      <button onClick={logout}>logout</button>
      <FilesUpload
        files={files}
        allowedExtensions={allowedExtensions}
        setFiles={setFiles}
      />
    </div>
  );
}

export default Home;
