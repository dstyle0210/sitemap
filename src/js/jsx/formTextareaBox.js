var FormTextareaBox = React.createClass({
    render:function(){
        return(
            <div className="form-group">
                <textarea className="form-control" id={this.props.id} placeholder={this.props.ph} />
            </div>
        );
    }
});
