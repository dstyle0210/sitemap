"use strict";

var FormSiteBox = React.createClass({
    displayName: "FormSiteBox",

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var data = {};
        var val = "";
        // 태그 저장.
        var tagChecked = $("#addSiteForm input[type='checkbox']:checked");
        if (tagChecked.length == 0) {
            alert("태그를 선택해주세요.");
            return;
        };
        data.tag = _.map(tagChecked, function (inp) {
            return $(inp).val();
        }).join(",");

        // 웹사이트명
        val = $("#name").val();
        if (val == "") {
            alert("웹사이트 명을 입력해주세요.");
            return;
        };
        data.name = val;

        // 웹사이트 주소
        val = $("#url").val();
        if (val == "") {
            alert("웹사이트 주소를 입력해주세요.");
            return;
        };
        data.url = val;

        // 웹사이트 설명
        val = $("#desc").val();
        if (val == "") {
            alert("웹사이트 설명을 입력해주세요.");
            return;
        };
        data.desc = val;

        // 등록자 이름
        val = $("#regname").val();
        if (val == "") {
            alert("등록자를 입력해주세요.");
            return;
        };
        data.regname = val;

        // 등록자 이메일
        val = $("#regemail").val();
        if (val == "") {
            alert("등록자 이메일을 입력해주세요.");
            return;
        };
        data.regemail = val;
        this.props.onFormSubmit(this.state.type, data);

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