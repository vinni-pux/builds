var app = angular.module('remoteWork.controllers', ['ngSanitize']).

  /* Drivers controller */
  controller('vacanciesController', function($scope, $http) {
    $scope.builds = [];
    $scope.templates = [ { name: 'vacancy.html', url: 'partials/vacancy.html'} ];
    $scope.template = $scope.templates[0];
    $scope.name1 = "Unit Test";
    $scope.name2 = "Functional Test";

    $http.get('js/data.json').then(function(res){
      $scope.builds = res.data;                
    });
    
    $scope.select = function(build) {
      angular.forEach($scope.builds, function(build) {
        build.selected = false;
      });
      build.selected = true;
    };
    
/*
    ergastAPIservice.getVacancies().success(function (response) {
        //Digging into the response to get the relevant data

        
        //console.log(response);
        //$scope.vacanciesList = response.items;
    }); */
  });
/*
  controller('buildController', function($scope, $buildId, ergastAPIservice) {
    console.log($element);
    //$scope.id = $routeParams.id;
    /*
    $scope.races = [];
    $scope.vacancy = null;

    ergastAPIservice.getVacancyDetails($scope.id).success(function (response) {
        $scope.vacancy = response; 
    });


    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 

  });
    */
    
app.directive('buildinfo', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/vacancy.html',

    }
}).directive('piechart', function() {
    return {
        restrict: 'E',
        scope: {
            dset: '='
        },
        template: '<div></div>',
        link: function(scope, element, attrs) {
            var paper = Raphael(element[0], 150, 140);
                var rad = Math.PI / 180;
    function sector(cx, cy, r, startAngle, endAngle, params) {
      var x1 = cx + r * Math.cos(-startAngle * rad),
          x2 = cx + r * Math.cos(-endAngle * rad),
          y1 = cy + r * Math.sin(-startAngle * rad),
          y2 = cy + r * Math.sin(-endAngle * rad);
      return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    paper.text(10, 10, attrs.name).attr({'font-size': "14px", "font-weight": "bold", fill: "#70AD47", "text-anchor": "start"});
    sector(45, 60, 35, 30, 300, {fill: "#70AD47", stroke: "#C5C6C3"});
    sector(45, 60, 35, 300, 30, {fill: "#ED7D31", stroke: "#C5C6C3"});
    paper.text(30, 60, "142");
    paper.text(70, 60, "10");
    paper.text(115, 60, "73%").attr({'font-size': "28px", fill: "#B0D05C"});
    paper.text(115, 78, "test passed");
    paper.rect(10, 105, 95, 25).attr({stroke: "#c5e0b3", fill: "#c5e0b3"});
    paper.rect(105, 105, 35, 25).attr({stroke: "#f7cbac", fill: "#f7cbac"});
    paper.text(75, 112, "76%").attr({'font-size': "14px", fill: "#4c6b39", "font-weight": "bold"});
    paper.text(75, 124, "code covered");
          
        }
    }
}).directive('stages', function() {
    return {
        restrict: 'E',
        scope: {
            dset: '='
        },
        template: '<div></div>',
        link: function(scope, element, attrs) {
          console.log(scope, element, attrs);
            var paper = Raphael(element[0], 150, 140);
            paper.text(10, 10, attrs.name).attr({'font-size': "14px", "font-weight": "bold", fill: "#70AD47", "text-anchor": "start"});
            paper.image("img/computer.png", 10, 35, 50, 50);
            paper.image("img/computer.png", 80, 35, 50, 50);
            paper.text(35, 95, "Debug").attr({'font-size': "12px", fill: "#326ec1"});
            paper.text(105, 95, "Release").attr({'font-size': "12px", fill: "#326ec1"});
            paper.text(75, 127, "10:46am - 4/17/2014").attr({'font-size': "12px"});


          
        }
    }
}).directive('metrics', function() {
    return {
        restrict: 'E',
        scope: {
            dset: '='
        },
        template: '<div></div>',
        link: function(scope, element, attrs) {
            var paper = Raphael(element[0], 150, 140);
            paper.text(10, 10, attrs.name).attr({'font-size': "14px", "font-weight": "bold", fill: "#70AD47", "text-anchor": "start"});
            var arrowTest = paper.path("M0 25L20 0L40 25L30 25L30 45L10 45L10 25L0 25").attr({fill:"#538135", stroke: "#538135"}).translate(10, 20);
            var arrowMain = arrowTest.clone().attr({fill:"#c00000", stroke: "#c00000"}).translate(75, 0).rotate(180);
            var arrowSec = arrowTest.clone().attr({fill:"#ffd965", stroke: "#ffd965"}).translate(0, 60).rotate(90);
            var arrowWork = arrowTest.clone().attr({fill:"#ffd965", stroke: "#ffd965"}).translate(75, 60).rotate(90);
            paper.text(30, 45, "64").attr({'font-size': "16px", fill: "white"});
            paper.text(105, 45, "53").attr({'font-size': "16px", fill: "white"});
            paper.text(30, 75, "Test").attr({'font-size': "12px"});
            paper.text(105, 75, "Maintainability").attr({'font-size': "12px"});
            paper.text(30, 103, "63").attr({'font-size': "16px", fill: "black"});
            paper.text(105, 103, "72").attr({'font-size': "16px", fill: "black"});
            paper.text(30, 127, "Security").attr({'font-size': "12px"});
            paper.text(105, 127, "Workmanship").attr({'font-size': "12px"});
            /*
            paper.text(10, 10, attrs.name).attr({'font-size': "14px", "font-weight": "bold", fill: "#70AD47", "text-anchor": "start"});
            paper.image("img/computer.png", 10, 45, 60, 60);
            paper.image("img/computer.png", 100, 45, 60, 60);
            paper.text(20, 115, "Debug").attr({'font-size': "12px", fill: "#326ec1", "text-anchor": "start"});
            paper.text(110, 115, "Release").attr({'font-size': "12px", fill: "#326ec1", "text-anchor": "start"});
            paper.text(85, 155, "10:46am - 4/17/2014").attr({'font-size': "12px"});
*/

          
        }
    }
});
