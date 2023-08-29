import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const DashboardItem = (props) => {
  const Component = dynamic(() =>
    import(
      `./Menus/${props.item.charAt(0).toUpperCase() + props.item.slice(1)}`
    )
  );

  return (
    <>
      <Component />
    </>
  );
};

export default DashboardItem;
