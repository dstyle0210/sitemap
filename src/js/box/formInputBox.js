"use strict";

var FormInputBox = React.createClass({
    displayName: "FormInputBox",

    render: function render() {
        var type = !this.props.type ? "text" : this.props.type;
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("input", { type: type, className: "form-control", id: this.props.id, placeholder: this.props.ph })
        );
    }
});