import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { verified, ribbon } from '../../assets'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function HotPicks() {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/books?_quantity=20";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className=' lg:w-[1000px] mb-[20px] lg:mb-[65px] '>
      <div className="top-text flex justify-between  lg:w-[995px] ">
        <div className="sub flex items-center">
          <p>Hot Picks</p>
          <p className='bg-[#F6F4FF] text-xs text-[#999999] px-3 py-1 rounded-md '>Gender :Female</p>
        </div>
        <NavLink to='/view_all'>  <p className="view text-sm text-[#6a52fd] ">View all <span> {`${'>>'}`}</span></p> </NavLink>
      </div>

      <div className="  lg:w-[1000px] w-[327px]  mt-5 ">
        <SimpleBar style={{ width: "800wv", padding: '6px' }} >

          <div className=" flex justify-between lg:gap-[16px] lg:w-[250vw] w-[550vw] ">

            {story
              ? story.map((story, idx) => (
                <div key={idx} className="story-status object-cover ">
                  <div className=" relative">
                    <div className=" absolute  inset-x-0 bottom-0 bg-opacity-70 names w-[100px] lg:w-[154px] h-[30px] bg-[#A8A8A8] rounded-b-md ">

                      <p className=" text-center truncate py-[3px]  text-white">{story.author}  <span className=" h-[0.8rem]  inline-block"><img src={verified} alt="" /> </span>  </p>
                    </div>

                    <div className="absolute top-0 right-0">
                      <img src={ribbon} alt="" />
                    </div>
                    <img
                      className="stats mb-2 w-[100px] lg:w-[154px] lg:h-[130px] h-[112px] rounded-lg  "
                      src={story.image}
                      alt="icon"
                    />
                  </div>

                </div>
              ))
              : null}
          </div>
        </SimpleBar>

      </div>
    </div>
  );
}

export default HotPicks;