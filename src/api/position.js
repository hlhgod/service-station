export default function getCurrentPosition() {
    let _this = this
    return new Promise((resolve, reject) => {
        AMap.plugin('AMap.Geolocation', function () {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                //   buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                //   zoomToAccuracy: true,     
                //  定位按钮的排放位置,  RB表示右下
                //   buttonPosition: 'RB'
            })

            geolocation.getCurrentPosition(function (status, result) {
                if (status == 'complete') {
                    onComplete(result)
                } else {
                    onError(result)
                }
            });

            function onComplete(data) {
                // data是具体的定位信息
                // console.log('定位信息：',data)
                resolve(data);
            }

            function onError(data) {
                // 定位出错
                AMap.plugin('AMap.CitySearch', function () {
                    var citySearch = new AMap.CitySearch();
                    citySearch.getLocalCity(function (states, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            //查询成功，result即为当前所在城市的信息
                            console.log('通过IP获取当前城市：', result)
                            resolve(data)
                        }else{
                            reject(result)
                        }
                    })
                })
            }
        })
    })
}

