"use strict";

var ListPostBox = React.createClass({
    displayName: "ListPostBox",

    render: function render() {
        var posts = _.shuffle(this.props.posts);
        return React.createElement(
            "div",
            { className: "list-group" },
            posts.map(function (post, idx) {
                return React.createElement(
                    "a",
                    { key: idx, href: post.url, className: "list-group-item col-xs-12 col-sm-6 col-lg-12", target: "_blank" },
                    React.createElement(LabelBox, { tags: post.lang }),
                    React.createElement(
                        "span",
                        { className: "title" },
                        post.title
                    ),
                    React.createElement(
                        "div",
                        { className: "reg" },
                        "Registration by ",
                        React.createElement(
                            "span",
                            { title: post.regemail },
                            post.regname
                        )
                    )
                );
            })
        );
    }
});