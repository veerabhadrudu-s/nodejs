/* 
    This is an example of nested testcases using mocha.
    
    describe -> Is used to register the test case block such as before,beforeeach,it,after and aftereach.
    before -> before block is always executed before execution of any it inside a describe block. 
    beforeEach -> beforeEach block is executed before execution of each it inside a describe.
    it -> it block is used for testing functionality. 
    after -> after block is always executed after execution of all 'it' blocks inside a describe block.
    afterEach -> afterEach block is executed after execution of each it block inside a describe block.

    Mocha frame work execution flow:-
    -> Describe block always registers blocks (it,after,before etc.) defined inside it into a queue.
    -> Once all the registrations of blocks are completed i.e loading of test case file by mocha is completed 
    then, Mocha framework starts executing those registered block from the queue.
    -> If a descibe block is defined inside another descibe block during inital registration phase the blocks 
    defined inside nested describe block are also get's registred into queue and later all those 
    describe blocks are exeuted i.e after all registrtions are completed , mocha starts executing those 
    registered blocks from the queue in the registered order from the queue.
    ->In short first all describe blocks and nested describe blocks are executed (i.e registration phase of it,
    after,before etc. defined inside describe blocks) and executes other statements ( i.e other javascript 
    statements apart from test case blocks such as it,after,before etc.) written inside describe blocks are
    executed along with registration process of test case blocks ( i.e it,after,before etc.). 
    Finally Mocha framework starts executing registred test case blocks ( i.e it,after,before etc.) from the queue 
    in the registred order.

    -> For the other case , suppose if a describe is defined inside it block, That describe block is not 
    initially executed by mocha framework.But later when 'it' block is executed from the queue (i.e after 
    execution of all inital describe and nested descibe blocks are executed then stared executing 'it' blocks 
    from the queue), mocha executes the that describe block (registers/pushes this 'it' blocks nested describle 
    block test case blocks into queue end) and proceeds the execution.
   
*/
console.log("Log before definition of top describe");

describe("Top level describe", function () {

    console.log("Top level describe statement");

    beforeEach("Top level before each", function () {
        console.log("Top level before each statement");
    });

    /* 
    Remember before block is always executed before execution of any it inside a describe block.
    However,beforeEach block is executed before execution of each it inside a describe.   
    */
    before("Top level before", function () {
        console.log("Top level before statement");
    });

    it("Top level it", function () {
        console.log("Top level it statement");

        describe("describe inside top level it", function () {

            console.log("describe statement inside top level it");

            before("before inside top level it", function () {
                console.log("Before statement inside top level it");
            });

            beforeEach("before each inside top level it", function () {
                console.log("before each inside top level it");
            });

            it("it inside top level it", function () {
                console.log("it statement inside top level it");
            });

            after("after inside top level it", function () {
                console.log("after statement inside top level it");
            });

            afterEach("after each inside top level it", function () {
                console.log("after each statement inside top level it");
            });

            console.log("describe end statement inside top level it");

        });
    });

    console.log("top level describe MIDDLE statement ");

    describe("1st Level describe", function () {

        console.log("1st level describe statement");

        before("1st level before", function () {
            console.log("1st level before statement");
        });

        beforeEach("1st level before each", function () {
            console.log("1st level before each statement");
        });

        it("1st level it", function () {
            console.log("1st level it statement");

            describe("describe inside 1st level it", function () {

                console.log("describe statement inside 1st level it");

                before("before inside 1st level it", function () {
                    console.log("Before statement inside 1st level it");
                });

                beforeEach("before each inside 1st level it", function () {
                    console.log("before each inside 1st level it");
                });

                it("it inside 1st level it", function () {
                    console.log("it statement inside 1st level it");
                });

                after("after inside 1st level it", function () {
                    console.log("after statement inside 1st level it");
                });

                afterEach("after each inside 1st level it", function () {
                    console.log("after each statement inside 1st level it");
                });

                console.log("describe end statement inside 1st level it");

            });
        });

        it("2nd it - inside first level describe", function () {
            console.log("2nd it statement - inside first level describe");
        });

        describe("2nd Level describe", function () {

            console.log("2nd level describe statement");

            before("2nd level before", function () {
                console.log("2nd level before statement");
            });

            beforeEach("2nd level before each", function () {
                console.log("2nd level before each statement");
            });

            it("2nd level it", function () {
                console.log("2nd level it statement");
            });

            after("2nd level after", function () {
                console.log("2nd level after statement");
            });

            afterEach("2nd level after each", function () {
                console.log("2nd level after each statement");
            });

            console.log("2nd level describe end statement");

        });

        after("1st level after", function () {
            console.log("1st level after statement");
        });

        afterEach("1st level after each", function () {
            console.log("1st level after each statement");
        });

        console.log("1st level describe end statement");

    });

    describe("1st Level sibling describe", function () {

        console.log("1st Level sibling describe statement");

        before("1st Level sibling before", function () {
            console.log("1st Level sibling describe before statement");
        });

        beforeEach("1st Level sibling before each", function () {
            console.log("1st Level sibling before each statement");
        });

        it("1st Level sibling it", function () {
            console.log("1st Level sibling it statement");
        });

        after("1st Level sibling after", function () {
            console.log("1st Level sibling after statement");
        });

        afterEach("1st Level sibling after each", function () {
            console.log("1st Level sibling after each statement");
        });

        console.log("1st Level sibling describe end statement");

    });

    after("Top level after", function () {
        console.log("Top level after statement");
    });

    afterEach("Top level after each", function () {
        console.log("Top level after each statement");
    });

    console.log("Top level describe end statement");

});

console.log("Log after definition of top describe");


describe('Another top describe', function () {
    console.log('Another describe');

    it('Another top describe it', function () {
        console.log('Another top describe it statement')
    });

    console.log('Another describe end statement');
})