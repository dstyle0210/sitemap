"use strict";

var FormTypeBox = React.createClass({
    displayName: "FormTypeBox",

    render: function render() {
        var types = this.props.types;
        var typesBox = types.map(function (type, idx) {
            return React.createElement(
                "label",
                { className: "radio-inline" },
                React.createElement("input", { type: "radio", name: this.props.name, value: type.name, onChange: this.props.onChangeType, defaultChecked: idx == 0 }),
                " ",
                type.title
            );
        }, this);
        return React.createElement(
            "div",
            { className: "form-group" },
            typesBox
        );
    }
});