import { storage } from "./firebase-setup";

const storageRef = storage.ref();

export const RECIPE_IMAGEREF_NAME = "recipe-images";
const recipeImageRef = storageRef.child(RECIPE_IMAGEREF_NAME);

export const uploadImage = (imageRefName: string, filename: string, image: Blob): Promise<string> => {
  const imageRef = storageRef.child(imageRefName);
  const uploadRef = imageRef.child(filename);
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
