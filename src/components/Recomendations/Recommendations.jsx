
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Recommendations.css'

function Recommendations(props) {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/books?_quantity=40";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div>
      <p className="lg:block ml-20 hidden">Recommendations </p>
      <div className="recommendations hidden mt-[2rem] ml-20  w-[16rem] lg:block">
        {story
          ? story.map((story, idx) => (
              <div key={idx} className="story-status ">
                <div className="image">
                  <img
                    className="w-[7rem] h-[7rem]"
                    src={story.image}
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
export default Recommendations;
