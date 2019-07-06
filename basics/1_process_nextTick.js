/* 
Example of process.nextTick.
Process.nextTick call backs are always executed in the end of every event loop "Phase" (Including process.nextTick calls created by those callbacks).
For more information on this checkout the link - https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/ to under stand nodejs event loop and it's phases.And also checkout Nodejs Indepth videos folder of your learning videos.

In this example setTimeout callback is been blocked out by process.nextTick Call backs in proceessNextTickTest function.
So, process.nextTick will be always be executed in same event loop "phase".However,timeout call's created in present event loop will be executed in next iteration of event loop(If the timeout has breached or passed). But in this example process.nextTick is blocking the event loop to be complete it's iteration,once all process.nextTick callbacks are over event loop phase is completed and then moves to next phase of event loop and finally event loop moves to next iteration.
 */

let timeBeforeCallingTimeout = new Date();
setTimeout(() => {
    let timeDuringExecutionOfTimeoutCallBack = new Date();
    console.log(`This is a timeout call back and time difference in seconds - ${(timeDuringExecutionOfTimeoutCallBack.getTime() - timeBeforeCallingTimeout.getTime())/1000}`);
}, 3000);

let recursionCounter = 0;

function setImmediateTest() {
    let forLoopCounter = 1000000;
    for (let i = 0; i < forLoopCounter; i++) {
        //Some Complex Computation.
        let val = Math.random / Math.random;
    }
    console.log(`Compleated Complex Computation in for loop with loop counter ${forLoopCounter}`);
    if (++recursionCounter && recursionCounter > 10)
        return;
    process.nextTick(setImmediateTest);
}
setImmediateTest();