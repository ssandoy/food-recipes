import React, { useState } from "react";
import { uploadRecipeImage } from "../../firebase/storage";

export const ImageUploader = () => {
  const [file, setFile] = useState<Blob>();
  const [url, setImageUrl] = useState<string>();

  const handleUpload = async () => {
    if (file) {
      const uploadURL = await uploadRecipeImage("testname.jpg", file);
      setImageUrl(uploadURL);
    }
  };

  return (
    <div>
      <h2>Test Image Uploader</h2>
      <div></div>
      <div>
        <div>
          <span>File</span>
          <input
            type="file"
            onChange={event => {
              if (event.target?.files?.[0]) {
                setFile(event.target.files[0]);
              }
            }}
          />
        </div>
        <div>
          <input />
        </div>
      </div>
      <button onClick={handleUpload}>Upload</button>
      <img src={url || "https://via.placeholder.com/400x300"} alt="Uploaded Images" height="300" width="400" />
    </div>
  );
};

export default ImageUploader;
