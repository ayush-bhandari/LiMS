import BooksController from './books.controller';
import './books.scss';
const MODULE_NAME = 'books';

angular
        .module(MODULE_NAME,[])
        .config(config)
        .controller('BooksController',BooksController);
    
    /** @ngInject */
    function config($stateProvider)
    {
        var booksState = {
            name: 'books',
            url: '/books',
            template: require('./books.html'),
            controller: BooksController,
            controllerAs: 'vm'
        }

        $stateProvider.state(booksState);


    }
export default MODULE_NAME;