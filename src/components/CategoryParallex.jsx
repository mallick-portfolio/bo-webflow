import React from "react";

const CategoryParallex = () => {
  return (
    <div class="sectionContainer">
      {data.map((d) => (
        <div
          key={d.id}
          class="section sticky top-0  flex items-center justify-center"
        >
          <div className="relative border-b-4 border-white">
            <h4 className="absolute -top-4 -right-4 text-xl font-serif text-white">
              <span className="text-2xl">{d.id}</span>/{data.length}
            </h4>
            <h1 className="text-7xl text-white font-semibold">{d.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Fashion",
  },
  {
    id: 2,
    title: "Magazine",
  },
  {
    id: 3,
    title: "Black Apple Watch",
  },
  {
    id: 4,
    title: "Ivor Application",
  },
  {
    id: 5,
    title: "Flying to the Moon",
  },
  {
    id: 6,
    title: "Drama Webfont",
  },
];
export default CategoryParallex;
