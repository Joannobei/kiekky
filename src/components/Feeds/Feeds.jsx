import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";

function Feeds() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=100";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="w-full">
      {feed
        ? feed.map((feed, idx) => (
            <div
              key={idx}
              className="story-status border-2 bg-white py-4 rounded-lg mb-5"
            >
              <div>
                <div className="postItem  items-center mb-7 ">
                  <div className=" flex gap-10 items-center ml-5 ">
                    <div className="feed-image">
                      <img

                        className=" w-full h-[4rem] p-[1.5px] rounded-[50%]"
                        src={feed.image}
                        alt="icon"
                      />
                    </div>

                    <div className="lg:w-[42rem] sm:w-[17rem] md:w-[23rem]">
                      <p className="font-[700]">{feed.firstname}</p>
                      <div className="location flex justify-between pr-5 text-gray text-sm ">
                        <p className="md:text-sm sm:text-xs flex items-center">
                          <span>
                            <MdOutlineLocationOn color="gray" />
                          </span>
                          {feed.address.country}, {feed.address.city}
                        </p>
                        <p className="text-[gray]  text-sm">
                          2 days ago
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="caption pt-5 mx-5">
                    <p>{feed.email}.</p>
                  </div>
                </div>

                <div className="post-img h-[9rem] md:h-[10rem] flex justify-around mx-5">
                  <img
                    className=" w-[9rem] lg:w-[16rem]"
                    src={feed.image}
                    alt=""
                  />
                  <img
                    className=" w-[9rem] lg:w-[16rem]"
                    src={feed.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Feeds;
