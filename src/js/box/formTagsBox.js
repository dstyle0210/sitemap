"use strict";

var FormTagsBox = React.createClass({
    displayName: "FormTagsBox",

    render: function render() {
        var tags = this.props.tags;
        var tagsBox = tags.map(function (tag) {
            return React.createElement(
                "label",
                { className: "checkbox-inline" },
                React.createElement("input", { type: "checkbox", value: tag.name }),
                " ",
                tag.name
            );
        });
        return React.createElement(
            "div",
            { className: "form-group" },
            tagsBox
        );
    }
});