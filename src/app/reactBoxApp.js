
// 대표사이트 호출
function callSiteListBox(){
    $("#officialList").html("로딩중");
    $.ajax({
        url: officialListUrl,
        dataType: 'json',
        cache: false,
        success: function(response) {

            React.render(
                React.createElement(SiteListBox, {sites:_.getEntry(response)}),
                document.getElementById('officialList')
            );

            setTimeout(function(){
                masonryUi();
            },1000);
        }.bind(this),
        error: function(xhr, status, err) {

        }
    });
};



// 미소니 레이아웃 적용
function masonryUi(){
    var $container = $('.masonry-container');
    var $grid = $container.masonry();
    var masonryOptions = {columnWidth: '.list-group-item', itemSelector: '.list-group-item'}
    $grid.masonry(masonryOptions); // destroy
};