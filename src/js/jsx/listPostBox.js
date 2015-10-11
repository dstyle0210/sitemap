var ListPostBox = React.createClass({
    render:function(){
        var posts = _.shuffle(this.props.posts);
        return (
            <div className="list-group">
                {posts.map(function(post,idx){
                    return (<a key={idx} href={post.url} className="list-group-item col-xs-12 col-sm-6 col-lg-12" target="_blank">
                        <LabelBox tags={post.lang}></LabelBox>
                        <span className="title">{post.title}</span>
                        <div className="reg">Registration by <span title={post.regemail}>{post.regname}</span></div>
                    </a>);
                })}
            </div>
        );
    }
})