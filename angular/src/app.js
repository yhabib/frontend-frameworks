import { SearchFieldCtrl, WikiService } from './module1';
import angular from 'angular';

const app = angular.module('App', []);
  
// app
//   .config(function($sceDelegateProvider) {  
//     $sceDelegateProvider.resourceUrlWhitelist([
//     // Allow same origin resource loads.
//     'self',
//     // Allow loading from our assets domain. **.
//     'https://en.wikipedia.org/w/**'
//     ]);
//   });

app
  .controller('SearchFieldCtrl', SearchFieldCtrl)
  .service('WikiService', WikiService);