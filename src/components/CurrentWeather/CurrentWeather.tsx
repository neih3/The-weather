import React from "react";
import "./style.css";
import { Title } from "../Title/Title";

const CurrentWeather = () => {
  return (
    <div className="  flex flex-col w-full">
      <Title text="Current Weather"></Title>
      <div className="flex">
        <div className="w-1/3 text-center  ">
          <h3 className="font-semibold sm:text-[20px] text-[12px]">
            ANDORRA LA VELLA, AD
          </h3>
          <h4 className="sm:text-[14px] text-[10px] color-text">
            Today 15 Apr
          </h4>
        </div>
        <div className="w-1/3 text-center">
          <h3 className="font-semibold text-[20px]">14 °C</h3>
          <h4 className="color-text text-[14px]">light rain</h4>
        </div>
        <div className="w-1/3 text-center flex justify-center">
          <img
            className="sm:w-[60px] w-[40px]"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJNQTFRFR3BM////////////////////////////////////////////MInI////////////MInIMInIMInIMInI////MInIL4nIMInIMInIMInIMInIMInIL4nIMInIL4nIMInIL4nIL4nIMInIL4nIL4nIMInIL4nIL4nIL4nIL4nIL4nIL4nIL4nIL4nI////MInIL4nIujqO7gAAAC50Uk5TACDfzzAQYL/vQIBw76+fUCAQ35+PYO+/QIAwzxBQn49g33BAIK+/gHAwz69Qj0XvwtUAAASrSURBVHja7Vlrl6IwDOVdCiI+GEXHnYfOjM5jxf//61ZbwIBAK21hzxzup+pBE5rc5KbVtAEDBgwYMOA3AHuBeSQwkBfaHVu3xu6xCNPp0AeMjlUY692Y16vNd+aCd2yA66s2bxdf30QIGYVvArWpYF2tuWPHyr71A+CTpdJ+nvuGU9oZP3fNtdTbL5sn8F3VHuT2o+o421kgDIl5YOHQCzEm7E/tu07t037qAZJEeB+BdDd5NthJH5LBRn1czfTmAKceuMIVyY5qSk3I+GHqwVj09c0a+x7zp+nG6ZL4Xu55HHtniG+Bntt3gzMHHC9PRh6GY/qoABVt86be2A55r4jr99Rdp70DUWW8nQDx2U+3IGifAOnu49b/QHew9c8Rf7gbCyIW2wCRWqZzMraJx2LV3BBJAldo/0AUkUgEDAm60RVJoEiCAy1pEHC1HHUO2K4oBwUdSFW/1pcDWRsUdCBo25HDrA0KOmC2a0f2VYQJOtCum4RXFSJYBnCuX/w7VAHUoI6YA1GLgdkGIhBhKSmQiSrvPvuGL6yorZKQRBxxQE1Dn0gEOIfF7NBhLGWos/AFTmRye2BJHKgKwsTLB2adJwAKjlfyAcu02bQNNBXIZuqIWbldRYc7WXvBDAnZWkPyeoAY86yr7nTLZ2zBWMo8za6MgbJRjt3mmsfVowwRxjEn1ApNKQqAp9NG/TngN/KgAwfw/+2AIXqiIuoAkjCNMuA0FgJPxjTII1G8xjJhqK8DdZtsH1XHADPyPOA9g4xX22m2Xi+TefZhc3jZsAVPwEgRtiCKkyQZrel6Ojt/WNL15+J0WuyYrQCzQsQMwmNyNbq6rBO6/jid8cWa+A0mS1jadZ0AB2ZXB94u9k8L1sgRcqhSt7Enz4nNOVn/IesZWT8RB77r9JDJc4mSn04H9fJ5SmwmNAeWZP1MMnBBHHipaUMu3w1GmI8QUd2TNOqPZD2hzkwu6xdi/7Vy9x2D954jv+y58NELcUVnoFF/ANF4J+sv4sD+hvvYC+4at52662ADg6iPaDRG5EN8We+I/dPbOdr1l9pces8y6i6ky1HXtjcp+HQlc8UfcB761d5T6aWow2hs6Abscl1xC8Q/79fc1F3+4BkUgTQapBAfrilYc8t0X4/RfbPyoiqN+p+baLxeOViRAu64RYvTQy9AAOTM4AFEHUaDpuCCtCLbRwV4vkSpT9pAsgIcpNH4zlNQLWLw0jAabzkHFQO2AcjBPbH/odx+2gZiwMFtOQWVYgVeOgYc/GluxPIAX/odROOjug1IByw8kIOdpSB8aVgR/zYqEXmYACVSqIhUifwod+AZKBFYERuUiFyMgBKB6UhT8KDc/gNQImlFJOn4SVNwo9wB2PtgOj511AbWgHcwHVMxvOuoDSxvONhVCkLeTWE6dtUGIO/gGioRpYBKZAbWfaQg5GAqhj87VSKQg1QMf3VVBeMyB9MqqD4FNZB2sCXQPtSBEqE5eMtBmoOHDhyYzpPR9qYlnJNwv1jstU4B+dgH4GTQCyAf+8AETgZ9AB4Q9YICB3tAkYM9oG8Oan1zkKbAe3/2aQ6se3RAm6xWsTZgwIABvwj/AN5AbCBvQJzEAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
