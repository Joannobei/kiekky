import React from "react";
import { Sidebar, UserNav, User, UserInfo, PPV, MobileNav } from "../../components";

function UserProfile(props) {
  return (
    <div className="notifications bg-[#F9FAFA]  ">
      <UserNav />
      <div className="flex mt-[6rem] bg-[#F9FAFA] ">
        <div className="  h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className="lg:w-[984px] w-[100vw] m-auto  ">
          <div className="lg:w-[984px] w-[352px] m-auto  ">
            <User />
            <UserInfo />
          </div>
          <div className="">
            <PPV />

          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default UserProfile;
