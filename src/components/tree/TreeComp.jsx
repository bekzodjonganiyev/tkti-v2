import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";

import "./style.css";

import apiClientWithFetch from "../../services/apiClientWithFetch";
import i18next from "i18next";

const getData = async (url, setData) => {
  const res = await apiClientWithFetch.get(url);
  if (res.status === 200) {
    setData({ loading: false, error: "", data: res.data });
  } else {
    setData({
      loading: false,
      error: res?.status ? res.status : res,
      data: [],
    });
  }
};

export default function App() {
  const nodeSize = { x: 200, y: 300 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -100 };

  const [lidership, setLidership] = useState({});
  const [faculty, setFaculty] = useState({});

  useEffect(() => {
    getData("rektorat/all", setLidership);
    getData("Fak_data/all", setFaculty);
  }, []);

  const a = lidership.data?.map((i) => ({
    name: i[`job_${i18next.language}`],
    link: `/institute/structute/rectorate/${i.job_uz}/${i._id}`,
    children: i.bolimlar.map((bolim) => ({
      name: bolim[`title_${i18next.language}`],
      link: `/institute/structute/department_and_center/${bolim.title_uz}/${bolim._id}`,
    })),
  }));

  const b = [
    {
      name: "Fakultetlar",
      link: "",
      children: faculty.data?.map((i) => ({
        name: i[`title_${i18next.language}`],
        link: `/institute/structute/faculty/${i[`title_${i18next.language}`]}/${i._id}`,
      })),
    },
  ];

  const c = a?.concat(b);

  const treeData = {
    name: "Rektorat",
    children: c,
  };
  
  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => (
    <foreignObject {...foreignObjectProps}>
      <div className="px-3">
        <div className="min-h-10 border border-blue-900 bg-white hover:bg-blue-900  hover:text-white py-2 px-4">
          <h3 className="text-xs font-bold">{nodeDatum.name}</h3>
          {nodeDatum.children ? (
            <div className="flex justify-between items-center mt-6 px-2">
              <button className="" onClick={toggleNode}>
                {nodeDatum.__rd3t.collapsed ? "Ko'proq" : "Kamroq"}
              </button>
              <Link to={nodeDatum.link}>Batafsil</Link>
            </div>
          ) : nodeDatum.link ? (
            <Link to={nodeDatum.link} className="pt-10">
              Batafsil
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </foreignObject>
  );

  return (
    <div className="text-center">
      <div className="w-full h-screen">
        <Tree
          centeringTransitionDuration={500}
          hasInteractiveNodes
          data={treeData}
          nodeSize={nodeSize}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          pathFunc="step"
          orientation="vertical"
        />
      </div>
    </div>
  );
}
