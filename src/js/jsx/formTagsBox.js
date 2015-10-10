var FormTagsBox = React.createClass({
    render:function(){
        var tags = this.props.tags;
        var tagsBox = tags.map(function(tag){
            return (<label className="checkbox-inline"><input type="checkbox" value={tag.name} /> {tag.name}</label>);
        });
        return(
            <div className="form-group">
                {tagsBox}
            </div>
        );
    }
});
