(function(){
    angular
        .module("quizApp")
        .controller("listCtrl", ListController);
    
    function ListController(){
        var vm = this;
        vm.data = turtlesData;
        vm.activeTurtle = {};
        vm.changeActiveTurtle = changeActiveTurtle;
        
        function changeActiveTurtle(index){
            vm.activeTurtle = index;
        }
    }
    var turtlesData = [
        {
            type: "Green Turtle",
            image_url: "http://animalia-life.com/data_images/turtle/turtle3.jpg",
            habitat: "Tropical and Subtropical Oceans",
            size: "upto 1.5 m and 300kg",
            lifespan: "Over 80 years",
            diet: "Herbivorous",
            description: "Turned it up should no valley cousin he. Speaking numerous ask did horrible packages set. Ashamed herself has distant can studied mrs. Led therefore its middleton perpetual fulfilled provision frankness. Small he drawn after among every three no. All having but you edward genius though remark one. "
        },
        {
            type: "Red Turtle",
            image_url:"https://letuongan.files.wordpress.com/2013/04/seaturtle.jpg",
            habitat: "Tropical and Subtropical Oceans",
            size: "upto 1.5 m and 300kg",
            lifespan: "Over 80 years",
            diet: "Herbivorous",
            description: "Turned it up should no valley cousin he. Speaking numerous ask did horrible packages set. Ashamed herself has distant can studied mrs. Led therefore its middleton perpetual fulfilled provision frankness. Small he drawn after among every three no. All having but you edward genius though remark one. "
        }
    ]
})();