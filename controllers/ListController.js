window.ListController = function ($scope,$http,$location) {
    var apiUrl = "http://localhost:3000/products";

    //khai báo hàm lấy dữ liệu
    $scope.getProducts = function () {
        $http.get(apiUrl).then(function ($response) {
            $scope.products = $response.data;
        })
    }

    //gọi hàm (thực thi)
    $scope.getProducts();

    $scope.onDetail = function (id) {
        $location.path(`/detail/${id}`);
    }
}
