"use strict";

var ListPostBox = React.createClass({
    displayName: "ListPostBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "list-group row" },
            this.props.posts.map(function (post, idx) {
                return React.createElement(
                    "a",
                    { key: idx, href: post.url, className: "list-group-item col-xs-12" },
                    React.createElement(LabelBox, { tags: post.lang }),
                    post.title
                );
            })
        );
    }
});