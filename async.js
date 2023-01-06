function firstTask() {
  console.log('First task done!');
}
function secondTask() {
  console.log('Second task done!');
}
function thirdTask() {
  console.log('Third task done!');
}

setTimeout(function() {
  console.log('completed first task');
  setTimeout(function() {
    console.log('completed second task');
  }, 2000);
}, 2000);