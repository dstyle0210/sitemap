var SiteListBox = React.createClass({
    render:function(){
        console.log(this.props.type);
        if(this.props.type=="posts"){
            return (<ListPostBox posts={this.props.sites} />);
        }else{
            return (<ListSiteBox sites={this.props.sites} />);
        };
    }
});