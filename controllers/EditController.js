window.EditController = function ($scope,$http,$routeParams) {
    var apiUrl = 'http://localhost:3000/products';
    var id = $routeParams.id;

    $scope.getDetail = function () {
        $http.get(`${apiUrl}/${id}`).then(function ($response) {
            $scope.product = $response.data;
        })
    }

    $scope.getDetail();
}