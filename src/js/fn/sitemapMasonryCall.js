/**
 * Created by Administrator on 2015-10-09.
 */
var sitemapMasonry = []; // �� �ε� �Լ��� ����Ǹ� �̼Ҵ� ������Ʈ�� ���� ��.
var masonryOptions = {columnWidth: '.list-group-item', itemSelector: '.list-group-item'}
// �̼Ҵ� ���̾ƿ� ����
function masonryUi(oid){
    var $container = $('#'+oid+' .masonry-container');
    var $grid = $container.masonry();
    $grid.masonry(masonryOptions); // destroy
    return $grid;
};