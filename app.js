
(function(){
    var app = angular.module('portfolio', []);

    app.controller('skillsController', function($scope){
        $scope.codingSkills = [
            {name: 'HTML5', photo: 'img/skills/html.png'},
            {name: 'CSS3', photo: 'img/skills/css.png'},
            {name: 'Bootstrap', photo: 'img/skills/bootstrap.png'},
            {name: 'JavaScript', photo: 'img/skills/javascript.png'},
            {name: 'jQuery', photo: 'img/skills/jquery.png'},
            {name: 'AngularJS', photo: 'img/skills/angularjs.png'},
            {name: 'SQL', photo: 'img/skills/sql.png'},
            {name: 'NoSQL', photo: 'img/skills/mongodb.png'}
        ];
    });

    app.controller('projectController', function($scope){
        $scope.projects = [
            {
                name: 'Bakeshop Website',
                link: 'Websites/Panettiere%20Bakeshop/index.html',
                photo: 'img/portfolio/panattierethumbnail.jpg',
                codes: ['AngularJS', 'JavaScript', 'jQuery', 'Bootstrap']
            },
            {
                name: 'Real Estate Website',
                link: 'http://www.dmcimanilacondos.com',
                photo: 'img/portfolio/dmcithumbnail.jpg',
                codes: ['AngularJS', 'JavaScript', 'jQuery', 'HTML5', 'Bootstrap']
            },
            {
                name: 'Nail Salon Website',
                link: 'Websites/Kukolicious%20Nail%20Salon/index.html',
                photo: 'img/portfolio/kukoliciousthumbnail.jpg',
                codes: ['AngularJS', 'JavaScript', 'jQuery', 'CCS3', 'Bootstrap']
            },
            {
                name: 'Hair Salon Website',
                link: 'Websites/Korona%20Hair%20Salon/index.html',
                photo: 'img/portfolio/koronathumbnail.jpg',
                codes: ['AngularJS', 'JavaScript', 'jQuery', 'CCS3', 'Bootstrap']
            },
            {
                name: 'Cats and Dogs Game',
                link: 'Apps/Cats%20and%20Dogs/catsdogs.html',
                photo: 'img/portfolio/catsdogsthumbnail.jpg',
                codes: ['JavaScript', 'jQuery', 'CSS3', 'Bootstrap']
            },
            {
                name: 'Weather App',
                link: 'Apps/Weather%20App/weatherapp.html',
                photo: 'img/portfolio/weatherappthumbnail.jpg',
                codes: ['JavaScript', 'jQuery', 'HTML5', 'Bootstrap']
            },
            {
                name: 'Kill The Fly Game',
                link: 'Apps/Fly%20Game/fly.html',
                photo: 'img/portfolio/flythumbnail.jpg',
                codes: ['JavaScript', 'jQuery', 'CSS3', 'Bootstrap']
            },
            {
                name: 'Pop The Bubbles Game',
                link: 'Apps/Pop%20Game/pop.html',
                photo: 'img/portfolio/popthumbnail.jpg',
                codes: ['JavaScript', 'jQuery', 'Bootstrap']
            },
            {
                name: 'Find the Ghost Game',
                link: 'Apps/Ghost%20Game/ghost.html',
                photo: 'img/portfolio/ghostthumbnail.jpg',
                codes: ['JavaScript', 'jQuery', 'Bootstrap']
            },
            {
                name: 'Fortune Cookie App',
                link: 'Apps/Fortune%20Cookie/fortunecookie.html',
                photo: 'img/portfolio/fortunecookiethumbnail.jpg',
                codes: ['JavaScript', 'jQuery', 'Bootstrap']
            },
            {
                name: 'Birth Month Meaning App',
                link: 'Apps/Birth%20Month%20Meaning/birthmonthmeaning.html',
                photo: 'img/portfolio/birthmonththumbnail.jpg',
                codes: ['JavaScript', 'jQuery', 'Bootstrap']
            }
        ];
    });

    app.directive('socialMediaIcons', function(){
        return {
            template:
            '<!-- Github Icon Link -->' +
            '<a href="http://bit.ly/1ZQEuiB" target="_blank">' +
                '<img src="img/github.png" alt="Github" width="30" class="socialIcons">' +
            '</a>' +
            '<!-- Linkedin Icon Link -->' +
            '<a href="http://bit.ly/1RXNWwm" target="_blank">' +
                '<img src="img/linkedinblack.png" alt="LinkedIn" width="30" class="socialIcons">' +
            '</a>' +
            '<!-- Wordpress Icon Link -->' +
            '<a href="https://bernadetteengleman.wordpress.com/" target="_blank">' +
                '<img src="img/wordpress.jpg" alt="Wordpress" width="29" class="socialIcons">' +
            '</a>'
        };
    });

})();
