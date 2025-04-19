import React from "react";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);

  const { bookName, author, image, rating, tags, publisher, yearOfPublishing } =
    singleBook;

  return (
    <div className="rounded-2xl border border-gray-200 p-6 bg-base-100">
      <figure className="bg-gray-100 py-8 rounded-2xl mb-6">
        <img className="h-[200px] w-[150px] mx-auto object-cover" alt="Book" src={image} />
      </figure>
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {singleBook.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-600 text-sm px-4 py-2 rounded-xl "
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold playfair card-title mb-4">
          {bookName}
          <div className="badge badge-dash badge-success">{yearOfPublishing}</div>
        </h2>
        <p className="work-sans font-medium mb-5">By: {author}</p>
        <hr />
        <div className="flex justify-between items-center mt-5">
          <div>
            <p className="work-sans font-medium">Fiction</p>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={
                  index < Math.floor(rating)
                    ? "text-gray-700"
                    : "text-white"
                }
              >
                ★
              </span>
            ))}
            <span className="work-sans text-gray-600 ml-1">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
