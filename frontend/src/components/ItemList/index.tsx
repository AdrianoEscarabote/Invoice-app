import Image from "next/image";
import InputForm from "../InputForm";
import NewItemButton from "../NewItemButton";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  addItem,
  calculateTotalValue,
  cleanItems,
  handleChangeValue,
  removeItem,
  setItems,
} from "@/redux/items/reducer";
import { useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";
import { useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { ItemListProps } from "./ItemListProps";

const ItemList: React.FC<ItemListProps> = ({ renderEditItems }) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const items = useSelector((rootReducer: rootState) => rootReducer.itemsSlice);
  const selectedItems = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice.selectedInvoice.items
  );

  useEffect(() => {
    dispatch(cleanItems());
    if (renderEditItems) {
      dispatch(setItems({ items: selectedItems }));
    }
  }, []);

  const handleIncreaseItems = () => {
    dispatch(
      addItem({ name: "New Item", quantity: 0.0, price: 0.0, total: 0.0 })
    );
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
    dispatch(calculateTotalValue({ index }));
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
              name="name"
              value={item.name}
            />
            <InputForm
              name="quantity"
              labelText={`${width > 576 ? "" : "Qty."}`}
              alt="number"
              className={`${style.input_quantity} HeadingSVariant text-color2 text-center`}
              onChange={(e) => {
                const value = Number(e.target.value.replace(/[^\d.-]/g, ""));
                handleChangeInput("quantity", index, value, undefined);
              }}
              value={item.quantity}
            />
            <InputForm
              name="price"
              labelText={`${width > 576 ? "" : "Price"}`}
              alt="number"
              style={{ paddingLeft: "16px" }}
              className="HeadingSVariant text-color2"
              onChange={(e) => {
                const value = Number(e.target.value.replace(/[^\d.-]/g, ""));
                handleChangeInput("price", index, value, undefined);
              }}
              value={item.price}
            />
            <p
              className={`${
                width > 576 ? "w-[56px]" : "relative pt-4 w-full"
              } flex items-center text-color HeadingSVariant overflow-hidden`}
            >
              {width > 576 ? null : (
                <span className="absolute top-0 BodyVariant text-color3">
                  Total
                </span>
              )}

              {item.total.toLocaleString("en", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
            <button
              onClick={() => handleRemoveItem(index)}
              className="w-11 grid place-content-center"
              type="button"
              data-testid={`delete-button-${index}`}
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
