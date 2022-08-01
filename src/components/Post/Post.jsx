import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BiCamera, BiVideoPlus } from "react-icons/bi";
import { useForm } from 'react-hook-form'
import { createPost } from '../../Redux/features/createPost/createPostSlice'
import axios from "axios";

function Post() {
  const [display, setDisplay] = useState([]);
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const postData = {
      body: data.body,
      images: data.images,
      moneytize: 1,
      amount: 20,
      base_image: data.base_image,
      video: data.video
    } 
    console.log(postData);
    dispatch(createPost(postData));

  }


  const url = "https://fakerapi.it/api/v1/books?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setDisplay(response.data.data));
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg items-center mb-9 pb-[1px] w-[327px] lg:w-[672px] max-w-Full ">
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post">

          <div className="flex items-center">

            <div className="img-container pt-5 pr-5 pl-5">
              {display
                ? display.map((display, idx) => (
                  <div key={idx} className="story-status ">
                    <div className="post-image">
                      <img
                        className=" min-w-[4rem] h-[4rem]  p-[2.7px]  cursor-pointer  rounded-full"
                        src={display.image}
                        alt="icon"
                      />
                    </div>
                  </div>
                ))
                : null}
            </div>

            <textarea className="outline-none w-full  text-[#212121] lg:mt-7" type="text" 
            placeholder="Whats new.." name="" id="" {...register("body")} />
          </div>

          <div className="but flex justify-end items-center mr-5 space-x-5 mb-5">
            <p className='text-xl'><BiCamera color="gray" />  </p>
            <p className='text-xl'> <BiVideoPlus color="gray" /> </p>
            <input className='flex px-6 py-[6px] text-sm h-[2rem] bg-[#6a52fd] text-white rounded-lg ' type="submit" value="Post It!" />

            {/* <button  type="submit">Post it!</button> */}
          </div>
        </form>

      </div>





    </div >
  );
}

export default Post;
