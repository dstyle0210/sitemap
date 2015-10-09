var SiteFormBox = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();

        var cb = $("input[type='checkbox']:checked");
        var tags = "";
        if(cb.length==0){
            alert("태그를 지정해주세요.");
            return;
        }else{
            var tempArr = [];
            cb.each(function(){
                tempArr.push($(this).val());
            });
            tags = tempArr.join(",");
        };

        var name = "";
        if( $("#name").val()=="" ){
            alert("웹사이트 이름을 입력해주세요.");
            return;
        }else{
            name = $("#name").val();
        };

        var url = "";
        if( $("#url").val()=="" ){
            alert("웹사이트 주소을 입력해주세요.");
            return;
        }else{
            url = $("#url").val();
        };

        var desc = "";
        if( $("#desc").val()=="" ){
            alert("웹사이트 설명을 입력해주세요.");
            return;
        }else{
            desc = $("#desc").val();
        };

        var regname = "";
        if( $("#regname").val()=="" ){
            alert("등록자 이름을 입력해주세요.");
            return;
        }else{
            regname = $("#regname").val();
        };

        var regemail = "";
        if( $("#regemail").val()=="" ){
            alert("등록자 이메일을 입력해주세요.");
            return;
        }else{
            regemail = $("#regemail").val();
        };

        var formUrl = this.state.formurl;
        var data = {
            tag:tags,
            name:name,
            url:url,
            desc:desc,
            regname:regname,
            regemail:regemail
        };


        callSiteFormBox(formUrl,data);


        $("#name").val("");
        $("#url").val("");
        $("#desc").val("");
        $("#regname").val("");
        $("#regemail").val("");

        return;
    },
    componentDidMount: function() {
        this.changeSiteType("official");
        // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    changeSiteType:function(){
        var typeStr = $("input[name='sitetype']:checked").val();
        if(typeStr=="official"){
            // 대표 사이트일때
            this.setState({
                tagList:_.filter(tagsData,function(tagJson){ return tagJson.type == "official";}),
                formurl:officialFormUrl
            });
        }else{
            // 플러그인 사이트일때
            this.setState({
                tagList:_.filter(tagsData,function(tagJson){ return tagJson.type == "plugin";}),
                formurl:pluginFormUrl
            });
        };
    },
    getInitialState: function() {
        return {
            tagList: [],
            formurl:""
        };
    },
    render:function(){
        return (
            <form className="well" method="post" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="radio-inline">
                        <input type="radio" name="sitetype" value="official" onChange={this.changeSiteType} defaultChecked /> 대표 공식 사이트
                    </label>
                    <label className="radio-inline">
                        <input type="radio" name="sitetype" value="plugin" onChange={this.changeSiteType} /> 플러그인 공식 사이트
                    </label>
                </div>
                <MakeFormTagsBox tags={this.state.tagList} />
                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="웹사이트명" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="url" placeholder="웹사이트주소" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="desc" placeholder="웹사이트 설명" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="regname" placeholder="등록자" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="regemail" placeholder="등록자 이메일" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
});



var MakeFormTagsBox = React.createClass({
   render:function(){
       var tags = this.props.tags;
       var tagsBox = tags.map(function(tag){
          return (<label className="checkbox-inline"><input type="checkbox" value={tag.name} /> {tag.name}</label>);
       });
       return(
            <div className="form-group">
                {tagsBox}
            </div>
       );
   }
});