/**
 * Created by Administrator on 2015-10-09.
 */
$(function(){
    callSiteListBox("official"); // ��ǥ���� ����Ʈ ȣ��
    callSiteListBox("plugin"); // �÷����� ����Ʈ ȣ��
    callSiteListBox("posts"); // �÷����� ����Ʈ ȣ��

    React.render(
        React.createElement(SiteFormBox,{type:"site"}),
        document.getElementById('addSiteForm')
    );

    React.render(
        React.createElement(SiteFormBox,{type:"post"}),
        document.getElementById('addPostForm')
    );
});