"use client";

import Header from "@/components/Header";
import Invoice from "@/components/Invoice";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <Provider store={store}>
        <Invoice />
      </Provider>
    </div>
  );
}
