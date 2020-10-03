// Check whether software logo exists using the onload event for img tag.
// If it exist it will replace the element with the valid image.
function checkImage(src, $el) {
  var img = new Image();
  img.onload = () => $el.css("background-image", `url('${src}')`);
  img.src = src;
}

function setDisplayLogos() {
  $("div[data-display-logo-id]").each(function() {
    var $this = $(this);

    $this.addClass("display-logo-loading");
    const classes = $this.data('display-logo-classes');
    const src = $this.data('display-logo-src');

    const $el = $this.children("div");

    $el.addClass(classes);
    checkImage(src, $el);
  });
}

$(document).ready(function() {
  setDisplayLogos();
});

export { setDisplayLogos };
