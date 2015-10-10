"use strict";

var SiteListBox = React.createClass({
    displayName: "SiteListBox",

    render: function render() {
        console.log(this.props.type);
        if (this.props.type == "posts") {
            return React.createElement(ListPostBox, { posts: this.props.sites });
        } else {
            return React.createElement(ListSiteBox, { sites: this.props.sites });
        };
    }
});