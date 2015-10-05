// 사이트 등록하기.
var siteListBox = React.createClass({
    render: function() {
        var sites = this.props.sites;
        console.log(sites);
        var siteList = this.props.sites.map(function(site){
            return ( <SiteBox site={site} /> );
        });
        return (
            <div className="reactModule siteListBox">
                <div class="row">
                    <div class="col-xs-12 col-xs-offset-0 col-sm-5 col-sm-offset-7">
                        <select name="" id="" class="form-control">
                            <option value="">javascript Libliary</option>
                            <option value="">UI Framework</option>
                            <option value="">MVC, MVVC Framework</option>
                            <option value="">TaskRunner</option>
                            <option value="">Pakege Manager</option>
                            <option value="">CSS pre-processor</option>
                            <option value="">WorkSpace</option>
                            <option value="">code editor previews</option>
                        </select>
                    </div>
                </div>
                <div class="row masonry-container">
                    {siteList}
                </div>
            </div>
        );
    }
});

var SiteBox = React.createClass({
    render:function(){
        return (
            <div class="col-sm-6 col-md-4 col-lg-3 item">
                <h3>{this.props.site.title} <small>( {this.props.site.category} )</small></h3>
                <div class="list-group">
                    <a href={this.props.site.url}>{this.props.site.name}</a>
                </div>
            </div>
        );
    }
})
