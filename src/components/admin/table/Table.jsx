import React, { useEffect, useState } from "react";

import "./Table.css";
const Table = ({ bodyData, headData, renderHead, renderBody }) => {

  return (
    <div className="generic-table">
      <table>
        {headData && renderHead ? (
          <thead>
            <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
          </thead>
        ) : null}
        {bodyData && renderBody ? (
          <tbody>
            {bodyData?.map((item, index) => renderBody(item, index))}
          </tbody>
        ) : null}
      </table>
    </div>
  );
};

export default Table;
