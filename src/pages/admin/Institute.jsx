import React from "react";
import { Breadcrumb, Dropdown } from "flowbite-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import {
  AboutUs,
  AntiCorruption,
  Graduets,
  History,
  InteractiveServices,
  Mission,
  OurLiability,
  Structure,
} from "../index";

export const Institute = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="flex justify-between items-center">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
        >
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
        </Breadcrumb>
        <Dropdown label="Dropdown" className="bg-red-300">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item><Link to={"/a"}>aaa</Link></Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};
