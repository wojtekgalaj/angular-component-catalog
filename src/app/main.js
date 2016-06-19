var angular = require('angular');


var app = angular.module('app', [])
    .controller('MapCtrl', function () {
        var vm = this;
    
        vm.state = {
                rightPanelOpen: false
        };

        vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      
        vm.toggleRightPanel = function () {
            vm.state.rightPanelOpen = !vm.state.rightPanelOpen;
        };

    });

require('./components/right-panel/right-panel-component')(app);
require('./components/zooming-chart/zooming-chart-component')(app);

