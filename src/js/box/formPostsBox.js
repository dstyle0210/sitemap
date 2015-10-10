"use strict";

var FormPostsBox = React.createClass({
    displayName: "FormPostsBox",

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var lang = $("#addPostForm input[name='lang']:checked").val();
        var url = $("#posturl").val();
        var title = $("#posttitle").val();
        var regname = $("#postregname").val();
        var regemail = $("#postregemail").val();

        this.props.onFormSubmit("posts", {
            lang: lang,
            title: title,
            url: url,
            regname: regname,
            regemail: regemail
        });

        return;
    },
    changeSiteType: function changeSiteType() {
        // 라디오 버튼에 따라 상태값 변경이 필요하면 사용.
    },
    render: function render() {
        var types = [{ name: "eng", title: "영문" }, { name: "kor", title: "한글" }];
        return React.createElement(
            "form",
            { className: "well", method: "post", onSubmit: this.handleSubmit },
            React.createElement(FormTypeBox, { types: types, name: "lang", onChangeType: this.changeSiteType }),
            React.createElement(FormInputBox, { id: "posttitle", ph: "포스트 제목" }),
            React.createElement(FormInputBox, { id: "posturl", ph: "포스트 주소" }),
            React.createElement(FormInputBox, { id: "postregname", ph: "등록자" }),
            React.createElement(FormInputBox, { id: "postregemail", ph: "등록자 이메일" }),
            React.createElement(
                "button",
                { type: "submit", className: "btn btn-default" },
                "Submit"
            )
        );
    }
});