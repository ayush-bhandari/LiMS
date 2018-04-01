import HomeController from './home.controller';
import './home.scss';
const MODULE_NAME = 'home';

angular
        .module(MODULE_NAME,[])
        .config(config)
        .controller('HomeController',HomeController);
    
    /** @ngInject */
    function config($stateProvider)
    {
        var homeState = {
            name: 'home',
            url: '/home',
            template: require('./home.html'),
            controller: HomeController,
            controllerAs: 'vm'
        }

        $stateProvider.state(homeState);


    }
export default MODULE_NAME;