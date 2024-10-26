/*
$ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var angular = require('angular');
var angularSanitize = require('angular-sanitize');
var angularAnimate = require('angular-animate');
*/
angular.module("app", [
  "ui.router",
  "ui.bootstrap",
  "ngAnimate",
  "ngSanitize",
  "ngMaterial",
  "ngMessages",
  "ngDragDrop",
  "ngTagsInput",
  "vcRecaptcha",
  "chart.js",
  "tc.chartjs",
  "infinite-scroll",
]);
