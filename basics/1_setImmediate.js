/* 
Example of setImmediate.
setImmediate call backs are always executed in the check Phase of event loop (But setImmediate created inside callbacks of setImmediate callbacks will be executed in next check phase of event loop ).
For more information on this checkout the link - https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/ to under stand nodejs event loop and it's phases.And also checkout Nodejs Indepth videos folder of your learning videos.

In this example setImmediate function releases event loop main thread and continues complex computation in event loop iteration phase (i.e. even loop check phase where immediate callbacks are executed).
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
    setImmediate(setImmediateTest);
}
setImmediateTest();