var FormInputBox = React.createClass({
    render:function(){
        var type = (!this.props.type) ? "text" : this.props.type;
        return(
            <div className="form-group">
                <input type={type} className="form-control" id={this.props.id} placeholder={this.props.ph} />
            </div>
        );
    }
});
