# [HIIT Tabata Interval Workout Timer](https://ly900.github.io/hiit-timer/index.html)
A HIIT or Tabata-style timer to help you exercise, lose weight, and burn fat.

## Features
* React 16.8.6
* React functional and class components
* ES6
* Babel 6.26.0
* Sass
* CSS Grid
* Flexbox
* Mobile first
* Responsive
* Created ______

*Note: All requirements below are for the Simple Interval Timer only.*

## User Stories

* MVP
  * Next Step
  
#### Home Screen
* Upon opening the app, I am taken to the Home screen (Done).
* I can choose "Simple" or "Custom" (Done).
#### Screen 1: "On"
* After clicking "Simple," I can choose how long I want my exercise duration, or "on" time, to be. Options: 20, 30, 45, or 60 seconds.
  * I can click a question mark to get an explanation for this screen.
  * Pressing back will take me back to the Home screen.
#### Screen 2 "Off"
* I can choose how long I want my rest duration, or "off" time, to be.
  * I can click a question mark to get an explanation for this screen.
  * Pressing back will take me back to the "on" time selection, which I can modify.
#### Screen 3: Number of Sets
* I can choose how many sets I want to complete. 
  * I can click a question mark to get an explanation for this screen.
  * Pressing back will take me back to the "off" time selection, which I can modify.
#### Screen 4: Summary
* Before starting the workout, I can see what I chose for my workout.
  * Before starting the workout, I have the option to modify the workout.
* I can click Go! to start the workout.
#### Screen 5: Workout
* During the workout, I can see which set I am on out of the total number of sets I chose.
* During the workout, I can see if I should be exercising or resting.
* During the workout, I can see a timer to know how much time is left of the exercise or rest period.
  * During the workout, I can hear an audible sound to know an exercise period is starting.
  * During the workout, I can hear a different audible sound to know a rest period is starting.
  * During the workout, I can press Forward to go to the next exercise or Back to go to the last one.
  * During the workout, I can hear a ticking sound 5 seconds before an exercise period starts so I can be prepared.
  * During the workout, I can at any time toggle the sound on and off.
* During the workout, during the exercise or rest period, I can pause and continue the workout.
* At the end of the workout, I get a message that says Workout Complete!
  * At the end of the workout, I get a congratulatory message with my "on" time, "off" time, # of sets, and total workout duration.
  * At the end of the workout, I can choose to end the workout or do another one. 
* During the workout, I can choose to cancel and stop the workout.
* If I choose to cancel a workout, I get another confirmation message.
* In the confirmation message, I can choose to continue the workout or cancel the workout.
* If I choose to continue the workout, I am returned to the exercise screen with the workout paused until I press play.
* If I choose to end the workout, I am returned to the Home screen.

<center><img src="/src/assets/hiit-timer-screenshot.png" alt="HIIT Timer" width=50%></center>


## Dev Notes
* npm start
* sass --watch ./src/App.scss:./App.css
