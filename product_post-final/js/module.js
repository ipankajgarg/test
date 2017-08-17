var app = angular.module("myapp",[]);
//app.directive('fileInput', ['$parse', function ($parse) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attributes) {
//            element.bind('change', function () {
//                $parse(attributes.fileInput)
//                .assign(scope,element[0].files)
//                scope.$apply()
//            });
//        }
//    };
//}]);


app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
           });
        }
    }
}]);