"use client";

import { useState } from "react";
import DeletePrompt from "./components/DeletePrompt";
import Header from "./components/Header";

export default function Home() {
  const [promptOpen, setPromptOpen] = useState(false);
  return (
    <div className="flex">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>estou no main</h1>

        <button onClick={() => setPromptOpen(!promptOpen)}>
          clique para abrir
        </button>

        {promptOpen ? (
          <DeletePrompt
            closePrompt={() => setPromptOpen(!promptOpen)}
            invoice="#324343"
          />
        ) : null}
      </main>
    </div>
  );
}
