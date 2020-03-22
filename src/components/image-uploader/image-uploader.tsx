import React, { useEffect, useState } from "react";
import { getRecipeImageUrlPromise, uploadRecipeImage } from "../../firebase/storage";

import "./styles.scss";

type Props = {
  imageWidth?: number;
  imageHeight?: number;
};

export const ImageUploader: React.FC<Props> = ({ imageWidth = 300, imageHeight = 200 }: Props) => {
  const [file, setFile] = useState<Blob>();
  const [fileName, setFileName] = useState<string>("");
  const [url, setImageUrl] = useState<string>();
  const [recipePlaceholder, setRecipePlaceholder] = useState<string>("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      const recipePlaceHolderUrl = await getRecipeImageUrlPromise("recipe-placeholder.png");
      setRecipePlaceholder(recipePlaceHolderUrl);
    };
    fetchImageUrl();
  }, []);

  const handleUpload = async () => {
    if (file) {
      const uploadURL = await uploadRecipeImage("testname.jpg", file);
      setImageUrl(uploadURL);
    }
  };

  return (
    <div className="image-uploader-container">
      <h2>Test Image Uploader</h2>
      <img src={url || recipePlaceholder} alt="Uploaded Images" height={imageHeight} width={imageWidth} />
      <div className="image-uploader-file-input">
        <label htmlFor="file-upload">
          Last opp bilde
          {fileName && <p>{fileName}</p>}
          <input
            className="image-uploader-file-input"
            id="file-upload"
            type="file"
            accept="image/*;capture=camera"
            onChange={event => {
              if (event.target?.files?.[0]) {
                setFile(event.target.files?.[0]);
                setFileName(event.target.files?.[0].name);
              }
            }}
          />
        </label>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default ImageUploader;
