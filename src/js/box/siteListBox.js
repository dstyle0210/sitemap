"use strict";

var SiteListBox = React.createClass({
    displayName: "SiteListBox",

    componentDidMount: function componentDidMount() {
        var type = this.props.type;
        var sites = this.props.sites;
        this.setState({
            tagList: _.filter(tagsData, function (tagJson) {
                return tagJson.type == type;
            }),
            sites: sites
        });
        setTimeout(function () {
            sitemapMasonry[type] = masonryUi(type + "List");
        }, 500);
    },
    getInitialState: function getInitialState() {
        return {
            tagList: [],
            sites: []
        };
    },
    sortByTags: function sortByTags() {
        var type = this.props.type;
        var tag = $("#" + this.props.type + "Select").val();
        var sites = this.props.sites;
        if (tag != "") {
            sites = _.filter(sites, function (site) {
                return site.tag.indexOf(tag) != -1;
            });
        };

        this.setState({
            sites: sites
        });
        setTimeout(function () {
            sitemapMasonry[type].masonry('destroy');
            sitemapMasonry[type].masonry(masonryOptions);
        }, 500);
    },
    render: function render() {
        if (this.props.type == "posts") {
            return React.createElement(ListPostBox, { posts: this.state.sites });
        } else {
            return React.createElement(
                "div",
                null,
                React.createElement(ListSelectBox, { id: this.props.type, onSort: this.sortByTags }),
                React.createElement(ListSiteBox, { sites: this.state.sites })
            );
        };
    }
});

var ListSelectBox = React.createClass({
    displayName: "ListSelectBox",

    render: function render() {
        var selectId = this.props.id + "Select";
        return React.createElement(
            "select",
            { className: "form-control", id: selectId, onChange: this.props.onSort },
            React.createElement(
                "option",
                { value: "" },
                "전체"
            ),
            React.createElement(
                "option",
                { value: "javascript" },
                "javascript"
            ),
            React.createElement(
                "option",
                { value: "css" },
                "css"
            )
        );
    }
});