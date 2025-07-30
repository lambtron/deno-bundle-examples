/** @jsxImportSource npm:preact */
import { renderToString } from "npm:preact-render-to-string";

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
      Hello from Deno 2.4 (with Preact)
    </div>
  );
}

const content = renderToString(Greet());
appElement.innerHTML = content;
