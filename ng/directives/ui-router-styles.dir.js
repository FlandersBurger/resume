angular.module('app')
	.directive('head', [
		'$rootScope',
		'$state',
		'$compile',
		'$interpolate',
		function ($rootScope, $state, $compile, $interpolate) {

			var getStyle = function getStyle(templateStyleUrl) {

				var style = {
					href: templateStyleUrl,
					rel: 'stylesheet'
				};

				if (style.href.match(/\.less$/)) {
					style.rel = 'stylesheet/less';
				}

				return style;

			};

			var getStyles = function getStyles(state) {

				var states = {};

				//Check state for styles
				while (state.name !== '') {
					var parent = $state.get('^', state);

					//Initiate our view list
					if (!states[parent.name]) {
						states[parent.name] = {};
					}

					//Check the templateStyle
					if (state.templateStyleUrl) {
						if (!states[parent.name]['']) {
							states[parent.name][''] = getStyle(state.templateStyleUrl);
						}
					}

					//Check views
					if (state.views) {
						_.forEach(state.views, function (view, key) {

							//Check if we have a style
							if (!view.templateStyleUrl) {
								return;
							}

							//Check if we are targeting some parent
							if ((key = key.split('@'))[1]) {
								//Check if we have styles for that parent
								if (!states[key[1]]) {
									states[key[1]] = {};
								}

								//Place the style on some parent's view
								if (!states[key[1]][key[0]]) {
									states[key[1]][key[0]] = getStyle(view.templateStyleUrl);
								}

								return;
							}

							//Place the style on our parent's view
							states[parent.name][key[0]] = getStyle(view.templateStyleUrl);

						});
					}

					//Continue with the parent
					state = parent;
				}

				//Flatten the list
				var flat = [];
				_.forEach(states, function (views) {

					_.forEach(views, function (style) {

						if (!_.includes(flat, style)) {
							flat.push(style);
						}

					});

				});

				//Reverse it so we have a proper hierarchy
				flat.reverse();

				return flat;

			};

			return {
				restrict: 'E',
				link: function (scope, elem) {

					scope.templateStyles = [];

					var html = '<link ng-attr-rel="{{style.rel}}" ng-repeat="style in templateStyles" ng-href="{{style.href}}">';

					html = html.replace(/\{\{/g, $interpolate.startSymbol());
					html = html.replace(/\}\}/g, $interpolate.endSymbol());

					elem.append($compile(html)(scope));

					$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

						scope.templateStyles = getStyles(toState);

					});

				}
			};

		}
	]);
