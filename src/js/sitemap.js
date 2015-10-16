/**
 * Created by Administrator on 2015-10-09.
 */
$(function(){
    callSiteListBox("official"); // 대표공식 사이트 호출
    callSiteListBox("plugin"); // 플러그인 사이트 호출
    callSiteListBox("posts"); // 플러그인 사이트 호출

    React.render(
        React.createElement(SiteFormBox,{type:"site"}),
        document.getElementById('addSiteForm')
    );

    React.render(
        React.createElement(SiteFormBox,{type:"post"}),
        document.getElementById('addPostForm')
    );
});