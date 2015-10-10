var ListPostBox = React.createClass({
    render:function(){
        return (
            <div className="list-group row">
                {this.props.posts.map(function(post,idx){
                    return (<a key={idx} href={post.url} className="list-group-item col-xs-12">
                        <LabelBox tags={post.lang}></LabelBox>
                        {post.title}
                    </a>);
                })}
            </div>
        );
    }
})

