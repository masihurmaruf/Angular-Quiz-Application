(function(){
    angular
        .module("quizApp")
        .factory("quizMatrix", QuizMatrix);
    
        function QuizMatrix(){
            var quizObj = {
                quizActive: false,
                changeState: changeState
            };
            return quizObj;
            
            function changeState(state){
                quizObj.quizActive = state;
            }
        }
})();