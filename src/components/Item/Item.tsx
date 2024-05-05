import React from "react";
import "./style.css";
import { CiTempHigh } from "react-icons/ci";
import { CiCloudOn } from "react-icons/ci";
const Item = () => {
  return (
    <div className="flex px-8 bg_custom py-1 rounded-lg text-sm items-start mb-2 justify-between">
      <div className=" flex items-start flex-col   ">
        <h1 className="font-semibold mb-3">Saturday</h1>
        <div className="flex items-center ">
          <img
            className="w-[20px] mr-1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFR3BM////////////////////////////////////////////////////////////////z9GKYQAAABB0Uk5TAM+f3+9gMECAECC/cFCPr3ODawMAAAKgSURBVHja7VrL2qsgDJR7QNC8/9OehdevvwUUYs8is8dMITNJoMPAYDAYDAaDwWAwGAwGowu8SwAAzv0kepIKd4gpvRs9TBo/oOV7G+ElXkKYd+JHjd8gXtgFP2IO0hPHt6efr2aIzkWYT+mIypLGN3t8BeGUlFEcFCgzwezh/0Sx8gUGe3y41OZIzSCVjnnXR788cBEAAKLzx+eFL6ao7qMFM5+ze9d67uN+Tca5h9+oa6/J/zi/rmquDVZcG422dUahuun9A6lWKqaP3j5Rc7aLGkUPvSHOxg3DYI3U9dkdmqUYtv2Xh9t60NX7unji9JzAeOk3PsrK1A6NaWiq9JbDoqDwdLlqjT/EJh2kdju33ytWdQpBk4wREXF8uHiRQFs1GRucwPUoJouOnq2FHi0FNBBYJOR+RmD10eFnBMYuBOTjj2yt7dAjCe9byTH1NBJQz7wkHV1I4/i2de+3ysF55hVtBI5+QsRqR/PiRuNXwHRuIsHfjX+DddZL9obe3YmvIQytCJ+dpKmWP049Rpr499agzrlQd71qcvGYrKaqPdPd7xaCrDuFsfdMezFh2WIHhZFmqJdla5FdprkSg1hqwsguVlaJf5+qEu0G7Eds8sY50RFYD0HkNUB527zKPGSLdyAksBYHk5sikDJ+4ZRfIJCyo9ILBNz/TUCQFYJKAjO5DNcOYco2A5KSwJyVoe15vZurNiE/RhC+M5hCtQHqLVCFauM1bRYAlsweSB861mqcuzLa7thJGGyPGLZsFCRt4RZ/qjomHAOJBSGqUorvDbzs6clG1Y+7x3CuJLgOSDDrW0+JEsmg67LbaKL41c/JYSSJf2fidv0pyJu6CrEjByHNowITln/HZJGKKiDt8xkMBoPBYDAYDAaD0Yp/U/9kFCDYt94AAAAASUVORK5CYII="
            alt=""
          />
          <span className="text-sm">broken clouds</span>
        </div>
      </div>
      <div className=" flex items-start flex-col  ">
        <div className="flex items-center mb-3">
          <CiTempHigh className="mr-1"></CiTempHigh>
          <span className="font-semibold">10°C</span>
        </div>
        <div className="flex items-center ">
          <CiCloudOn className="mr-1"></CiCloudOn>
          <span className="font-semibold">64 %</span>
        </div>
      </div>
      <div className=" flex items-start flex-col ">
        <div className="flex items-center mb-3">
          <CiTempHigh className="mr-1"></CiTempHigh>
          <span className="font-semibold">10°C</span>
        </div>
        <div className="flex items-center ">
          <CiCloudOn className="mr-1"></CiCloudOn>
          <span className="font-semibold">64 %</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
