/**
 * Created by Tyler on 3/24/2016.
 */
angular.module('about-module', [])
    .component('aboutComponent',{
       templateUrl: 'public/views/about.ejs',
        controller: aboutCtrl
    });

function aboutCtrl($timeout){
    
}