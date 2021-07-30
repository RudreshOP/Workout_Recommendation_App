import React, { useState } from "react";
import "./styles.css";
import workoutDB from "./database.js";

export default function App() {
  let workouts = Object.keys(workoutDB);

  const [selectedWorkout, setSelectedWorkout] = useState("Chest");
  function workoutClickHandler(workout) {
    setSelectedWorkout(workout);
  }

  return (
    <div className="App">
      <div>
        <nav className="nav">GetSetFit</nav>
      </div>
      <div>
        <p className="intro">
          Start your fitness journey with these basic exercises.{" "}
        </p>
      </div>
      {workouts.map(function (workout) {
        return (
          <button
            className="btns"
            onClick={() => workoutClickHandler(workout)}
            key={workout}
          >
            {workout}
          </button>
        );
      })}

      <ul>
        {workoutDB[selectedWorkout].map(function (exercise) {
          return (
            <div className="output-div" key={exercise.name}>
              <section className="outputWorkout">
                <div className="img-left">
                  <img className="img" src={exercise.poster} alt="exercise" />
                </div>
                <div className="text-right">
                  <div className="workout-text">Exercise: {exercise.name}</div>
                  <div className="medium-text">Sets: {exercise.sets}</div>
                  <div className="medium-text">Repetition: {exercise.reps}</div>
                  <div className="desc-text">
                    <strong>Description: </strong>
                    {exercise.fact}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </ul>
      <footer className="footer">
        <p>Social Links</p>
        <ul class="social-links unordered">
          <li class="list-inline">
            <a class="link" href="https://github.com/RudreshOP">
              github
            </a>
          </li>
          <li class="list-inline">
            <a class="link" href="https://twitter.com/ParadkarRudresh">
              twitter
            </a>
          </li>
          <li class="list-inline">
            <a class="link" href="https://www.linkedin.com/in/rudresh-paradkar">
              linkedln
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
