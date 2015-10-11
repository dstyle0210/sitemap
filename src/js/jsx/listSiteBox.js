var ListSiteBox = React.createClass({
    render:function(){
        var sites = _.shuffle(this.props.sites);
        return (<div className="officialList list-group row masonry-container">
            {sites.map(function(site,idx){
                return (<a key={idx} href={site.url} className="list-group-item col-xs-6">
                    <LabelBox tags={site.tag}></LabelBox>
                    <h4 className="list-group-item-heading">{site.name}</h4>
                    <p className="list-group-item-text">{site.desc}</p>
                    <div className="reg">Registration by <span title={site.regemail}>{site.regname}</span></div>
                </a>);
            })}
        </div>);
    }
})
