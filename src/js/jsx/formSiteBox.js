var FormSiteBox = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();

        var data = {};
        var val = "";
        // 태그 저장.
        var tagChecked = $("#addSiteForm input[type='checkbox']:checked");
        if(tagChecked.length==0){
            alert("태그를 선택해주세요.");
            return;
        };
        data.tag = (_.map(tagChecked,function(inp){return $(inp).val()})).join(",");

        // 웹사이트명
        val = $("#name").val();
        if(val==""){
            alert("웹사이트 명을 입력해주세요.");
            return;
        };
        data.name = val;

        // 웹사이트 주소
        val = $("#url").val();
        if(val==""){
            alert("웹사이트 주소를 입력해주세요.");
            return;
        };
        data.url = val;

        // 웹사이트 설명
        val = $("#desc").val();
        if(val==""){
            alert("웹사이트 설명을 입력해주세요.");
            return;
        };
        data.desc = val;

        // 등록자 이름
        val = $("#regname").val();
        if(val==""){
            alert("등록자를 입력해주세요.");
            return;
        };
        data.regname = val;

        // 등록자 이메일
        val = $("#regemail").val();
        if(val==""){
            alert("등록자 이메일을 입력해주세요.");
            return;
        };
        data.regemail = val;
        this.props.onFormSubmit(this.state.type,data);

        // 데이터 리셋
        $("#addSiteForm input[type='checkbox']").removeAttr("checked");
        $("#name,#url,#desc,#regname,#regemail").val("");


        return;
    },
    componentDidMount: function() {
        this.changeSiteType("official");
    },
    changeSiteType:function(){
        if( $("#addSiteForm input[name='sitetype']:checked").val() =="official"){
            // 대표 사이트일때
            this.setState({
                tagList:_.filter(tagsData,function(tagJson){ return tagJson.type == "official";}),
                type:"official"
            });
        }else{
            // 플러그인 사이트일때
            this.setState({
                tagList:_.filter(tagsData,function(tagJson){ return tagJson.type == "plugin";}),
                type:"plugin"
            });
        };
    },
    getInitialState: function() {
        return {
            tagList:_.filter(tagsData,function(tagJson){ return tagJson.type == "official";}),
            type:"official"
        };
    },
    render:function(){
        var types = [
            {name:"official", title:"대표 공식사이트"},
            {name:"plugin", title:"플러그인 사이트"}
        ];
        return (
            <form className="well" method="post" onSubmit={this.handleSubmit}>
                <FormTypeBox types={types} name="sitetype" onChangeType={this.changeSiteType} />
                <FormTagsBox tags={this.state.tagList} />
                <FormInputBox id="name" ph="웹사이트 명" />
                <FormInputBox id="url" ph="웹사이트 주소" />
                <FormTextareaBox id="desc" ph="웹사이트 설명" />
                <FormInputBox id="regname" ph="등록자" />
                <FormInputBox id="regemail" ph="등록자 이메일" />
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
});