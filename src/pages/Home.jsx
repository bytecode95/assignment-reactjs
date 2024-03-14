import Bookstore from "../components/bookstore/Bookstore";
import BookTable from "../components/booktable/BookTable";

function Home() {
  return (
    <div
      className="flex gap-2 justify-evenly"
    >
      <BookTable />
      <Bookstore />
    </div>
  );
}

export default Home;
