var FormSiteBox = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();

        var temp = [];
        $("#addSiteForm input[type='checkbox']:checked").each(function(){
            temp.push($(this).val());
        });
        var tags = temp.join(",");
        var url = $("#url").val();
        var name = $("#name").val();
        var desc = $("#desc").val();
        var regname = $("#regname").val();
        var regemail = $("#regemail").val();

        this.props.onFormSubmit(this.state.type,{
            tag:tags,
            name:name,
            url:url,
            desc:desc,
            regname:regname,
            regemail:regemail
        });

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