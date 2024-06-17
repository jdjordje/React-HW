import { useState } from "react";
import { Item } from "../../models/item.model";
import Button from "../Button/Button";
import "./ItemCard.css";

interface ItemCardProp {
  item: Item;
}

function ItemCard({ item }: ItemCardProp) {
  const [packItem, packedItem] = useState(false);

  const packed = () => {
    if (packItem === true) return;

    if (packItem === false) {
      packedItem(true);
    }
  };

  return (
    <>
      <div className="ItemCard" style={packItem ? { backgroundColor: "cornflowerblue" } : { backgroundColor: "orange" }}>
        <div className="item-description">{item.description}</div>
        <div className="item-quantity">{item.quantity}</div>
        <div className="btn">
          <Button onClickBtn={packed} text={packItem ? "✅" : "❎"} />
        </div>
      </div>
    </>
  );
}

export default ItemCard;
