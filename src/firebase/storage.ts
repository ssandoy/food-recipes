import { storage } from "./firebase-setup";

const storageRef = storage.ref();

const recipeImageRef = storageRef.child("recipe-images");

export const uploadRecipeImage = (filename: string, image: Blob): Promise<string> => {
  const uploadRef = recipeImageRef.child(filename);
  const imageUrl = uploadRef.put(image).then(
    success => {
      return success.ref.getDownloadURL();
    },
    error => {
      // TODO ADD ERRORHANDLER...
      console.log(error);
    },
  );
  return imageUrl;
};

export const getRecipeImageUrlPromise = (filename: string): Promise<string> => {
  return recipeImageRef.child(filename).getDownloadURL();
};
