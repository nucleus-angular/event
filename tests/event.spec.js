describe('Event', function(){
  var $compile, $scope;

  beforeEach(module('nag.event'));

  beforeEach(inject(function($injector) {
    $scope = $injector.get('$rootScope');
    $compile = $injector.get('$compile');

    $scope.eventData = 0;
    $scope.event1 = function() {
        $scope.eventData += 1;
    };
  }));

  var setupElement = function(scope, eventObject) {
    var element = $compile('<div nag-event="' + eventObject + '"></div>')(scope);
    scope.$digest();
    return element;
  }

  it('should with custom events', function() {
    var element = setupElement($scope, '{\'test\': event1}');

    element.trigger('test');

    expect($scope.eventData).toEqual(1);
  });
});
