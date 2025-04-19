import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;
  return (
    <div className="grid lg:grid-cols-2 items-start gap-8 lg:gap-12 mb-10">
      <div className="flex justify-center p-[24px] md:p-[48px] lg:p-[74px] bg-gray-200 rounded-2xl">
        <img
          className="md:w-[425px] h-[564px] w-full rounded-2xl"
          src={image}
          alt=""
        />
      </div>
      <div className="mb-4 lg:mb-6">
        <h1 className="playfair font-bold text-2xl md:text-[40px] mb-4">
          {bookName}
        </h1>
        <p className="work-sans text-xl font-medium mb-4 lg:mb-6 text-[#13131380]">
          By: {author}
        </p>
        <div className="border-t-2 w-full border-gray-200"></div>
        <p className="text-[#13131380] my-4 lg:my-6 work-sans text-xl font-medium">
          {category}
        </p>
        <p className="text-[#13131370] work-sans mb-4 lg:mb-6">
          <span className="text-[#131313] font-bold">Review:</span> {review}
        </p>
        <div className="flex space-x-4 items-center mb-4 lg:mb-6">
          <p className="work-sans font-bold">Tag</p>
          {tags.map((tag, index) => (
            <p
              key={index}
              className="cursor-pointer bg-green-100 text-green-600 text-sm px-4 py-2 rounded-xl "
            >
              # {tag}
            </p>
          ))}
        </div>
        <div className="border-t-2 w-full border-gray-200"></div>
        <div className="flex space-x-[60px] items-center mt-4 lg:mt-6 mb-5 lg:mb-[30px]">
          <div>
            <h4 className="work-sans text-[#13131370] mb-3">
              Number of Pages:
            </h4>
            <h4 className="work-sans text-[#13131370] mb-3">Publisher:</h4>
            <h4 className="work-sans text-[#13131370] mb-3">
              Year of Publishing:
            </h4>
            <h4 className="work-sans text-[#13131370] mb-3">Rating:</h4>
          </div>
          <div>
            <h4 className="work-sans font-semibold mb-3">{totalPages}</h4>
            <h4 className="work-sans font-semibold mb-3">{publisher}</h4>
            <h4 className="work-sans font-semibold mb-3">{yearOfPublishing}</h4>
            <h4 className="work-sans font-semibold mb-3">{rating}</h4>
          </div>
        </div>
        <div className="space-x-4 flex items-center">
        <button className="btn btn-outline btn-info work-sans text-lg font-semibold">Info</button>
          <button class="btn btn-success work-sans text-lg font-semibold">Success</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
