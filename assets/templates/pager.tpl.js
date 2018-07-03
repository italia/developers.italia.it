(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pager'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <li class=\"page-item "
    + alias4(((helper = (helper = helpers.classes || (depth0 != null ? depth0.classes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classes","hash":{},"data":data}) : helper)))
    + "\">\n    <a class=\"page-link\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n  </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<ul class=\"pagination pagination-lg\">\n  <li class=\"page-item "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.prev : depth0)) != null ? stack1.classes : stack1), depth0))
    + "\">\n    <a class=\"page-link\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.prev : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" aria-label=\"Previous\" tabindex=\"-1\">\n      <span aria-hidden=\"true\">&lt;</span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n  </li>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <li class=\"page-item "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.next : depth0)) != null ? stack1.classes : stack1), depth0))
    + " \">\n    <a class=\"page-link\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.next : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" aria-label=\"Previous\" tabindex=\"-1\">\n      <span aria-hidden=\"true\">&gt;</span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </li>\n</ul>";
},"useData":true});
})();