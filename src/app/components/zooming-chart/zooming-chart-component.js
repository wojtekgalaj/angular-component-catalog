function ZoomingChartController () {
  var vm = this;
  
  this.state = {
    isFocused: false
  }
  
  vm.toggleZoom = function () {
    vm.state.isFocused = !vm.state.isFocused;

    console.log('xoom');
  }

}

module.exports = function (app) {
  app.component('zoomingChart', {
    controller: ZoomingChartController,
    templateUrl: 'components/zooming-chart/zooming-chart-tmpl.html'
  })
};