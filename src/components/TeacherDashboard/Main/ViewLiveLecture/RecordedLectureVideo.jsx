import React, { useState , useRef, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import "./LiveLecturesVideo.scss";
import ReactPlayer from 'react-player/youtube'
import { connect, useStore,useSelector } from "react-redux";
import PropTypes from "prop-types";

import { getlecturesbyidfordata } from "../../../../actions/lecture";
const RecordedLectureVideo = ({getlecturesbyidfordata }) => {
  const [activeLecture, setActiveLecture] = useState("Overview");
  const { id } = useParams();
 const  singlelecture=useSelector((state)=>state.lecture.lecture)
  console.log(id,singlelecture)

  const token=JSON.parse(localStorage.getItem("token"))
  console.log(token)
useEffect(() => {
  getlecturesbyidfordata(id,token)
}, []);

  const [togglesize, settogglesize] = useState(false);
  const [height, setheight] = useState("340px");
  const [width, setwidth] = useState("640px");
  
  return (
    <section className="liveLecturesVideo">
      <article className="liveLecturesVideo__main">
        <div className="liveLecturesVideo__main__left">
       
     
                  {/* poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)} */}
                    <div> 
   <div className="container" style={{"width": "42vw","height": "50vh"}}>
              {/* https://www.youtube.com/embed/mRD0-GxqHVo?autoplay=1&rel=0&showinfo=0 */}
              <ReactPlayer config={{
                    youtube: {
                      playerVars: { modestbranding:1 ,controls:1 ,autoplay:1 ,rel:0},
                    }
                  }} url={`${singlelecture!=null?singlelecture.link:"https://www.youtube.com/watch?v=8fJxQAbG8lI&tautoplay=1&rel=0&showinfo=0&rel=0&modestbranding=1&controls=0"}?autoplay=1&rel=0&showinfo=0&rel=0&modestbranding=1&controls=0 `} width={"100%"}  />
              </div>
                    </div>

{/* <iframe width="425" height="344" src="https://www.youtube.com/embed/DiNcVOdx64U?autoplay=1&livemonitor=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          {/* <img
            src="/assets/images/dashboard-live-lecture-video-player.svg"
            alt="Live Video"
            className="liveLecturesVideo__main__left__video"
          /> */}
          {/* <YouTube videoId="Mx0stnwUPIM" opts={opts} onReady={this._onReady} /> */}
        </div>
        <div className="liveLecturesVideo__main__right">
      
          {/* <img
            src="/assets/images/dashboard-live-lecture-chat.svg"
            alt="Live Chat"
            className="liveLecturesVideo__main__right__chat"
          /> */}
          {/* <ReactPlayer url='https://www.youtube.com/live_chat?v=rw7bxTqkYYs&embed_domain=http://localhost:3000' playing={true} controls={true} loop={true} /> */}
          {/* <iframe src="https://www.youtube.com/live_chat?v=rw7bxTqkYYs&embed_domain=http://localhost:3000/" width="540" height="300"  frameborder="0" allowfullscreen></iframe> */}
        </div>
      </article>

      <article className="liveLecturesVideo__titleBar">
        <h4 className="liveLecturesVideo__titleBar__title">
        {/* {singlelecture.title} */}
        </h4>
        <h5 className="liveLecturesVideo__titleBar__subtitle">
          By {JSON.parse(localStorage.getItem("user")).username}
        </h5>
        {/* <p className="liveLecturesVideo__titleBar__time">  {singlelecture.date}</p> */}
      </article>

      <ul className="liveLecturesVideo__navigation">
        <li
          className={activeLecture === "Overview" ? "active" : ""}
          onClick={() => setActiveLecture("Overview")}
        >
          Overview
        </li>
        <li
          className={activeLecture === "Participants" ? "active" : ""}
          onClick={() => setActiveLecture("Participants")}
        >
          Participants
        </li>
      </ul>
      {activeLecture === "Overview" ? (
        <h4 className="liveLecturesVideo__overview">
         {singlelecture.description}
        </h4>
      ) : (
        ""
      )}
    </section>
  );
};

RecordedLectureVideo.propTypes = {
  
  getlecturesbyidfordata: PropTypes.func.isRequired,
  

  lecture: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  lecture: state.lecture,
  error: state.error,
});
export default connect(mapStateToProps, { getlecturesbyidfordata }) (RecordedLectureVideo);
