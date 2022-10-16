import * as React from "react";

export default function footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ Danny Muijs {year}</p>
    </footer>
  );
}
