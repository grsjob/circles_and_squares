import React from "react";

const ToneFilter = () => {
  return (
    <ul>
      <li>
        <input type="radio" value="all" name="tone" />
        <label htmlFor="all">все</label>
      </li>
      <li>
        <input type="radio" value="dark" name="tone" />
        <label htmlFor="dark">темные</label>
      </li>
      <li>
        <input type="radio" value="light" name="tone" />
        <label htmlFor="light">светлые</label>
      </li>
    </ul>
  );
};

export default ToneFilter;
