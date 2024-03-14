import { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner"; 

function BookCard({ books, loadMore }) {
  const [currentImageIndexes, setCurrentImageIndexes] = useState([]);
  const [loading, setLoading] = useState(false); 


  useEffect(() => {
    setCurrentImageIndexes(Array(books.length).fill(0));
  }, [books]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) => {
        return prevIndexes.map((index, bookIndex) => {
          return (index + 1) % books[bookIndex].images.length;
        });
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [books]);

  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoading(true);
            loadMore();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(bottomRef.current);

    return () => {
      observer.disconnect();
    };
  }, [loadMore]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {books.map((book, index) => (
        <Card
          key={index}
          className="group cursor-pointer transform hover:scale-105 hover:shadow-lg transition-transform duration-300 p-0"
          style={{ width: "12rem", height: "12rem" }}
        >
          <div style={{ borderRadius: "12px", padding: "10px" }}>
            <Card.Img
              variant="top"
              src={book.images[currentImageIndexes[index]]}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "110px",
              }}
            />
          </div>
          <div className="p-0">
            <div className="px-3 text-base font-bold">{book.name}</div>
            <div className="px-3 text-xs font-semibold">
              Rs {book.price} | Quantity: {book.quantity}
            </div>
          </div>
        </Card>
      ))}
      {loading && ( 
        <div className="flex justify-center mt-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}

export default BookCard;

