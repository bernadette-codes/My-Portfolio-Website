
(function(){
    var app = angular.module('portfolio', []);

    app.controller('IconsController', function($scope){
        $scope.mediaIcons = [
            {href: 'http://bit.ly/1ZQEuiB', photo: 'img/github.png', alt: 'Github'},
            {href: 'http://bit.ly/1RXNWwm', photo: 'img/linkedinblack.png', alt: 'LinkedIn'},
            {href: 'https://bernadetteengleman.wordpress.com/', photo: 'img/wordpress.jpg', alt: 'wordpress'}
        ];
    });

    app.controller('SkillsController', ['$scope', '$http', function($scope, $http){

        $http.get('data/codingSkills.json').success(function(data){
            $scope.codingSkills = data;
        });

    }]);

    app.controller('ToolsController', ['$scope', '$http', function($scope, $http){

        $http.get('data/tools.json').success(function(data){
            $scope.tools = data;
        });

    }]);

    app.controller('ProjectController', ['$scope', '$http', function($scope, $http){

        $http.get('data/projects.json').success(function(data){
            $scope.projects = data;
        });

    }]);

    app.directive('mediaIcons', function(){
        return {
            template:
            '<span ng-repeat="icon in mediaIcons">' +
            '<a href="{{icon.href}}" target="_blank" title="{{icon.alt}}" >' +
            '<img src="{{icon.photo}}" alt="{{icon.alt}}" width="30" class="socialIcons">' +
            '</a>' +
            '</span>'
        };
    });
    
})();
