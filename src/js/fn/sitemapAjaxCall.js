
// 대표사이트 호출
function callSiteListBox(siteType){
    var siteType = siteType;
    if(siteType=="official"){
        $.ajax({
            url: officialListUrl,
            dataType: 'json',
            cache: false,
            success: function(response) {
                $("#officialList").html("");

                React.render(
                    React.createElement(SiteListBox, {sites:_.getEntry(response)}),
                    document.getElementById('officialList')
                );

                setTimeout(function(){
                    masonryUi();
                },100);
            }.bind(this),
            error: function(xhr, status, err) {

            }
        });
    }else{
        $.ajax({
            url: pluginListUrl,
            dataType: 'json',
            cache: false,
            success: function(response) {
                $("#pluginList").html("");

                React.render(
                    React.createElement(SiteListBox, {sites:_.getEntry(response)}),
                    document.getElementById('pluginList')
                );

                setTimeout(function(){
                    masonryUi();
                },100);
            }.bind(this),
            error: function(xhr, status, err) {

            }
        });
    }
};


// 대표사이트 데이터 넣기
function callSiteFormBox(url,data){
    var siteType;
    if(url==officialListUrl){
        siteType = "official";
    }else if(url==pluginListUrl){
        siteType = "plugin";
    }else if(url==postsListUrl){
        siteType = "posts";
    };
    $.ajax({
        url: url,
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