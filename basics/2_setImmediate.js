/* 
Before executing this example make sure to understand NodeJS Event loop and it's phases.Refrer https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/ 

If you execute this example multiple times console.log(1); or console.log('TIMEOUT FIRED -1 '); might execute first randomly.
This is because due to race condition between setImmediate(with function A call back) and setTimeout(whose timeout is 0 milliseconds having timeout1 as callback). 
But Remaining Immediate call backs will be executed in same order in which they are defined. Even though they are executed in same order but these call backs are executed in different event loop iteration's i.e. fun-A is executed in 1st check phase of event loop iteration. 
fun-B and fun-C are executed in 2nd check phase of event loop iteration.
fun-D,fun-E,fun-F and fun-G are executed in 3rd check phase of event loop iteration.
This different iteration loops is due to, setImmediate call backs are always executed in the check Phase of event loop. But setImmediate created inside callbacks of setImmediate callbacks will be executed in next check phase of event loop and this chaining goes on.
 */
setImmediate(function A() {
    console.log(1);
    setImmediate(function B() {
        console.log(2);
        setImmediate(function D() {
            console.log(4);
        });
        setImmediate(function E() {
            console.log(5);
        });
    });
    setImmediate(function C() {
        console.log(3);
        setImmediate(function F() {
            console.log(6);
        });
        setImmediate(function G() {
            console.log(7);
        });
    });
});

setTimeout(function timeout1() {
    console.log('TIMEOUT FIRED - 1');
}, 0);

setTimeout(function timeout2() {
    console.log('TIMEOUT FIRED - 2');
}, 500);