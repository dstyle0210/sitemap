"use strict";

var FormTextareaBox = React.createClass({
    displayName: "FormTextareaBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("textarea", { className: "form-control", id: this.props.id, placeholder: this.props.ph })
        );
    }
});