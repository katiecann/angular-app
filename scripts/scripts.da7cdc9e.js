"use strict";angular.module("angularAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("angularAppApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="poem"> <h4>A Minor Bird by Robert Frost</h4> <p>I have wished a bird would fly away, And not sing by my house all day; Have clapped my hands at him from the door When it seemed as if I could bear no more. The fault must partly have been in me. The bird was not to blame for his key. And of course there must be something wrong In wanting to silence any song. </p> <h5><a href="http://www.familyfriendpoems.com/poem/a-minor-bird-by-robert-frost#ixzz3h4FRwDYK">Source: Family Friend Poems</a></h5> </div> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div>'),a.put("views/main.html",'<div class="jumbotron"> <span class="glyphicon glyphicon-fire" aria-hidden="true"></span><span class="glyphicon glyphicon-fire" aria-hidden="true"></span><span class="glyphicon glyphicon-fire" aria-hidden="true"></span> <h1>Good Tidings!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <div class="panel panel-success"> <div class="panel-heading"> <h4 class="panel-title">HTML5 Boilerplate</h4> </div> <div class="panel-body">HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</div> </div> <div class="panel panel-success"> <div class="panel-heading"> <h4 class="panel-title">Angular</h4> </div> <div class="panel-body">AngularJS is a toolset for building the framework most suited to your application development.</div> </div> <div class="panel panel-success"> <div class="panel-heading"> <h4 class="panel-title">Karma</h4> </div> <div class="panel-body">Spectacular Test Runner for JavaScript.</div> </div></div>')}]);