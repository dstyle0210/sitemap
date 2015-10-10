"use strict";

var LabelBox = React.createClass({
    displayName: "LabelBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "tags" },
            this.props.tags.split(",").map(function (tag) {
                var tagData = _.where(tagsData, { name: tag });
                return React.createElement(
                    "span",
                    { key: tag, className: "label", style: { background: tagData[0].color } },
                    tag
                );
            })
        );
    }
});