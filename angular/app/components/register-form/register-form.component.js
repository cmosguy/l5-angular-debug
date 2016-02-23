export function registerFormComponent() {
    'ngInject';

    var component = {
        restrict: 'E',
        templateUrl: './views/app/components/register-form/register-form.component.html',
        controller: RegisterFormController,
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };

    return component;
}

class RegisterFormController{
    constructor(){
        'ngInject';

        //
    }
}

