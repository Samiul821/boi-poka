import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { HiMiniArrowTurnRightDown } from "react-icons/hi2";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utility/AddToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
    const myWishList = data.filter(
      (book) => !convertedStoredBook.includes(book.bookId)
    );
    setWishList(myWishList);
  }, []);


    const handleSort = (type) => {
      setSort(type);
      if(type === 'pages'){
        const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sortedByPage);
      }
      if(type === 'rating'){
        const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
        setReadList(sortedByRating);
      }
    }

  return (
    <div>
      <div className="text-center rounded-2xl py-5 md:py-[34px] bg-gray-200 mb-5 md:mb-8">
        <h1 className="work-sans text-[28px] font-bold">Books</h1>
      </div>
      <div className="flex justify-center mb-[56px]">
        <details className="dropdown">
          <summary className="btn m-1 bg-green-500 text-white">Sort By <HiMiniArrowTurnRightDown />{sort?sort: ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={()=> handleSort('pages')}>pages</a>
            </li>
            <li>
              <a onClick={()=> handleSort('rating')}>rating</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="mb-5 md:mb-8">
        <Tabs className={"text-lg"}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {readList.map((b) => (
                <Book key={b.bookId} singleBook={b}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>WishList</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
