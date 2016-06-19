function RightPanelControler () {
  var that = this;

  this.open = true;

}

module.exports = function (app) {
  app.component('rightPanel', {
    controller: RightPanelControler,
    controllerAs: 'rp',
    templateUrl: 'components/right-panel/right-panel-tpl.html',
    bindings: {
      isOpen: '<'
    }
  })
};