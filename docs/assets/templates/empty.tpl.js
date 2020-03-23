(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['empty'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
      var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

      return "<img src=\"/assets/images/serp_no results.svg\"></img>\n<h1>Ops!\n"
        + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
        + "</h1>\n<p class=\"font-serif content-text\">"
        + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
        + "</p>\n<a href=\"#\" class=\"btn btn-primary search-form\" data-toggle=\"modal\" data-backdrop=\"false\" data-target=\"#searchModal\">"
        + alias4(((helper = (helper = helpers.cta || (depth0 != null ? depth0.cta : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cta","hash":{},"data":data}) : helper)))
        + "</a>\n";
    },"useData":true});
})();
