// 사이트 등록하기.
"use strict";

var AddCategoryFormBox = React.createClass({
    displayName: "AddCategoryFormBox",

    handleCommentSubmit: function handleCommentSubmit(comment) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyOaso5VWnCYj4_2V3aCHJY8sqiowoaJ_VwWjR8i8lb-RkXfVY/exec",
            data: comment,
            type: "POST",
            success: (function (response) {
                // 성공시 사용
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
            { className: "reactModule addCategoryFormBox" },
            React.createElement(AddCategoryForm_mod_form, { onCommentSubmit: this.handleCommentSubmit })
        );
    }
});

var AddCategoryForm_mod_form = React.createClass({
    displayName: "AddCategoryForm_mod_form",

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var category = $("#addCategory_category").val(); // React.findDOMNode(this.refs.category).value.trim();
        var title = $("#addCategory_title").val(); //React.findDOMNode(this.refs.title).value.trim();
        var color = $("#addCategory_color").val(); //React.findDOMNode(this.refs.title).value.trim();
        var name = $("#addCategory_name").val(); //React.findDOMNode(this.refs.name).value.trim();
        var url = $("#addCategory_url").val(); //React.findDOMNode(this.refs.url).value.trim();
        var desc = $("#addCategory_desc").val(); //React.findDOMNode(this.refs.desc).value.trim();

        // TODO: 서버에 요청을 전송합니다
        this.props.onCommentSubmit({ category: category, title: title, url: url, name: name, desc: desc, color: color });

        $("#addCategory_category").val("");
        $("#addCategory_title").val("");
        $("#addCategory_name").val("");
        $("#addCategory_url").val("");
        $("#addCategory_desc").val("");
        $("#addCategory_color").val("");
        // React.findDOMNode(this.refs.name).value = '';
        // React.findDOMNode(this.refs.url).value = '';
        // React.findDOMNode(this.refs.desc).value = '';

        return;
    },
    render: function render() {

        return React.createElement(
            "form",
            { method: "post", onSubmit: this.handleSubmit },
            React.createElement(AddCategoryForm_mod_input, { id: "addCategory_category", title: "카테고리" }),
            React.createElement(AddCategoryForm_mod_input, { id: "addCategory_title", title: "세부 카테고리" }),
            React.createElement(AddCategoryForm_mod_input, { id: "addCategory_color", title: "카테고리 컬러" }),
            React.createElement(AddCategoryForm_mod_input, { id: "addCategory_name", title: "웹사이트 명" }),
            React.createElement(AddCategoryForm_mod_input, { id: "addCategory_url", title: "웹사이트 주소" }),
            React.createElement(AddCategoryForm_mod_textarea, { id: "addCategory_desc", title: "웹사이트 설명" }),
            React.createElement(
                "button",
                { type: "submit", className: "btn btn-default" },
                "Submit"
            )
        );
    }
});

// 카테고리 입력 인풋
var AddCategoryForm_mod_input = React.createClass({
    displayName: "AddCategoryForm_mod_input",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { htmlFor: this.props.id },
                React.createElement(
                    "strong",
                    null,
                    this.props.title
                )
            ),
            React.createElement("input", { type: "text", className: "form-control", id: this.props.id, placeholder: this.props.title })
        );
    }
});

// 카테고리 입력 텍스트영역
var AddCategoryForm_mod_textarea = React.createClass({
    displayName: "AddCategoryForm_mod_textarea",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { htmlFor: this.props.id },
                React.createElement(
                    "strong",
                    null,
                    this.props.title
                )
            ),
            React.createElement("textarea", { className: "form-control", id: this.props.id, placeholder: this.props.title })
        );
    }
});

// 카테고리 입력 체크박스
var AddCategoryForm_mod_checkbox = React.createClass({
    displayName: "AddCategoryForm_mod_checkbox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
                "label",
                { "class": "checkbox-inline" },
                React.createElement("input", { type: "checkbox", id: this.props.id, value: "O" }),
                " ",
                React.createElement(
                    "strong",
                    null,
                    this.props.title
                )
            )
        );
    }
});