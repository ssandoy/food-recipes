import React, { useEffect, useState } from "react";
import Item from "../../../models/item";
import "./styles.scss";

type Props = {
  item: Item;
  setItem: (item: Item) => void;
};

export const ItemContainer: React.FC<Props> = ({ item, setItem }: Props) => {
  const [name, setItemName] = useState<string>(item.name);
  const [quantity, setItemQuantity] = useState<number>(item.quantity);
  const [key] = useState<string>(item.key);

  useEffect(() => {
    setItem({
      key,
      name,
      quantity,
    });
  }, [key, quantity, name]);

  return (
    <div className="item-container">
      <input onChange={e => setItemName(e.target.value)} />
      <div className="item-container__quantity">
        <div className="item-container__buttons">
          <button
            type="button"
            onClick={() => setItemQuantity(quantity + 1)}
            className="item-container__button item-container__buttons--increment"
          >
            +
          </button>
          {quantity}
          <button
            type="button"
            onClick={() => setItemQuantity(quantity > 0 ? quantity - 1 : 0)}
            className="item-container__button item-container__buttons--decrement"
          >
            -
          </button>
        </div>
      </div>
      <div className="item-container__delete">
        <button type="button"></button>
      </div>
    </div>
  );
};

export default ItemContainer;
