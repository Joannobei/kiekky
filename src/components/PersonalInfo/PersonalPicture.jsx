import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai'
import Info from "./Info";
const PersonalPicture = ()=> {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=20";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="feed-recommendation flex mx-6 justify-center lg:justify-start lg:items-start sm:items-center sm:w-[100vw] lg:w-[60rem] ">
    <Info />
   
    <div className="  rounded-md ml-6 p-12 w-[42rem] pictures bg-white">
    {feed
          ? feed.map((feed, idx) => (
              <div key={idx} className="story-status ">
                <div className="image">
                <div className="edit w-[2.5rem] h-[2.5rem] bg-[black] opacity-20 lg:ml-[13.7rem] mt-1 absolute flex justify-center items-center rounded-full ">
                   <AiOutlineEdit size='1.5rem' color='white' />
                  </div>
                  <img
                    className=" w-[17rem] h-[7rem] lg:h-[16rem] rounded-md"
                    src={feed.image}
                    alt="icon"
                  />
                 
                </div>
              </div>
            ))
          : null}

    </div>



    </div>
  );
}

export default PersonalPicture;
