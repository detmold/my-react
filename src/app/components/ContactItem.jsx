import * as React from "react";

export const ContactItem = ({ indexAttr, avatarUrl, name, phone }) => {
  return (
      <tr className="item">
          <td>{indexAttr+1}</td>
          <td><img src={avatarUrl} className="ui mini rounded image" alt="" /></td>
          <td><h4 className="header">{name}</h4></td>
          <td><div className="description">{phone}</div></td>
      </tr>
  );
};