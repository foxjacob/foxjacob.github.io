function Question(questionData, imageUrl) {
    this.questionData = questionData;
    this.questionData["imageUrl"] = imageUrl;
    this.questionData["answerArray"] = function () {
        return this["answer"].split("");
    };
    this.questionData["keyboardArray"] = function () {
        var originchars = this["answer"].split("");
        var defaultstring = this["keyboard"] + this["answer"];
        var that = this;
        this["keyboard"].split("").forEach(function(value) {
        	if ( that["answer"].indexOf(value) < 0 && originchars.length < 24) {
	        	originchars.push(value);
        	}
        });
        //fill the keyboard with charactor lib
        for ( index in controller.charactors ) {
        	if ( originchars.length < 24 ) {
		       var value = controller.charactors[index];
		      
		        if ( defaultstring.indexOf( value )  < 0 ) {
		        	originchars.push(value);
		        }
	        } else {
		        break;
	        }
	        
        }
        var returnArray = [];
        shuffleArray(originchars).forEach(function(value,index){
        	returnArray.push({'index':index,'value':value});
        });
        return returnArray;
    };
    this.questionUI = "";
    this.update = function () {
        var compiledTemplate = Mustache.compile(document.getElementById("questionTmpl").text);
        this.questionUI = compiledTemplate(this.questionData);
    }
}
