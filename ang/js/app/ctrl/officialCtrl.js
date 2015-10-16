app.controller("officialCtrl",function($scope,siteQuery,domQuery,masonryQuery) {
    var URL = officialListUrl;
    var formURL = officialFormUrl;
    var dom = domQuery.getDom("#officialCtrl"); // 컨트롤러 하부 DOM구조 로딩.
    $scope.tags = _.filter(tagsData,function(tagJson){ return tagJson.type == "official";}); // 입력을 위한 태그목록.

    dom.loading(); // 로딩중~
    siteQuery.getData(URL,function(cells){
        $scope.sites = cells; // 사이트 리스트 정보 전달
        dom.loaded(); // 로딩 종료~
        masonryQuery.setOption(dom.list); // 미쏘니 레이아웃 적용.
    });

    $scope.changeVal = function(){ // 정렬내용 바꾸면 실행.
        masonryQuery.change(dom.list); // 데이터가 바뀌니 masonry도 재로딩
    };

    $scope.$watch("sites",function(){ // 사이트가 바뀌면 실행
        if($scope.sites){
            masonryQuery.watch(dom.list); // 데이터를 지우고 새로쓰는 상황으로 적용.
        };
    });

    $scope.refresh = function(){ // 사이트 리스트 재로딩.
        dom.loading(); // 로딩중~
        siteQuery.getData(URL,function(cells) {
            $scope.sites = cells; // 데이터 새로 로딩함.
            dom.loaded(); // 로딩 종료~
        });
    };



    // 업데이트 요청
    $scope.update = function(){
        var data = {
            name:$scope.name,
            url:$scope.url,
            desc:$scope.desc,
            regname:$scope.regname,
            regemail:$scope.regemail
        };

        var tagChecked = dom.ctrl.find("form input[type='checkbox']:checked");
        data.tag = (_.map(tagChecked,function(inp){return $(inp).val()})).join(",");

        $.ajax({
            url: formURL,
            data: data,
            type: "POST",
            success: function(response) {
                $scope.refresh();
                $scope.name = "";
                $scope.url = "";
                $scope.desc = "";
                $scope.regname = "";
                $scope.regemail = "";
                dom.ctrl.find("form input[type='checkbox']").removeAttr("checked");
            }.bind(this),
            error: function(xhr, status, err) {

            }.bind(this)
        });

    };
});