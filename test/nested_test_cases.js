/* 
    This is an example of nested testcases using mocha
*/

describe("Top level describe", function () {

    console.log("Top level describe statement");

    before("Top level before", function () {
        console.log("Top level before statement");
    });

    beforeEach("Top level before each", function () {
        console.log("Top level before each statement");
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

        it("Top level 2nd it", function () {
            console.log("Top level 2nd it statement");
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

    after("Top level after", function () {
        console.log("Top level after statement");
    });

    afterEach("Top level after each", function () {
        console.log("Top level after each statement");
    });

    console.log("Top level describe end statement");

});