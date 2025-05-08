import React from "react";

type Book = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
};

type Props = {
  src: Book[];
};

export default function ForList({ src }: Props) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
              target="_blank"
              rel="noopner noreferrer"
            >
              {elem.title}({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
