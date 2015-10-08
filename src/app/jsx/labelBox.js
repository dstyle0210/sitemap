var LabelBox = React.createClass({
    render:function(){
        return (<div className="tags">{((this.props.tags).split(",")).map(function(tag){
                return (<span key={tag} className="label" style={{background:coreTagsColor[tag]}}>{tag}</span>);
            })}</div>);
    }
});
