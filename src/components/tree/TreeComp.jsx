import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";
import i18next, { t } from "i18next";

import "./style.css";

import apiClientWithFetch from "../../services/apiClientWithFetch";

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

  const [lidership, setLidership] = useState({loading: true});
  const [faculty, setFaculty] = useState({});

  useEffect(() => {
    getData("rektorat/all", setLidership);
    getData("Fak_data/all", setFaculty);
  }, []);

  const a = lidership.data?.map((i) => ({
    name: i[`job_${i18next.language}`],
    link: `/${i18next.language}/institute/structute/rectorate/${i.job_uz}/${i._id}`,
    children: i.bolimlar.map((bolim) => ({
      name: bolim[`title_${i18next.language}`],
      link: `/${i18next.language}/institute/structute/department_and_center/${bolim.title_uz}/${bolim._id}`,
      __rd3t:{
        collapsed: false
      }
    })),
    __rd3t:{
      collapsed: false
    }
  }));

  if (!lidership.loading) a.splice(0, 1);

  const b = [
    {
      name: t("TreeComp.faculty"),
      link: "",
      children: faculty.data?.map((i) => ({
        name: i[`title_${i18next.language}`],
        link: `/${i18next.language}/institute/structute/faculty/${i[`title_${i18next.language}`]}/${
          i._id
        }`,
        __rd3t:{
          collapsed: false
        }
      })),
      __rd3t:{
        collapsed: false
      }
    },
  ];

  const c = a?.concat(b);

  const treeData = {
    name: t("TreeComp.rektor"),
    link: `/${i18next.language}/institute/structute/rectorate/Rektor/64ba275c4a1f2f8964b8c439`,
    children: c,
  };

  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => {
    console.log(nodeDatum)
    return <foreignObject {...foreignObjectProps}>
    <div className="px-3">
      <div className="min-h-10 border border-blue-900 bg-white hover:bg-blue-900  hover:text-white py-2 px-4">
        <h3 className="text-xs font-bold">{nodeDatum.name}</h3>
        {nodeDatum.children ? (
          <div className="flex justify-between items-center mt-6 px-2">
            <button className="" onClick={toggleNode}>
              {nodeDatum.__rd3t.collapsed ? t("TreeComp.collapse") : t("TreeComp.expand")}
            </button>
            <Link to={nodeDatum.link}>{t("TreeComp.more")}</Link>
          </div>
        ) : nodeDatum.link ? (
          <Link to={nodeDatum.link} className="pt-10">
            {t("TreeComp.more")}
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  </foreignObject>
  };

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
