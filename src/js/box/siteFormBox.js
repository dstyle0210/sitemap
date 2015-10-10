"use strict";

var SiteFormBox = React.createClass({
    displayName: "SiteFormBox",

    handleSubmit: function handleSubmit(type, data) {
        callSiteFormBox(type, data);
    },
    render: function render() {
        if (this.props.type == "site") {
            return React.createElement(FormSiteBox, { onFormSubmit: this.handleSubmit });
        } else {
            return React.createElement(FormPostsBox, { onFormSubmit: this.handleSubmit });
        };
    }
});