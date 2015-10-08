// 사이트 등록하기.
"use strict";

var siteListBox = React.createClass({
    displayName: "siteListBox",

    getSiteList: function getSiteList() {
        var sites = this.state.sites;
        var categoryArr = [];
        _.each(sites, function (item, key) {
            categoryArr.push(item.category);
        });
        this.categorys = _.union(categoryArr);
        var siteList = _.groupBy(sites, function (site) {
            return site.category;
        });
        console.log(siteList);
        return _.map(siteList, function (site) {
            return site;
        });
    },
    getInitialState: function getInitialState() {
        return {
            sites: []
        };
    },
    componentDidMount: function componentDidMount() {
        $.get(this.props.source, (function (response) {
            var cells = _.map(response.feed.entry, function (data) {
                var o = {};
                _.each(data, function (item, key) {
                    if (key.indexOf("gsx$") != -1) {
                        var nkey = key.split("gsx$")[1];
                        o[nkey] = data[key].$t;
                    }
                });
                return o;
            });
            var sites = _.rest(cells); // 맨 처음 데이터를 지우고 리턴함.
            if (this.isMounted()) {
                this.setState({
                    sites: sites
                });
            }
        }).bind(this));
    },
    render: function render() {
        var siteList = _.shuffle(this.getSiteList());
        var siteListDom = siteList.map(function (categoryItem) {
            return React.createElement(SiteTitleBox, { category: categoryItem });
        });
        return React.createElement(
            "div",
            { className: "reactModule siteListBox" },
            React.createElement(
                "div",
                { className: "row masonry-container" },
                siteListDom
            )
        );
    }
});

var SiteTitleBox = React.createClass({
    displayName: "SiteTitleBox",

    render: function render() {
        var siteLinks = this.props.category.map(function (titleItem) {
            return React.createElement(SiteLinkBox, { name: titleItem.name, title: titleItem.title, url: titleItem.url, desc: titleItem.desc });
        });
        return React.createElement(
            "div",
            { className: "col-sm-6 col-md-4 col-lg-3 item" },
            React.createElement(
                "h3",
                null,
                this.props.category[0].category
            ),
            React.createElement(
                "div",
                { className: "list-group" },
                siteLinks
            )
        );
    }
});

var SiteLinkBox = React.createClass({
    displayName: "SiteLinkBox",

    render: function render() {
        var cName = "label label-primary";
        if (this.props.title == "jQuery") {
            cName = "label label-danger";
        };
        return React.createElement(
            "a",
            { href: this.props.url, title: this.props.desc, className: "list-group-item", target: "_blank" },
            React.createElement(
                "span",
                { className: cName },
                this.props.title
            ),
            " ",
            this.props.name
        );
    }
});