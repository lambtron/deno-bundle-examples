import React from "npm:react";
import { createRoot } from "npm:react-dom/client";

const appElement = document.getElementById("app");

function Greet() {
  return <div>Hello from Deno 2.4</div>;
}

const root = createRoot(appElement);
root.render(Greet());
