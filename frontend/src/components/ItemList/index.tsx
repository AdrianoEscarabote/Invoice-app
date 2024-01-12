import Image from "next/image";
import InputForm from "../InputForm";
import { ItemListProps, ItemType } from "./ItemListProps";
import NewItemButton from "../NewItemButton";
import HeaderLoginSignup from "../HeaderLoginSignup";
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
    setItemsState((prevState) => prevState.splice(index, 1));
  };

  const handleIncreaseItems = () => {
    setItemsState((prevState) => {
      return [
        ...prevState,
        {
          name: "",
          price: 0,
          qty: 0,
        },
      ];
    });
  };

  return (
    <>
      <HeaderLoginSignup />
      <section className="ml-40 w-full max-w-[504px]">
        <p className="HeadingM text-[#777F98]">Item List</p>
        <div className={`BodyVariant w-full ${style.grid} gap-4 text-color`}>
          <p>Item Name</p>

          <p>Qty.</p>

          <p>Price</p>

          <p>Total</p>
        </div>

        {itemsState.length > 1 &&
          itemsState.map((item, index) => (
            <div className={`flex gap-4 mb-4 ${style.grid}`} key={index}>
              <InputForm
                labelText=""
                value={item.name}
                className="HeadingSVariant text-color2"
              />
              <InputForm
                type="number"
                labelText=""
                alt="number"
                style={{
                  paddingLeft: "16px",
                }}
                className="HeadingSVariant text-color2"
                value={item.qty}
              />

              <InputForm
                type="number"
                labelText=""
                style={{ paddingLeft: "20px" }}
                alt="number"
                value={item.price}
                className="HeadingSVariant text-color2"
              />

              <p className="w-[56px] flex items-center text-color HeadingSVariant">
                {item.price * item.qty}
              </p>

              <button
                onClick={() => handleDeleteItem(index)}
                className="w-11 grid place-content-center"
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
          onClick={handleIncreaseItems}
          aria-label="teste"
          disabled={false}
        />
      </section>
    </>
  );
};

export default ItemList;
