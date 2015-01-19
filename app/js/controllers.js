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
    
app.directive('piechart', function() {
    return {
        restrict: 'E',
        scope: {
            dset: '='
        },
        template: '<div></div>',
        link: function(scope, element, attrs) {
          console.log(scope, element, attrs);
            var paper = Raphael(element[0], 170, 170);
                var rad = Math.PI / 180;
    function sector(cx, cy, r, startAngle, endAngle, params) {
      var x1 = cx + r * Math.cos(-startAngle * rad),
          x2 = cx + r * Math.cos(-endAngle * rad),
          y1 = cy + r * Math.sin(-startAngle * rad),
          y2 = cy + r * Math.sin(-endAngle * rad);
      return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    paper.text(10, 10, attrs.name).attr({'font-size': "14px", "font-weight": "bold", fill: "#70AD47", "text-anchor": "start"});
    sector(60, 70, 40, 30, 300, {fill: "#70AD47", stroke: "#C5C6C3"});
    sector(60, 70, 40, 300, 30, {fill: "#ED7D31", stroke: "#C5C6C3"});
    paper.text(40, 70, "142");
    paper.text(80, 70, "10");
    paper.text(135, 70, "73%").attr({'font-size': "28px", fill: "#B0D05C"});
    paper.text(135, 88, "test passed");
    paper.rect(10, 130, 100, 30).attr({stroke: "#c5e0b3", fill: "#c5e0b3"});
    paper.rect(110, 130, 40, 30).attr({stroke: "#f7cbac", fill: "#f7cbac"});
    paper.text(85, 140, "76%").attr({'font-size': "16px", fill: "#4c6b39"});
    paper.text(80, 155, "code covered");
          
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
            var paper = Raphael(element[0], 170, 170);
            paper.text(10, 10, attrs.name).attr({'font-size': "14px", "font-weight": "bold", fill: "#70AD47", "text-anchor": "start"});
            paper.image("img/computer.png", 10, 45, 60, 60);
            paper.image("img/computer.png", 100, 45, 60, 60);
            paper.text(20, 115, "Debug").attr({'font-size': "12px", fill: "#326ec1", "text-anchor": "start"});
            paper.text(110, 115, "Release").attr({'font-size': "12px", fill: "#326ec1", "text-anchor": "start"});
            paper.text(85, 155, "10:46am - 4/17/2014").attr({'font-size': "12px"});


          
        }
    }
});
