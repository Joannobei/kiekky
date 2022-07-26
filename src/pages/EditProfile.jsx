import React from 'react'
import { Sidebar, UserNav, EditProfile_Comp, MobileNav } from '../components'




function EditProfile() {
  return (
    <div className="notifications bg-[#F9FAFA]">
      <UserNav />
      <div className="flex mt-[6rem] mb-[5rem] bg-[#F9FAFA] ">

        <div className="   h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className='w-[327px] lg:w-[984px] m-auto'>
          <EditProfile_Comp />
        </div>
        <MobileNav />
      </div>
    </div>
  );
}

export default EditProfile;

