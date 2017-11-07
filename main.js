
const add = document.getElementById('add');
let stopwatchCreator = document.getElementById('elementAdder');
let watches = [];
let watchTally = 0;
let timer = document.getElementById('watch0Timer');
watches[watchTally] = new StopWatch(timer);


startPause = (currentWatch) => {
  const startPauseButton = document.getElementById('watch' + currentWatch + 'Start');
  if (startPauseButton.innerHTML == 'Start') {
    startPauseButton.innerHTML = 'Pause';
    watches[currentWatch].delay();
  } else {
    startPauseButton.innerHTML = 'Start';
    clearTimeout(watches[currentWatch].timeoutID);
  }

}

add.onclick = () => {
  watchTally++;
  stopwatchCreator.insertAdjacentHTML('beforebegin' ,'<div id="stopwatch"><h1 id="watch' + watchTally + 'Timer">00:00:00.00</h1><div><h3 contenteditable="true">Stopwatch ' + (watchTally+1) + '</h3><button id="watch' + watchTally + 'Start" onclick = "startPause(' + watchTally + ')">Start</button><button id="clear" onclick = "watches[' + watchTally + '].reset()">Reset</button></div></div>');
  timer = document.getElementById('watch' + watchTally + 'Timer');
  watches[watchTally] = new StopWatch(timer);
}
