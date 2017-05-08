angular.module('your_app_name.auth.controllers', [])

	.controller('AuthCtrl', function ($scope) {

	})

	.controller('WelcomeCtrl', function ($rootScope, $scope, $ionicModal, show_hidden_actions, $state, AuthService) {

		$rootScope.$on('userLoggedIn', function (e, data) {
			AuthService.saveUser(data);
			$state.go('app.feed');
		});
		$rootScope.$on('userLoggedInerr', function (e, error) {
			// console.log(error);
			alert(error.message);
		});

		$scope.show_hidden_actions = show_hidden_actions;

		$scope.toggleHiddenActions = function () {
			$scope.show_hidden_actions = !$scope.show_hidden_actions;
		};

		$scope.facebookSignIn = function () {
			// console.log("doing facebbok sign in");
			AuthService.loginfacebook();
			// .then(function (response) {
			// 	alert('login success');
			// 	$state.go('app.feed');
			// }, function (err) {
			// 	$scope.credentials = {}
			// 	alert('login error');
			// });

		};

		$scope.googleSignIn = function () {
			console.log("doing google sign in");
			$state.go('app.feed');
		};

		$scope.twitterSignIn = function () {
			console.log("doing twitter sign in");
			$state.go('app.feed');
		};

		$ionicModal.fromTemplateUrl('views/app/legal/privacy-policy.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.privacy_policy_modal = modal;
		});

		$ionicModal.fromTemplateUrl('views/app/legal/terms-of-service.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.terms_of_service_modal = modal;
		});

		$scope.showPrivacyPolicy = function () {
			$scope.privacy_policy_modal.show();
		};

		$scope.showTerms = function () {
			$scope.terms_of_service_modal.show();
		};
	})

	.controller('LogInCtrl', function ($rootScope, $scope, $state, AuthService) {

		$rootScope.$on('userLoggedIn', function (e, data) {
			AuthService.saveUser(data);
			$state.go('app.feed');
		});
		$rootScope.$on('userLoggedInerr', function (e, error) {
			// console.log(error.message);
			alert(error.message);
		});


		$scope.doLogIn = function (user) {
			window.localStorage.user = user;
			var login = {
				username: user.username,
				password: user.password
			}
			AuthService.loginUser(login);
			// .then(function (response) {
			// 	// console.log('success');
			// 	alert('success');
			// 	$state.go('app.feed');

			// }, function (err) {
			// 	$scope.credentials = {}
			// 	alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
			// });
		};
	})

	.controller('SignUpCtrl', function ($scope, $rootScope, $state, AuthService) {
		$rootScope.$on('userLoggedIn', function (e, data) {
			AuthService.saveUser(data);
			$state.go('app.feed');
		});
		$rootScope.$on('userLoggedInerr', function (e, error) {
			// console.log(error.message);
			alert(error.message);
		});
		$scope.user = {}
		$scope.doSignUp = function (user) {
			// console.log(JSON.stringify(user));
			AuthService.signup(user);
			// .then(function (response) {
			// 	alert('signup success');
			// 	$scope.user = {}
			// 	$state.go('app.feed');
			// }, function (err) {

			// });
			// console.log("doing sign up");
			// $state.go('app.feed');
		};
	})

	.controller('ForgotPasswordCtrl', function ($scope, $state) {
		$scope.requestNewPassword = function () {
			console.log("requesting new password");
			$state.go('app.feed');
		};
	})

	;
