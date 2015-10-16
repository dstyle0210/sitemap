/**
 * Created by Administrator on 2015-10-09.
 */
var sitemapMasonry = []; // 각 로딩 함수가 실행되며 미소니 오브젝트가 담기게 됨.
var masonryOptions = {columnWidth: '.list-group-item', itemSelector: '.list-group-item'}
// 미소니 레이아웃 적용
function masonryUi(oid){
    var $container = $('#'+oid+' .masonry-container');
    var $grid = $container.masonry();
    $grid.masonry(masonryOptions); // destroy
    return $grid;
};