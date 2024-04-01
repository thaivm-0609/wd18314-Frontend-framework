window.EditController = function ($scope,$http,$routeParams,$location) {
    var apiUrl = 'http://localhost:3000/products';
    var id = $routeParams.id;

    $scope.getDetail = function () {
        $http.get(`${apiUrl}/${id}`).then(function ($response) {
            $scope.product = $response.data; //dùng cho màn detail
            $scope.inputValue = {
                name: $response.data.name,
                description: $response.data.description,
                price: $response.data.price,
            }
        })
    }

    $scope.getDetail();

    //thực hiện update dữ liệu
    $scope.onUpdate = function () {
        //lấy dữ liệu người dùng nhập vào form
        var updatedProduct = {
            ...$scope.inputValue
        }

        $http.put(
            `${apiUrl}/${id}`,
            updatedProduct
        ).then(function (res) {
            //kiểm tra xem json-server trả về thành công hay không
            if (res.status == 200) {
                alert('Cập nhật thành công!');
                $location.path('/list');
            }
        })
    }
}