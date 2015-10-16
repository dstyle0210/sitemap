// 사이트 리스트 로딩 쿼리 팩토리.
app.factory("siteQuery",function($http){
    return {
        getData:function(url,cbFn){
            $http.get(url).success(function (response) {
                var cells = _.map(response.feed.entry, function (data) {
                    var o = {};
                    // 1차정제(스프레드시트 데이터)
                    for (key in data) {
                        if (key.indexOf("gsx$") != -1) {
                            var nkey = key.split("gsx$")[1];
                            o[nkey] = data[key].$t;
                        }
                    }
                    return o;
                });
                _.each(cells,function(cell){
                    if(cell.tag){
                        // 라벨을 표현하기 위해 tag을 분리.
                        cell.tagLists = _.map((cell.tag).split(","),function(tagname){
                            return {name:tagname, color:(_.where(tagsData,{name:tagname}))[0].color};
                        });
                    };
                    if(cell.lang){
                        cell.langColor = (_.where(tagsData,{name:cell.lang}))[0].color;
                    };
                });
                cbFn.call(null,_.shuffle(cells));
            });
        }
    };
});