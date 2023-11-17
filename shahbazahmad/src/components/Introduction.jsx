import React from "react";

function Introduction() {
  return (
    <div className="flex flex-col lg:w-[45%] gap-3 my-4 text-md">
      <div>logo</div>
      <div>I'm <span className="text-white">Shahbaz</span>, a developer, designer, and problem solver.</div>
      <div>
        As a full-stack developer I've built and shipped 12+ products (with over 160K users), been
        2 times a Product Hunt Maker of The Year finalist, and much more ✌
      </div>
      <div>email</div>
    </div>
  );
}

export default Introduction;
