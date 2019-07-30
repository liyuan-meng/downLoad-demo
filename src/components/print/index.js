import angular from 'angular';
import template from './index.tpl.html';
import controller from './Controller';
import './index.less';

const ddo = {
    template,
    controller,
    controllerAs: '$ctrl',
    bindings: {
    }
};

export default angular.module('print', [])
    .component('print', ddo)
    .name;
