var LabelBox = React.createClass({
    render:function(){
        return (<div className="tags">{((this.props.tags).split(",")).map(function(tag){
            var tagData = _.where(tagsData,{name:tag});
            console.log(tagData[0].color+","+tagData[0].name)
            return (<span key={tag} className="label" style={{background:tagData[0].color}}>{tag}</span>);
        })}</div>);
    }
});
