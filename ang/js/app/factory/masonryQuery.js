// 미소니 레이아웃 쿼리 팩토리.
app.factory("masonryQuery",function() {
    return {
        setOption:function(list){
            setTimeout(function() {
                list.masonry({columnWidth: '.list-group-item', itemSelector: '.list-group-item'});
            },300);
        },
        change:function(list){
            setTimeout(function(){
                list.masonry('reloadItems');
                list.masonry('layout');
            },200);
            setTimeout(function(){
                list.masonry('layout');
            },300);
        },
        watch:function(list){
            setTimeout(function(){
                list.masonry("destroy");
                list.masonry();
                list.masonry({columnWidth: '.list-group-item', itemSelector: '.list-group-item'});
            },300);
        }
    }
});