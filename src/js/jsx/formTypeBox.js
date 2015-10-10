var FormTypeBox = React.createClass({
    render:function(){
        var types = this.props.types;
        var typesBox = types.map(function(type,idx){
            return (<label className="radio-inline"><input type="radio" name={this.props.name} value={type.name} onChange={this.props.onChangeType} defaultChecked={idx==0} /> {type.title}</label>);
        },this);
        return(
            <div className="form-group">
                {typesBox}
            </div>
        );
    }
});
