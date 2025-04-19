import React, { Suspense} from "react";
import Book from "../Book/Book";

const Books = ({data}) => {
//   const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //     fetch("booksData.json")
  //     .then(res => res.json())
  //     .then(data => {
  //         setAllBooks(data);
  //     })
  // }, []);

//   const bookPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-center playfair text-3xl md:text-[40px] font-bold p-5 md:p-9">
        Books
      </h1>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className="loading loading-spinner text-info"></span>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-9">
           {
               data.map((singleBook) => (
                 <Book key={singleBook.bookId} singleBook={singleBook}></Book>
            ))
           }
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
