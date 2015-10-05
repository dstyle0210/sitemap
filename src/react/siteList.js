// 사이트 등록하기.
"use strict";

var siteListBox = React.createClass({
    displayName: "siteListBox",

    render: function render() {
        var sites = this.props.sites;
        console.log(sites);
        var siteList = this.props.sites.map(function (site) {
            return React.createElement(SiteBox, { site: site });
        });
        return React.createElement(
            "div",
            { className: "reactModule siteListBox" },
            React.createElement(
                "div",
                { "class": "row" },
                React.createElement(
                    "div",
                    { "class": "col-xs-12 col-xs-offset-0 col-sm-5 col-sm-offset-7" },
                    React.createElement(
                        "select",
                        { name: "", id: "", "class": "form-control" },
                        React.createElement(
                            "option",
                            { value: "" },
                            "javascript Libliary"
                        ),
                        React.createElement(
                            "option",
                            { value: "" },
                            "UI Framework"
                        ),
                        React.createElement(
                            "option",
                            { value: "" },
                            "MVC, MVVC Framework"
                        ),
                        React.createElement(
                            "option",
                            { value: "" },
                            "TaskRunner"
                        ),
                        React.createElement(
                            "option",
                            { value: "" },
                            "Pakege Manager"
                        ),
                        React.createElement(
                            "option",
                            { value: "" },
                            "CSS pre-processor"
                        ),
                        React.createElement(
                            "option",
                            { value: "" },
                            "WorkSpace"
                        ),
                        React.createElement(
                            "option",
                            { value: "" },
                            "code editor previews"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { "class": "row masonry-container" },
                siteList
            )
        );
    }
});

var SiteBox = React.createClass({
    displayName: "SiteBox",

    render: function render() {
        return React.createElement(
            "div",
            { "class": "col-sm-6 col-md-4 col-lg-3 item" },
            React.createElement(
                "h3",
                null,
                this.props.site.title,
                " ",
                React.createElement(
                    "small",
                    null,
                    "( ",
                    this.props.site.category,
                    " )"
                )
            ),
            React.createElement(
                "div",
                { "class": "list-group" },
                React.createElement(
                    "a",
                    { href: this.props.site.url },
                    this.props.site.name
                )
            )
        );
    }
});