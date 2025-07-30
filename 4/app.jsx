import React from "npm:react";
import { createRoot } from "npm:react-dom/client";
import DenoLogo from "./deno.svg" with { type: "text" };

const appElement = document.getElementById("app");

function DenoIcon() {
  return (
    <div
      style={{ width: "100px", height: "100px" }}
      dangerouslySetInnerHTML={{ __html: `${DenoLogo}` }}
    />
  );
}

function Greet() {
  return (
    <div>
      <DenoIcon />
      Hello from Deno 2.4
    </div>
  );
}

const root = createRoot(appElement);
root.render(Greet());
