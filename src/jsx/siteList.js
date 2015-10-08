// 사이트 등록하기.
var siteListBox = React.createClass({
    getSiteList:function(){
        var sites = this.state.sites;
        var categoryArr = [];
        _.each(sites,function(item,key){
            categoryArr.push(item.category);
        });
        this.categorys = _.union(categoryArr);
        var siteList = _.groupBy(sites,function(site){
            return site.category;
        });
        console.log(siteList);
        return (_.map(siteList,function(site){return site;}));
    },
    getInitialState: function() {
        return {
            sites: []
        };
    },
    componentDidMount: function() {
        $.get(this.props.source, function(response) {
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
            var sites = _.rest(cells); // 맨 처음 데이터를 지우고 리턴함.
            if (this.isMounted()) {
                this.setState({
                    sites: sites
                });
            }
        }.bind(this));
    },
    render: function() {
        var siteList = _.shuffle( this.getSiteList() );
        var siteListDom = siteList.map(function(categoryItem){
            return ( <SiteTitleBox category={categoryItem} /> );
        });
        return (
            <div className="reactModule siteListBox">
                <div className="row masonry-container">
                    {siteListDom}
                </div>
            </div>
        );
    }
});

var SiteTitleBox = React.createClass({
    render:function(){
        var siteLinks = this.props.category.map(function(titleItem){
           return (<SiteLinkBox name={titleItem.name} title={titleItem.title} url={titleItem.url} desc={titleItem.desc} />);
        });
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 item">
                <h3>{this.props.category[0].category}</h3>
                <div className="list-group">
                    {siteLinks}
                </div>
            </div>
        );
    }
});

var SiteLinkBox = React.createClass({
    render:function(){
        var cName = "label label-primary";
        if(this.props.title=="jQuery"){
            cName = "label label-danger";
        };
        return (<a href={this.props.url} title={this.props.desc} className="list-group-item" target="_blank"><span className={cName}>{this.props.title}</span> {this.props.name}</a>);
    }
});