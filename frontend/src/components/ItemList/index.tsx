import Image from "next/image";
import InputForm from "../InputForm";
import NewItemButton from "../NewItemButton";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { addItem, handleChangeValue, removeItem } from "@/redux/items/reducer";
import { useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";
import { useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize";

const ItemList = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const items = useSelector((rootReducer: rootState) => rootReducer.itemsSlice);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(addItem({ name: "", quantity: 0, price: 0, total: 0 }));
    }
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleIncreaseItems = () => {
    dispatch(addItem({ name: "", quantity: 0, price: 0, total: 0 }));
  };

  const handleRemoveItem = (index: number) => {
    dispatch(removeItem({ index }));
  };

  const handleChangeInput = (
    field: string,
    index: number,
    valueNumber: number | undefined,
    valueString: string | undefined
  ) => {
    dispatch(
      handleChangeValue({
        field,
        index,
        valueNumber,
        valueString,
      })
    );
  };

  return (
    <div className="w-full max-w-[504px] mt-8">
      <p className="HeadingM text-[#777F98] mb-3">Item List</p>
      {width > 576 ? (
        <div className={`BodyVariant w-full ${style.grid} gap-4 text-color`}>
          <p>Item Name</p>
          <p>Qty.</p>
          <p>Price</p>
          <p>Total</p>
        </div>
      ) : null}

      {items &&
        items.map((item, index) => (
          <div className={`flex gap-4 mb-4 ${style.grid}`} key={index}>
            <InputForm
              labelText={`${width > 576 ? "" : "Item Name"}`}
              className="HeadingSVariant text-color2"
              style={{ maxWidth: "unset" }}
              onChange={(e) =>
                handleChangeInput("name", index, undefined, e.target.value)
              }
              value={item.name}
            />
            <InputForm
              labelText={`${width > 576 ? "" : "Price"}`}
              alt="number"
              style={{ paddingLeft: "16px" }}
              className="HeadingSVariant text-color2"
              onChange={(e) =>
                handleChangeInput(
                  "price",
                  index,
                  Number(e.target.value),
                  undefined
                )
              }
              value={item.price}
            />
            <InputForm
              labelText={`${width > 576 ? "" : "Qty."}`}
              style={{ paddingLeft: "20px" }}
              alt="number"
              className="HeadingSVariant text-color2"
              onChange={(e) =>
                handleChangeInput(
                  "qty",
                  index,
                  Number(e.target.value),
                  undefined
                )
              }
              value={item.quantity}
            />
            <p
              className={`${
                width > 576 ? "" : "relative pt-4"
              } w-[56px] flex items-center text-color HeadingSVariant`}
            >
              {width > 576 ? null : (
                <span className="absolute top-0 BodyVariant text-color3">
                  Total
                </span>
              )}

              {item.price * item.quantity}
            </p>
            <button
              onClick={() => handleRemoveItem(index)}
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
        onClick={handleIncreaseItems}
        type="button"
        aria-label="Submit"
        className="mt-4"
        disabled={false}
      />
    </div>
  );
};

export default ItemList;
