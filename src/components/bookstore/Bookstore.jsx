import { useState } from "react";
import books from "../../data/items.json";
import BookCard from "../bookcard/BookCard";

function Bookstore() {
  const [startAt, setStartAt] = useState(0);
  const [displayedBooks, setDisplayedBooks] = useState(
    books.slice(startAt, startAt + 8)
  );

  function loadMore() {
    const nextStartAt = startAt + 8;
    const nextBooks = books.slice(nextStartAt, nextStartAt + 8);
    setDisplayedBooks((prevBooks) => [...prevBooks, ...nextBooks]);
    setStartAt(nextStartAt);
  }

  return (
    <div
    className="bookstore-container custom-scroll overflow-x-hidden scroll-smooth"
    >
      <BookCard books={displayedBooks} loadMore={loadMore} />
    </div>
  );
}

export default Bookstore;
