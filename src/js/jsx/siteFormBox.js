var SiteFormBox = React.createClass({
    handleSubmit:function(type,data){
        callSiteFormBox(type,data);
    },
    render:function(){
        if(this.props.type=="site"){
            return (<FormSiteBox onFormSubmit={this.handleSubmit} />);
        }else{
            return (<FormPostsBox onFormSubmit={this.handleSubmit} />);
        };
    }
});