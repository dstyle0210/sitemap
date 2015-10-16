// DOM구조 로딩 쿼리 팩토리.
app.factory("domQuery",function(){
    return {
        getDom:function(selector){
            var temp = {ctrl:$(selector)};
            temp.list = temp.ctrl.find(".list-group");
            temp.loader = temp.ctrl.find(".loader");
            temp.refreshBtn = temp.ctrl.find(".refresh");
            temp.loading = function(){
                temp.loader.show();
                temp.refreshBtn.hide();
            };
            temp.loaded = function(){
                temp.loader.hide();
                temp.refreshBtn.show();
            };
            return temp;
        }
    }
});