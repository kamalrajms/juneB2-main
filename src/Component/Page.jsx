import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemPerPage = 5;

  //generat an array
  // allitems=[{id:1},{},{},,,,,{20},{21}]
  const allItems = Array.from({ length: 20 }, (_, ind) => ({
    id: ind + 1,
  }));

  //calculation
  // array=[1,2,3,4,5,6,7,8,9,..20]

  const totalPage = Math.ceil(allItems.length / itemPerPage);
  const startInd = (currentPage - 1) * itemPerPage; //0   5   10
  const endInd = startInd + itemPerPage; //5    10    15
  const currentItems = allItems.slice(startInd, endInd);
  //   currentItems=[{id:1},{id:1},{id:1},{id:1},{id:1}]

  //   console.log(currentItems);

  // 21/5=4.2=5
  // 4.1==4==5
  // 4.5==5==5
  // 4.8==5==5
  const gotoPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage) {
      setSearchParams({ page: pageNum });
    }
  };

  const Next = () => {
    if (currentPage < totalPage) {
      gotoPage(currentPage + 1);
    }
  };
  const previous = () => {
    if (currentPage > 1) {
      gotoPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Product items</h1>
      <div>
        {currentItems.map((item) => (
          <h2 key={item.id}>{item.id}</h2>
        ))}
      </div>

      <div>
        <button onClick={previous}>previous</button>
        <div>
          {/* array=[1,2,3,4] */}
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNum) => (
            <nav key={pageNum}>{pageNum}</nav>
          ))}
        </div>
        <button onClick={Next}>next</button>
      </div>
    </div>
  );
}
