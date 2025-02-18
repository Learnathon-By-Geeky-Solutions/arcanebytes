import React from "react";

const top3 = () => {
  return (
    <div className="flex w-full mt-10 gap-5 justify-center">
      <div className="avatar">
        <div className="w-24 mt-5 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" />
        </div>
      </div>
      <div className="avatar mb-5">
        <div className="ring-[#FF5B32] ring-offset-[#202020] transition ease-in-out delay-150 hover:scale-105 w-24 rounded-full ring ring-offset-4">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="avatar mt-5">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/3@94.webp"/>
        </div>
      </div>
    </div>
  );
};

export default top3;
