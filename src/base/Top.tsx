import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const file = "https://raw.githubusercontent.com/tomtkg/React-Tutorial/main/README.md"

export default function () {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return <ReactMarkdown children={markdown} />;
}
