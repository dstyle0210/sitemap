"use strict";

var ListSiteBox = React.createClass({
    displayName: "ListSiteBox",

    render: function render() {
        var sites = _.shuffle(this.props.sites);
        return React.createElement(
            "div",
            { className: "list-group masonry-container" },
            sites.map(function (site, idx) {
                return React.createElement(
                    "a",
                    { key: idx, href: site.url, className: "list-group-item col-xs-6 col-sm-4 col-md-3 col-lg-6", target: "_blank" },
                    React.createElement(LabelBox, { tags: site.tag }),
                    React.createElement(
                        "h4",
                        { className: "list-group-item-heading" },
                        site.name
                    ),
                    React.createElement(
                        "p",
                        { className: "list-group-item-text" },
                        site.desc
                    ),
                    React.createElement(
                        "div",
                        { className: "reg" },
                        "Registration by ",
                        React.createElement(
                            "span",
                            { title: site.regemail },
                            site.regname
                        )
                    )
                );
            })
        );
    }
});