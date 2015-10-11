// 어느쪽 데이터가 움직이는지 구분자
function getSiteTypeJson(siteType){
    var o = {listurl:"",formurl:"",targetdiv:""};
    switch(siteType){
        case "official":
            o.listurl = officialListUrl;
            o.formurl = officialFormUrl;
            o.targetdiv = "officialList";
            break;
        case "plugin":
            o.listurl = pluginListUrl;
            o.formurl = pluginFormUrl;
            o.targetdiv = "pluginList";
            break;
        case "posts":
            o.listurl = postsListUrl;
            o.formurl = postsFormUrl;
            o.targetdiv = "postsList";
            break;
    };
    return o;
}

// 대표사이트 호출
function callSiteListBox(siteType){
    var o = getSiteTypeJson(siteType);
    // 로딩 시작
    $("#"+o.targetdiv).html("");
    var aside = $("#"+siteType+"Aside");
    console.log(aside);
    aside.find("span").show();
    aside.find("button").hide();


    $.ajax({
        url: o.listurl,
        dataType: 'json',
        cache: false,
        success: function(response) {
            React.render(
                React.createElement(SiteListBox, {sites:_.getEntry(response),type:siteType}),
                document.getElementById(o.targetdiv)
            );

            setTimeout(function(){
                masonryUi();
            },200);
            setTimeout(function(){
                aside.find("span").hide();
                aside.find("button").show();
            },500);

        }.bind(this),
        error: function(xhr, status, err) {

        }
    });
};


// 대표사이트 데이터 넣기
function callSiteFormBox(siteType,data){
    var o = getSiteTypeJson(siteType);
    $.ajax({
        url: o.formurl,
        data: data,
        type: "POST",
        success: function(response) {
            callSiteListBox(siteType);
        }.bind(this),
        error: function(xhr, status, err) {
            // 오류시 사용
        }.bind(this)
    });
};