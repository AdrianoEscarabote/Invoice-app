export interface ItemListProps {
  items: ItemType[];
}

interface ItemType {
  name: string;
  qty: number;
  price: number;
}
