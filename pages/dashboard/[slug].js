import React from "react";
import { DashboardItem, DashboardLayout } from "../../core/modules/dashboard";
import { Router, useRouter } from "next/router";
import BasicLayout from "../../core/modules/common/BasicLayout";

const Menus = () => {
  const routes = ["home", "datapasien", "konfirmasi"];
  const router = useRouter().query.slug;
  if (router == undefined) <></>;

  return routes.includes(router) ? (
    <BasicLayout title={"Scanocular Dashboard | " + router.toLocaleUpperCase()}>
      <DashboardLayout>
        <DashboardItem item={router} />
      </DashboardLayout>
    </BasicLayout>
  ) : (
    <>
      <h3>404</h3>
    </>
  );
};

export default Menus;
