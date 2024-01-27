import Image from "next/image";
import InputForm from "../InputForm";
import { ItemListProps, ItemType } from "./ItemListProps";
import NewItemButton from "../NewItemButton";
import style from "./style.module.css";
import { useEffect, useState } from "react";

const ItemList = ({ items }: ItemListProps) => {
  const [itemsState, setItemsState] = useState<ItemType[]>(items);

  useEffect(() => {
    if (items) {
      setItemsState(items);
    }
  }, [items]);

  const handleDeleteItem = (index: number) => {
    setItemsState((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const handleIncreaseItems = () => {
    setItemsState((prevState) => [
      ...prevState,
      {
        name: "",
        price: 0,
        qty: 0,
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    setItemsState((prevState) => {
      const newState = [...prevState];
      newState[index][field] = value;
      return newState;
    });
  };

  return (
    <div className="w-full max-w-[504px] mt-8">
      <p className="HeadingM text-[#777F98] mb-3">Item List</p>
      <div className={`BodyVariant w-full ${style.grid} gap-4 text-color`}>
        <p>Item Name</p>

        <p>Qty.</p>

        <p>Price</p>

        <p>Total</p>
      </div>

      {itemsState.map((item, index) => (
        <div className={`flex gap-4 mb-4 ${style.grid}`} key={index}>
          <InputForm
            labelText=""
            value={item.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="HeadingSVariant text-color2"
          />
          <InputForm
            type="number"
            labelText=""
            alt="number"
            style={{
              paddingLeft: "16px",
            }}
            onChange={(e) => handleChange(index, "qty", e.target.value)}
            className="HeadingSVariant text-color2"
            value={item.qty}
          />
          <InputForm
            type="number"
            labelText=""
            style={{ paddingLeft: "20px" }}
            alt="number"
            onChange={(e) => handleChange(index, "price", e.target.value)}
            value={item.price}
            className="HeadingSVariant text-color2"
          />
          <p className="w-[56px] flex items-center text-color HeadingSVariant">
            {item.price * item.qty}
          </p>
          <button
            onClick={() => handleDeleteItem(index)}
            className="w-11 grid place-content-center"
            type="button"
          >
            <Image
              src={"/assets/icon-delete.svg"}
              alt="icon delete"
              width={14}
              height={16}
            />
          </button>
        </div>
      ))}

      <NewItemButton
        type="button"
        onClick={handleIncreaseItems}
        aria-label="teste"
        className="mt-4"
        disabled={false}
      />
    </div>
  );
};

export default ItemList;
