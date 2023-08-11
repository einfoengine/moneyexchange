import React, { Suspense } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const BreadcrumbComponent = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const breadcrumbItems = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #e8e8e8" }}>
      <Breadcrumb separator={<RightOutlined />} style={{ margin: "0" }}>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
};

export default () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BreadcrumbComponent />
    </Suspense>
  );
};
