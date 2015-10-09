/**
 * Created by Administrator on 2015-10-09.
 */
// 미소니 레이아웃 적용
function masonryUi(){
    var $container = $('.masonry-container');
    var $grid = $container.masonry();
    var masonryOptions = {columnWidth: '.list-group-item', itemSelector: '.list-group-item'}
    $grid.masonry(masonryOptions); // destroy
};