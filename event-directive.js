/**
 * Originally created for the angular-ui project
 * https://github.com/angular-ui
 *
 * Angular UI Documentation (with modified interface):
 * General-purpose Event binding. Bind any event not natively supported by Angular
 * Pass an object with keynames for events to nag-event
 * Allows $event object and $params object to be passed
 *
 * ```html
 * <input nag-event="{focus : 'counter++', blur : 'someCallback()'}" />
 * ```
 *
 * ```html
 * <input nag-event="{myCustomEvent : 'myEventHandler($event, $params)'}" />
 * ```
 *
 * @module nag.event
 * @ngdirective nagEvent
 *
 * @nghtmlattribute nag-event {object} The event(s) to bind with their callbacks
 */
angular.module('nag.event')
.directive('nagEvent', [
  '$parse',
  function($parse) {
    return function(scope, elm, attributes) {
      var events = scope.$eval(attributes.nagEvent);
      angular.forEach(events, function(nagEvent, eventName) {
        var fn = $parse(nagEvent);
        elm.bind(eventName, function(evt) {
          var params = Array.prototype.slice.call(arguments);
          //Take out first parameter (event object);
          params = params.splice(1);

          //Modification - Prevent $apply already is progress error message
          if(scope.$root.$$phase) {
            fn(scope, {$event: evt, $params: params});
          } else {
            scope.$apply(function() {
              fn(scope, {$event: evt, $params: params});
            });
          }
        });
      });
    };
  }
]);
