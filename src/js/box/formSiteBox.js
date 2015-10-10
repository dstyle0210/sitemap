"use strict";

var FormSiteBox = React.createClass({
    displayName: "FormSiteBox",

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var temp = [];
        $("#addSiteForm input[type='checkbox']:checked").each(function () {
            temp.push($(this).val());
        });
        var tags = temp.join(",");
        var url = $("#url").val();
        var name = $("#name").val();
        var desc = $("#desc").val();
        var regname = $("#regname").val();
        var regemail = $("#regemail").val();

        this.props.onFormSubmit(this.state.type, {
            tag: tags,
            name: name,
            url: url,
            desc: desc,
            regname: regname,
            regemail: regemail
        });

        return;
    },
    componentDidMount: function componentDidMount() {
        this.changeSiteType("official");
    },
    changeSiteType: function changeSiteType() {
        if ($("#addSiteForm input[name='sitetype']:checked").val() == "official") {
            // 대표 사이트일때
            this.setState({
                tagList: _.filter(tagsData, function (tagJson) {
                    return tagJson.type == "official";
                }),
                type: "official"
            });
        } else {
            // 플러그인 사이트일때
            this.setState({
                tagList: _.filter(tagsData, function (tagJson) {
                    return tagJson.type == "plugin";
                }),
                type: "plugin"
            });
        };
    },
    getInitialState: function getInitialState() {
        return {
            tagList: _.filter(tagsData, function (tagJson) {
                return tagJson.type == "official";
            }),
            type: "official"
        };
    },
    render: function render() {
        var types = [{ name: "official", title: "대표 공식사이트" }, { name: "plugin", title: "플러그인 사이트" }];
        return React.createElement(
            "form",
            { className: "well", method: "post", onSubmit: this.handleSubmit },
            React.createElement(FormTypeBox, { types: types, name: "sitetype", onChangeType: this.changeSiteType }),
            React.createElement(FormTagsBox, { tags: this.state.tagList }),
            React.createElement(FormInputBox, { id: "name", ph: "웹사이트 명" }),
            React.createElement(FormInputBox, { id: "url", ph: "웹사이트 주소" }),
            React.createElement(FormTextareaBox, { id: "desc", ph: "웹사이트 설명" }),
            React.createElement(FormInputBox, { id: "regname", ph: "등록자" }),
            React.createElement(FormInputBox, { id: "regemail", ph: "등록자 이메일" }),
            React.createElement(
                "button",
                { type: "submit", className: "btn btn-default" },
                "Submit"
            )
        );
    }
});