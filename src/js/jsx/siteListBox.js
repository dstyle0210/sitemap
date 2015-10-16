var SiteListBox = React.createClass({
    componentDidMount: function() {
        var type = this.props.type;
        var sites = this.props.sites;
        this.setState({
            tagList:_.filter(tagsData,function(tagJson){ return tagJson.type == type;}),
            sites:sites
        });
        setTimeout(function(){
            sitemapMasonry[type] = masonryUi(type+"List");
        },500);
    },
    getInitialState: function() {
        return {
            tagList:[],
            sites:[]
        };
    },
    sortByTags:function(){
        var type = this.props.type;
        var tag = $("#"+this.props.type+"Select").val();
        var sites = this.props.sites;
        if(tag!=""){
            sites = _.filter(sites,function(site){
                return ( (site.tag).indexOf(tag)!=-1 );
            });
        };

        this.setState({
            sites:sites
        });
        setTimeout(function(){
            sitemapMasonry[type].masonry('destroy');
            sitemapMasonry[type].masonry(masonryOptions);
        },500);
    },
    render:function(){
        if(this.props.type=="posts"){
            return (<ListPostBox posts={this.state.sites} />);
        }else{
            return (
                <div>
                    <ListSelectBox id={this.props.type} onSort={this.sortByTags} />
                    <ListSiteBox sites={this.state.sites} />
                </div>
            );
        };
    }
});



var ListSelectBox = React.createClass({
    render:function(){
        var selectId = this.props.id+"Select";
        return (
            <select className="form-control" id={selectId} onChange={this.props.onSort}>
                <option value="">전체</option>
                <option value="javascript">javascript</option>
                <option value="css">css</option>
            </select>
        );
    }
})