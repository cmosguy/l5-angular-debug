export function loginFormComponent() {
    'ngInject';

    var component = {
        restrict: 'E',
        templateUrl: './views/app/components/login-form/login-form.component.html',
        controller: LoginFormController,
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };

    return component;
}

class LoginFormController{
    constructor(){
        'ngInject';

        //
    }
}

