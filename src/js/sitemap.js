/**
 * Created by Administrator on 2015-10-09.
 */
$(function(){
    callSiteListBox("official"); // ��ǥ���� ����Ʈ ȣ��
    callSiteListBox("plugin"); // �÷����� ����Ʈ ȣ��

    React.render(
        React.createElement(SiteFormBox),
        document.getElementById('addSiteForm')
    );
})