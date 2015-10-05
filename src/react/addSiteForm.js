// 사이트 등록하기.
"use strict";

var AddSiteFormBox = React.createClass({
    displayName: "AddSiteFormBox",

    handleCommentSubmit: function handleCommentSubmit(comment) {
        console.log(comment);
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbw-1CCvmldLKJETR6fRLir6WJK2cj0z_WvU6SQmvFuhEfFxY08/exec",
            data: comment,
            type: "POST",
            success: (function (response) {
                console.log("성공");
                siteListAjax(function () {});
            }).bind(this),
            error: (function (xhr, status, err) {
                // 오류시 사용
            }).bind(this)
        });
    },
    render: function render() {
        var sites = this.props.sites;
        var categoryArr = [];
        _.each(sites, function (item, key) {
            categoryArr.push(item.category);
        });
        this.category = _.union(categoryArr);

        return React.createElement(
            "div",
            { className: "reactModule addSiteFormBox" },
            React.createElement(AddSiteForm_mod_form, { onCommentSubmit: this.handleCommentSubmit, sites: this.props.sites, category: this.category })
        );
    }
});

var AddSiteForm_mod_form = React.createClass({
    displayName: "AddSiteForm_mod_form",

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var category = $("#addSite_category").val(); // React.findDOMNode(this.refs.category).value.trim();
        var title = $("#addSite_title").val(); //React.findDOMNode(this.refs.title).value.trim();
        var name = $("#addSite_name").val(); //React.findDOMNode(this.refs.name).value.trim();
        var url = $("#addSite_url").val(); //React.findDOMNode(this.refs.url).value.trim();
        var desc = $("#addSite_desc").val(); //React.findDOMNode(this.refs.desc).value.trim();

        // TODO: 서버에 요청을 전송합니다
        this.props.onCommentSubmit({ category: category, title: title, url: url, name: name, desc: desc });

        $("#addSite_name").val("");
        $("#addSite_url").val("");
        $("#addSite_desc").val("");
        // React.findDOMNode(this.refs.name).value = '';
        // React.findDOMNode(this.refs.url).value = '';
        // React.findDOMNode(this.refs.desc).value = '';

        return;
    },
    getInitialState: function getInitialState() {
        return { subTitles: [] };
    },
    titleChange: function titleChange() {
        var category = $("#addSite_category").val(); //React.findDOMNode(this.refs.category).value.trim();
        var getTitle = _.filter(this.props.sites, function (site) {
            return site.category == category;
        });
        var titles = _.map(getTitle, function (site) {
            return site.title;
        });
        this.setState({ subTitles: titles });
    },
    render: function render() {

        return React.createElement(
            "form",
            { method: "post", onSubmit: this.handleSubmit },
            React.createElement(AddSiteForm_mod_category, { category: this.props.category, onCategoryChange: this.titleChange }),
            React.createElement(AddSiteForm_mod_title, { titles: this.state.subTitles }),
            React.createElement(AddSiteForm_mod_name, null),
            React.createElement(AddSiteForm_mod_url, null),
            React.createElement(AddSiteForm_mod_desc, null),
            React.createElement(
                "button",
                { type: "submit", className: "btn btn-default" },
                "Submit"
            )
        );
    }
});

// 카테고리 선택
var AddSiteForm_mod_category = React.createClass({
    displayName: "AddSiteForm_mod_category",

    render: function render() {
        var setCategoryOption = this.props.category.map(function (optionName) {
            return React.createElement(
                "option",
                { value: optionName },
                optionName
            );
        });
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { htmlFor: "addSite_category" },
                React.createElement(
                    "strong",
                    null,
                    "카테고리 선택"
                )
            ),
            React.createElement(
                "select",
                { name: "", id: "addSite_category", className: "form-control", ref: "category", onChange: this.props.onCategoryChange },
                setCategoryOption
            )
        );
    }
});

// 서브 타이틀 선택
var AddSiteForm_mod_title = React.createClass({
    displayName: "AddSiteForm_mod_title",

    render: function render() {
        var setTitleOption = this.props.titles.map(function (optionName) {
            return React.createElement(
                "option",
                { value: optionName },
                optionName
            );
        });
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { htmlFor: "addSite_title" },
                React.createElement(
                    "strong",
                    null,
                    "타이틀 선택"
                )
            ),
            React.createElement(
                "select",
                { name: "", id: "addSite_title", className: "form-control" },
                setTitleOption
            )
        );
    }
});

// 웹 사이트명 입력
var AddSiteForm_mod_name = React.createClass({
    displayName: "AddSiteForm_mod_name",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { htmlFor: "addSite_name", className: "sr-only" },
                React.createElement(
                    "strong",
                    null,
                    "웹사이트 명"
                )
            ),
            React.createElement("input", { type: "text", className: "form-control", id: "addSite_name", placeholder: "웹사이트명", ref: "name" })
        );
    }
});

// 웹 사이트 주소 입력
var AddSiteForm_mod_url = React.createClass({
    displayName: "AddSiteForm_mod_url",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { htmlFor: "addSite_url", className: "sr-only" },
                React.createElement(
                    "strong",
                    null,
                    "웹사이트 주소"
                )
            ),
            React.createElement("input", { type: "text", className: "form-control", id: "addSite_url", placeholder: "웹사이트 주소", ref: "url" })
        );
    }
});

// 웹 사이트 설명 입력
var AddSiteForm_mod_desc = React.createClass({
    displayName: "AddSiteForm_mod_desc",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { htmlFor: "addSite_desc", className: "sr-only" },
                React.createElement(
                    "strong",
                    null,
                    "웹사이트 설명"
                )
            ),
            React.createElement("textarea", { className: "form-control", id: "addSite_desc", placeholder: "웹사이트 설명", ref: "desc" })
        );
    }
});