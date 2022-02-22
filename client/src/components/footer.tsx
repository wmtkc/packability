import Image from "next/image";
import ExtLink from "./rich-text/ext-link";

export default function Footer() {
  return (
    <>
      <footer>
        <span>
          <ExtLink href="https://github.com/ijjk/notion-blog">
            view source
          </ExtLink>
        </span>
      </footer>
    </>
  );
}
