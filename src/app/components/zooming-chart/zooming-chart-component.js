function ZoomingChartController () {
  var vm = this;

  vm.test = 'OK';

  vm.toggleZoom = function () {
    vm.isFocused = true;

    console.log('xoom');
  }

}

module.exports = function (app) {
  app.component('zoomingChart', {
    controller: ZoomingChartController,
    templateUrl: 'components/zooming-chart/zooming-chart-tmpl.html'
  })
};