class AppCtrl {
  /// Este controlador no se usa, ver index.js
  constructor($locale, $timeout) {
    'ngInject';
    const ctrl = this;
    ctrl.currencySymbol = '$';
    ctrl.amount = 100;
    ctrl.posPre = $locale.NUMBER_FORMATS.PATTERNS[1].posPre;

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

  }
}

export default AppCtrl;
