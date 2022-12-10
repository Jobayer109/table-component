import React, { useEffect, useState } from "react";
import { HiColorSwatch, HiDotsVertical } from "react-icons/hi";

const TableData = () => {
  const [allData, setAllData] = useState([]);

  const [order, setOrder] = useState("ASC");
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const sorting = (id) => {
    if (order === "ASC") {
      const sorted = [...allData].sort((a, b) =>
        a[id].toLowerCase() > b[id].toLowerCase() ? 1 : -1
      );
      setAllData(sorted);
      setOrder("DESC");
    }
    if (order === "DESC") {
      const sorted = [...allData].sort((a, b) =>
        a[id].toLowerCase() < b[id].toLowerCase() ? 1 : -1
      );
      setAllData(sorted);
      setOrder("ASC");
    }
  };
  const handleBgChange = (e) => {
    if (e.target) {
      <HiColorSwatch className="text-red-600" />;
    }
  };

  return (
    <table className="table-auto text-center mx-auto border my-24">
      <thead>
        <tr>
          <th className="border w-44">Id</th>

          <th className="border w-44 flex items-center justify-between">
            <span className="ml-12">First name</span>
            <span className="dropdown dropdown-down dropdown-end">
              <label tabIndex={0} className="rounded-box w-40 cursor-pointer">
                <HiDotsVertical className="" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 border  w-36"
              >
                <li>
                  <button disabled>Unsort</button>
                </li>
                <li>
                  <button onClick={() => sorting("first_name")}>Sort by ASC</button>
                </li>
                <li>
                  <button onClick={() => sorting("first_name")}>Sort by DESC</button>
                </li>
              </ul>
            </span>
          </th>
          <th className="border w-44">Last name</th>
          <th className="border w-24">Age</th>
          <th className="border w-72">Full name</th>
          <th className="border w-24">Action</th>
        </tr>
      </thead>
      <tbody className="border">
        {allData?.map((d, i) => (
          <tr key={i} onClick={handleBgChange}>
            <td>{i + 1}</td>
            <td>{d.first_name} </td>
            <td>{d.last_name}</td>
            <td>{d.age}</td>
            <td>{d.full_name}</td>
            <td>
              {}
              <button>
                <HiColorSwatch className="text-green-600" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
