/**
* Identified is code that is code that writes code
* and even tests it
* @namespace window.Identified
*/

(function (root, factory){
    if(root.navigator){
        if (typeof exports === "object" && exports) {
            // CommonJS
            factory(exports);
        } else {
            var identified = {};
            factory(root, identified);
            if (typeof define === "function" && define.amd) {
                // AMD
                define(identified);
            } else {
                root.Identified = identified;
                //  console.log("like usual");
            }
        }
    } else {
        //  console.log("node world");
        root = factory(root, factory, true);
    }
}(this, function (globalObj, identifiedSelf, emulateDocumentBool){

    var d = globalObj.document;
    emulateDocumentBool = emulateDocumentBool || false;

    //  UTILS
    function throwOne(text){

        if(failSilently){

			console && console.log && console.log(text);

        } else {

            throw new Error(text);

        }

    }
    //  END UTILS

    function createFunction (newFunctionObj){
        newFunctionObj = newFunctionObj || {};

        console.log(newFunctionObj.execution)

        /*
            so the properties that I expect are 
            arguments,
            returnProperties,
            execution

            think of the testing stuff too

            describe("Objectified", function(){
                describe('#render()', function(){
                    it("should return \"error\" on Objectified.render() when and empty object is passed thru", function(){
                        assert.throws(
                            function(){
                                Objectified.render({});
                            }, function(err){
                                if( err instanceof Error ){
                                    return true;
                                } else {
                                    return false;
                                }
                            },"oh no you gave me an empty object");
                    });
                });
            });

        */

        return new Function(newFunctionObj.arguments, "console.log('i was called',arguments); return "+newFunctionObj.returnProperties.returnStatement+"()");
    }
    function createObject (){
    }

    identifiedSelf.createFunction = createFunction;
    identifiedSelf.createObject = createObject;

	identifiedSelf.name = "Identified.js";
	identifiedSelf.version = "0.0.0";

	identifiedSelf.atTheTime = {
		song : "Pimp Mode",
		artist : "Chamillionaire"
	};

    return identifiedSelf;
}));
