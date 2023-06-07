import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "快速上手",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>通俗的介绍，详实的案例，手把手带你走进AI的世界.</>,
  },
  {
    title: "聚焦AI时代",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>人不会被AI淘汰，但肯定会被懂AI的人淘汰.</>,
  },
  {
    title: "海量的资源",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>每日网络海量资源供你参考，加速你在AI时代的掘金速度.每天进步一点点，就能远超大多数的人</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
