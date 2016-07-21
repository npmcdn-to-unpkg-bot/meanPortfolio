/**
 * Created by Tyler on 3/24/2016.
 */
angular.module('meanPortfolio',['ngComponentRouter','about-module', 'projects-module'])
    /*.config(function($locationProvider){
        $locationProvider.html5Mode(true);
    })*/
    .value('$routerRootComponent','main')
    .config(function($locationProvider){
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })
    .component('main', {
        template: '<ng-outlet></ng-outlet>',
        controller: MainCtrl,
        $routeConfig: [
            {path: '/', name: 'AboutMe', component: 'aboutComponent', useAsDefault:true},
            {path: '/projects/', name: 'Projects', component: 'projectsComponent'}
        ]
    });

function MainCtrl($location, $locationProvider){
    var ctrl = this;
    ctrl.navShow = false;

    ctrl.toggleNav = function(){
        ctrl.navShow = true;
    };

}

MainCtrl.$inject = ['$location'];

