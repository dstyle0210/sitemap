// 사이트 등록하기.
var AddSiteFormBox = React.createClass({
    handleCommentSubmit: function(comment) {
        console.log(comment);
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbw-1CCvmldLKJETR6fRLir6WJK2cj0z_WvU6SQmvFuhEfFxY08/exec",
            data: comment,
            type: "POST",
            success: function(response) {
                console.log("성공");
            }.bind(this),
            error: function(xhr, status, err) {
                // 오류시 사용
            }.bind(this)
        });
    },
    render: function() {
        var sites = this.props.sites;
        var categoryArr = [];
        _.each(sites,function(item,key){
            categoryArr.push(item.category);
        });
        this.category = _.union(categoryArr);

        return (
            <div className="reactModule addSiteFormBox">
                <AddSiteForm_mod_form onCommentSubmit={this.handleCommentSubmit} sites={this.props.sites} category={this.category}  />
            </div>
        );
    }
});


var AddSiteForm_mod_form = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();

        var category = $("#addSite_category").val();  // React.findDOMNode(this.refs.category).value.trim();
        var title = $("#addSite_title").val(); //React.findDOMNode(this.refs.title).value.trim();
        var name = $("#addSite_name").val(); //React.findDOMNode(this.refs.name).value.trim();
        var url = $("#addSite_url").val(); //React.findDOMNode(this.refs.url).value.trim();
        var desc = $("#addSite_desc").val(); //React.findDOMNode(this.refs.desc).value.trim();

        // TODO: 서버에 요청을 전송합니다
        this.props.onCommentSubmit({category: category, title: title,url:url,name:name,desc:desc,referrer:document.referrer});


        $("#addSite_name").val("");
        $("#addSite_url").val("");
        $("#addSite_desc").val("");
        // React.findDOMNode(this.refs.name).value = '';
        // React.findDOMNode(this.refs.url).value = '';
        // React.findDOMNode(this.refs.desc).value = '';

        return;
    },
    getInitialState: function() {
        return {subTitles: []};
    },
    titleChange:function(){
        var category = $("#addSite_category").val(); //React.findDOMNode(this.refs.category).value.trim();
        var getTitle = _.filter(this.props.sites,function(site){
            return (site.category==category);
        });
        var titles = _.map(getTitle,function(site){return site.title});
        this.setState({subTitles: titles});
    },
    render:function(){

        return(
            <form method="post" onSubmit={this.handleSubmit}>
                <AddSiteForm_mod_category category={this.props.category} onCategoryChange={this.titleChange} />
                <AddSiteForm_mod_title titles={this.state.subTitles} />
                <AddSiteForm_mod_name />
                <AddSiteForm_mod_url />
                <AddSiteForm_mod_desc />
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
});

// 카테고리 선택
var AddSiteForm_mod_category = React.createClass({
    render: function() {
        var setCategoryOption = this.props.category.map(function(optionName){
            return(<option value={optionName}>{optionName}</option>);
        });
        return (
            <div className="form-group">
                <label htmlFor="addSite_category"><strong>카테고리 선택</strong></label>
                <select name="" id="addSite_category" className="form-control" ref="category" onChange={this.props.onCategoryChange}>
                    {setCategoryOption}
                </select>
            </div>
        );
    }
});

// 서브 타이틀 선택
var AddSiteForm_mod_title = React.createClass({
    render: function() {
        var setTitleOption = this.props.titles.map(function(optionName){
            return(<option value={optionName}>{optionName}</option>);
        });
        return (
            <div className="form-group">
                <label htmlFor="addSite_title"><strong>타이틀 선택</strong></label>
                <select name="" id="addSite_title" className="form-control">
                    {setTitleOption}
                </select>
            </div>
        );
    }
});

// 웹 사이트명 입력
var AddSiteForm_mod_name = React.createClass({
    render: function() {
        return (
            <div className="form-group">
                <label htmlFor="addSite_name" className="sr-only"><strong>웹사이트 명</strong></label>
                <input type="text" className="form-control" id="addSite_name" placeholder="웹사이트명" ref="name" />
            </div>
        );
    }
});

// 웹 사이트 주소 입력
var AddSiteForm_mod_url = React.createClass({
    render: function() {
        return (
            <div className="form-group">
                <label htmlFor="addSite_url" className="sr-only"><strong>웹사이트 주소</strong></label>
                <input type="text" className="form-control" id="addSite_url" placeholder="웹사이트 주소" ref="url" />
            </div>
        );
    }
});


// 웹 사이트 설명 입력
var AddSiteForm_mod_desc = React.createClass({
    render: function() {
        return (
            <div className="form-group">
                <label htmlFor="addSite_desc" className="sr-only"><strong>웹사이트 설명</strong></label>
                <textarea className="form-control" id="addSite_desc" placeholder="웹사이트 설명" ref="desc" />
            </div>
        );
    }
});