// angular.module('your_app_name.auth.services', [])
//     .service('AuthService', function ($rootScope, $http, $q, $auth) {
//         var apiURL = 'http://localhost:3000/api';

//         this.successAuth = function (data) {
//             $rootScope.$emit('userLoggedIn', data.data);
//         };
//         this.failedAuth = function (error) {
//             $rootScope.$emit('userLoggedInerr', error.data);
//         };

//         this.loginUser = function (itm) {
//             $auth
//                 .login(itm, {
//                     url: 'http://localhost:3000/api/auth/signin'
//                 })
//                 .then(this.successAuth)
//                 .catch(this.failedAuth);
//             //or
//             // var dfd = $q.defer();
//             // $auth
//             //     .login(itm, {
//             //         url: 'http://localhost:3000/api/auth/signin'
//             //     })
//             //     .then(function (successAuth) {
//             //         dfd.resolve(successAuth);
//             //     })
//             //     .catch(function (failedAuth) {
//             //         dfd.reject(failedAuth);

//             //     });
//             // return dfd.promise;
//             //or
//             // var dfd = $q.defer();
//             // $http.post(apiURL + '/auth/signin', itm).success(function (response) {
//             //     dfd.resolve(response);
//             // }).error(function (error) {
//             //     dfd.reject(error);
//             // });
//             // return dfd.promise;
//         }

//         this.signup = function (itm) {
//             $auth
//                 .signup(itm, {
//                     url: 'http://localhost:3000/api/auth/signup'
//                 })
//                 .then(this.successAuth)
//                 .catch(this.failedAuth);
//             //or
//             // var dfd = $q.defer();
//             // $http.post(apiURL + '/auth/signup', itm).success(function (response) {
//             //     dfd.resolve(response);
//             // }).error(function (error) {
//             //     dfd.reject(error);
//             // });
//             // return dfd.promise;
//         }

//         this.loginfacebook = function () {
//             //var dfd = $q.defer();

//             $auth
//                 .authenticate('facebook')
//                 .then(this.successAuth)
//                 .catch(this.failedAuth);

//             // return dfd.promise;
//             // $auth
//             //   .authenticate('facebook')
//             //   .then(this.successAuth)
//             //   .catch(this.failedAuth);

//         }

//     });