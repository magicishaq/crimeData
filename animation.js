// //script for pop motion
// import popmotion from 'popmotion';
// require('./useless')
// const {  spring, listen, pointer, value } = popmotion;

// const ball = document.querySelector('.box');
// const divStyler = ball; 
// const ballXY = value({ x: 0, y: 0 }, divStyler.set);

// listen(ball, 'mousedown touchstart')
//   .start((e) => {
//     e.preventDefault();
//     pointer(ballXY.get()).start(ballXY);
//   });

// listen(document, 'mouseup touchend')
//   .start(() => {
//     spring({
//       from: ballXY.get(),
//       velocity: ballXY.getVelocity(),
//       to: { x: 0, y: 0 },
//       stiffness: 200,
//       // mass: 1,
//       // damping: 10
//     }).start(ballXY);
//   });