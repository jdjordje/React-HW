import ItemCard from "../Components/ItemCard/ItemCard";
import { Item } from "../models/item.model";
import "./ItemPage.css";

function ItemPage() {
  const itemList: Item[] = [
    {
      id: "0c1da581-4fec-49f5-99ff-bdbcdae96239",
      description: "Phone Charger",
      quantity: 1,
      isPacked: false,
    },
    {
      id: "c3927901-126d-4dec-a804-6962bdfa0367",
      description: "Socks",
      quantity: 5,
      isPacked: false,
    },
    {
      id: "6c72c822-3af0-406c-b7db-7cb4a404bcd8",
      description: "Deodorant",
      quantity: 1,
      isPacked: false,
    },
    {
      id: "5f8c4d79-8315-4983-859f-002452595530",
      description: "Laptop",
      quantity: 1,
      isPacked: false,
    },
    {
      id: "01fbe9cd-4b25-4bad-a0ed-b2ea8b753114",
      description: "Paste",
      quantity: 1,
      isPacked: false,
    },
    {
      id: "b18e4649-0b7b-4fa3-93ca-139e9e397932",
      description: "Pants",
      quantity: 3,
      isPacked: false,
    },
    {
      id: "3281e838-6464-4ba7-a66f-1b2e82f8e497",
      description: "Rain Coat",
      quantity: 1,
      isPacked: false,
    },
  ];

  const totalItems = itemList.length;
  const packedItems = itemList.filter((item) => item.isPacked === true).length;
  const unpackedItems = totalItems - packedItems;

  return (
    <>
      <div className="item-list">
        {itemList.map((item, i) => (
          <ItemCard item={item} key={i} />
        ))}
      </div>
      <div className="item-status">
        <div className="number">{totalItems}</div>
        <div className="number" style={{ color: "cornflowerblue" }}>
          {packedItems}
        </div>
        <div className="number">{unpackedItems} </div>
        <div className="text">Total Items</div>
        <div className="text">Packed items</div>
        <div className="text">Unpacked Items</div>
      </div>
    </>
  );
}

export default ItemPage;
