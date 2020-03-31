import React, { useState } from "react";
import { RECIPE_IMAGEREF_NAME } from "../../firebase/storage";

import "./styles.scss";
import ImageUploader from "../image-uploader/image-uploader";
import ItemContainer from "./item-container/item-container";
import Item from "../../models/item";
import { nanoid } from "nanoid";

type Props = {};

export const RecipeUploader: React.FC<Props> = ({}: Props) => {
  const [title, setTitle] = useState<string>("");
  const [items, updateItems] = useState<Item[]>([]);

  const registerRecipe = () => {
    alert(`${title}, ${items}`);
  };

  const setItem = (item: Item) => {
    // todo IMPROVE?
    updateItems(
      items.map(itemObj => {
        return itemObj.key === item.key ? item : itemObj;
      }),
    );
  };

  const createItem = () => {
    const newItem: Item = {
      key: nanoid(),
      name: "",
      quantity: 0,
    };
    updateItems([...items, newItem]);
  };

  return (
    <div className="recipe-uploader">
      <h1 className="recipe-uploader__title">Legg til ny oppskrift</h1>
      <form onSubmit={registerRecipe} className="add-wine-form">
        <div>
          <input
            className="recipe-uploader__input-title"
            value={title}
            placeholder="Tittel"
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <div className="recipe-uploader__add-item">
          <button type="button" onClick={createItem}>
            Legg til ingrediens
          </button>
        </div>
        <div className="recipe-uploader__item-containers">
          {items.map(item => (
            <ItemContainer key={item.key} item={item} setItem={setItem} />
          //   TODO DELETE IN HERE OR IN CONTAINER?
          ))}
        </div>
        <ImageUploader imageFirebaseRefName={RECIPE_IMAGEREF_NAME} />
        <div>
          <button type="submit">Registrer oppskrift</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeUploader;
