import React from "react";
import ReactPlayer from "react-player";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./Instructions.scss";

const Video = ({
  title = "MOCK TEST JEE - 3",
  questions = "75",
  duration = 3,
}) => {
  const instructions = [
    "Exam will start once you click begin.",
    "When the countdown timer at the top reaches zero, the examination will end by itself.",
    "The examination will end exactly in 3 hours, from the time when you click begin.",
    "Once you “Finish” the test, you cannot resume the test again.",
  ];

  return (
    <div className="instructions">
    <section class="publishAssignment__ctaRow"> <textarea type="text" placeholder="Add Video Link" required="" class="textArea__input"  spellcheck="false"></textarea>
      <button class="publishAssignment__ctaRow__publish">Submit Link</button>
    </section>
       
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ug50zmP9I7s"
              className="react-player"
              //playing
              width="100%"
              height="100%"
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ug50zmP9I7s"
              className="react-player"
              //playing
              width="100%"
              height="100%"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Video;
