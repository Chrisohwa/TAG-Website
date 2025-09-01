import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import { ROUTES } from "./routes";

const RouteWrapper = () => {
  const routes = useRoutes(ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();

  return (
    <PageLayout>
      <RouteWrapper key={location.pathname} />
    </PageLayout>
  );
};

export default Pages;
