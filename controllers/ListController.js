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

    $scope.onEdit = function (id) {
        $location.path(`/edit/${id}`);
    }

    $scope.onDelete = function (id) {
        if (confirm('Are you sure?')) {
            $http.delete(`${apiUrl}/${id}`).then(function (res) {
                if (res.status == 200) {
                    $scope.getProducts();
                }
            })
        }
    }
}
