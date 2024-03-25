window.ListController = function ($scope,$http) {
    var apiUrl = "http://localhost:3000/products";

    //khai báo hàm lấy dữ liệu
    $scope.getProducts = function () {
        $http.get(apiUrl).then(function ($response) {
            $scope.products = $response.data;
        })
    }

    //gọi hàm (thực thi)
    $scope.getProducts();
}
