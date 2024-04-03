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
        var valid = true;

        //kiểm tra các trường nhập vào
        //kiểm tra trường name
        if (!$scope.inputValue 
            || !$scope.inputValue.name
            || $scope.inputValue.name.length < 3
        ) {
            valid = false;
        }

        //kiểm tra trường description
        if (!$scope.inputValue 
            || !$scope.inputValue.description
            || $scope.inputValue.description.length > 100
        ) {
            valid = false;
        }
        //kiểm tra trường price
        if (!$scope.inputValue 
            || !$scope.inputValue.price //giá bỏ trống
            || $scope.inputValue.price <= 0 //giá ko âm
        ) {
            valid = false;
        }
        //nếu valid == true, tức là dữ liệu nhập vào hợp lệ
        if (valid) {
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
        } else {
            alert('Dữ liệu không hợp lệ')
        }
    }
}