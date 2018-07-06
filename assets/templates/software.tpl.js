(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['software'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-sm-6 col-md-4 item\">\n  <div class=\"category\"><img class=\"icon-cat\" src=\"\"><p>"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "</p></div>\n  <div class=\"main-image\" style=\" background: url("
    + alias4(((helper = (helper = helpers.screenshot || (depth0 != null ? depth0.screenshot : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screenshot","hash":{},"data":data}) : helper)))
    + ") no-repeat center center;\">\n  </div>\n  <p class=\"name\">"
    + alias4(((helper = (helper = helpers.localisedName || (depth0 != null ? depth0.localisedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"localisedName","hash":{},"data":data}) : helper)))
    + "</p>\n  <a href=\""
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = helpers.readMore || (depth0 != null ? depth0.readMore : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readMore","hash":{},"data":data}) : helper)))
    + "</a>\n</div>";
},"useData":true});
})();