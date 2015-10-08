_.getEntry = function(response){
    var cells = _.map(response.feed.entry,function(data){
        var o = {};
        _.each(data,function(item,key){
            if(key.indexOf("gsx$")!= -1){
                var nkey = key.split("gsx$")[1];
                o[nkey] = data[key].$t;
            }
        });
        return o;
    });
    cells = _.rest(cells); // �� ó�� �����͸� ����� ������.
    return cells;
};
