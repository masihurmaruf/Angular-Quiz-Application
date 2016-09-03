(function(){
    angular
        .module("quizApp")
        .controller("quizCtrl", QuizController);
    
        QuizController.$inject = ['quizMatrix']
    
        function QuizController(){
            var vm = this;
            vm.quizMatrix = quizMatrix;
        }
})();