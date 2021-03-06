import React, { useEffect, useState } from "react";
import { getRecipeImageUrlPromise, uploadImage } from "../../firebase/storage";

import "./styles.scss";

type Props = {
  title?: string;
  imageFirebaseRefName: string;
  imageWidth?: number;
  imageHeight?: number;
};

export const ImageUploader: React.FC<Props> = ({
  title = "Last opp bilde",
  imageFirebaseRefName,
  imageWidth = 150,
  imageHeight = 200,
}: Props) => {
  const [file, setFile] = useState<Blob>();
  const [fileName, setFileName] = useState<string>("");
  const [url, setImageUrl] = useState<string>();
  const [imagePlaceHolder, setImagePlaceHolder] = useState<string>("");

  const fetchImageUrl = async () => {
    const recipePlaceHolderUrl = await getRecipeImageUrlPromise("recipe-placeholder.png");
    setImagePlaceHolder(recipePlaceHolderUrl);
  };

  useEffect(() => {
    fetchImageUrl();
  }, []);

  const handleUpload = async () => {
    if (file) {
      const uploadURL = await uploadImage(imageFirebaseRefName, "testname.jpg", file);
      setImageUrl(uploadURL);
    }
  };

  return (
    <div className="image-uploader-container">
      <h2>{title}</h2>
      <div className="image-uploader-file-input">
        <label htmlFor="file-upload">
          <img src={url || imagePlaceHolder} alt="Uploaded Images" height={imageHeight} width={imageWidth} />
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
        <button onClick={handleUpload}>Last opp</button>
      </div>
    </div>
  );
};

export default ImageUploader;
