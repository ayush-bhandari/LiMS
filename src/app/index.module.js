import '../../node_modules/angular/angular.min.js';
import '../../node_modules/angular-animate/angular-animate.min.js';
import '../../node_modules/angular-aria/angular-aria.min.js';
import '../../node_modules/angular-material/angular-material.min.js';
import '../../node_modules/angular-resource/angular-resource.min.js';
import '../../node_modules/angular-messages/angular-messages.min.js';
import '../../node_modules/angular-sanitize/angular-sanitize.min.js';
import '../../node_modules/angular-ui-router/release/angular-ui-router.min.js';
import '../../node_modules/material-design-lite/material.min.js';
import '../../node_modules/ng-http-progress/dist/ng-http-progress.min.js';

import '../../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
import '../../node_modules/angular-material/angular-material.min.css';
import '../../node_modules/material-design-lite/dist/material.blue-pink.min.css';
import '../../node_modules/ng-http-progress/dist/ng-http-progress.min.css';

import materialIcons from 'material-design-icons/iconfont/material-icons.css';

import IndexConfig from './index.config';
import IndexController from './index.controller';
import IndexRoute from './index.route';

import './index.scss';

import AppToolbar from './toolbar/toolbar.module';

import home from './main/home/home.module';
import books from './main/books/books.module';
import students from './main/students/students.module';

angular
	.module('app',[
		// third party modules
		'ngMaterial',
		'ngMessages',
		'ngSanitize',
		'ngResource',
		'ui.router',
		'thatisuday.ng-http-progress',
		
		// app modules
		AppToolbar,

		home,
		books,
		students
	])
	.controller('IndexController',IndexController)
	.config(IndexConfig)
	.config(IndexRoute);