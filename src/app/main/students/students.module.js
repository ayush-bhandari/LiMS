import StudentsController from './students.controller';
import './students.scss';
const MODULE_NAME = 'students';

angular
        .module(MODULE_NAME,[])
        .config(config)
        .controller('StudentsController',StudentsController);
    
    /** @ngInject */
    function config($stateProvider)
    {
        var studentsState = {
            name: 'students',
            url: '/students',
            template: require('./students.html'),
            controller: StudentsController,
            controllerAs: 'vm'
        }

        $stateProvider.state(studentsState);


    }
export default MODULE_NAME;