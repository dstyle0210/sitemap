var SiteListBox = React.createClass({
    render:function(){
        if(this.props.type=="posts"){
            return (<ListPostBox posts={this.props.sites} />);
        }else{
            return (<ListSiteBox sites={this.props.sites} />);
        };
    }
});