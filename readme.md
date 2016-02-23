## Debug for Laravel 5.1 Angular Material Starter

## Setup

```bash
composer create-project jadjoubran/laravel5-angular-material-starter --prefer-dist
cd laravel5-angular-material-starter
npm install -g gulp bower
npm install
bower install
#fix database credentials in .env
php artisan migrate
```

Next click on the register tab, you'll see the <a href="https://docs.angularjs.org/error/$injector/modulerr?p0=ng&p1=Error:%20%5B$injector:strictdi%5D%20function($provide)%20is%20not%20using%20explicit%20annotation%20and%20cannot%20be%20invoked%20in%20strict%20mode%0Ahttp:%2F%2Ferrors.angularjs.org%2F1.4.9%2F$injector%2Fstrictdi%3Fp0%3Dfunction(%2524provide)%0A%20%20%20%20at%20http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:68:12%0A%20%20%20%20at%20Function.annotate%20%5Bas%20$$annotate%5D%20(http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:3804:17)%0A%20%20%20%20at%20Object.invoke%20(http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:4513:36)%0A%20%20%20%20at%20runInvokeQueue%20(http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:4441:35)%0A%20%20%20%20at%20http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:4450:11%0A%20%20%20%20at%20forEach%20(http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:341:20)%0A%20%20%20%20at%20loadModules%20(http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:4431:5)%0A%20%20%20%20at%20createInjector%20(http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:4356:11)%0A%20%20%20%20at%20doBootstrap%20(http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:1677:20)%0A%20%20%20%20at%20bootstrap%20(http:%2F%2Flocalhost:8000%2Fjs%2Fvendor.js:1698:12">errors</a>
