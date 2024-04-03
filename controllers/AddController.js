window.AddController = function ($scope,$http,$location) {
    var apiUrl = 'http://localhost:3000/products';

    $scope.onSubmit = function () {
        //khởi tạo biến valid để kiểm tra dữ liệu nhập vào
        //có hợp lệ hay không
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
            //lấy dữ liệu từ form
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
        } else {
            alert('Dữ liệu không hợp lệ');
        }
    }
}