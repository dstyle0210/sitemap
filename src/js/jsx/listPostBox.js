var ListPostBox = React.createClass({
    render:function(){
        var posts = _.shuffle(this.props.posts);
        return (
            <div className="list-group row">
                {posts.map(function(post,idx){
                    return (<a key={idx} href={post.url} className="list-group-item col-xs-12">
                        <LabelBox tags={post.lang}></LabelBox>
                        <span className="title">{post.title}</span>
                        <div className="reg">Registration by <span title={post.regemail}>{post.regname}</span></div>
                    </a>);
                })}
            </div>
        );
    }
})