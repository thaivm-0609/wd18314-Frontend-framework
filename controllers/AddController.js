window.AddController = function ($scope,$http,$location) {
    var apiUrl = 'http://localhost:3000/products';

    $scope.onSubmit = function () {
        //lấy
        var newProduct = {
            ...$scope.inputValue
        }

        $http.post(
            apiUrl,
            newProduct
        ).then(function ($response) {
            if ($response.status == 201) {
                $location.path('list');
            }
        }, function (errors) {
            console.log(errors);
        })
    }
}