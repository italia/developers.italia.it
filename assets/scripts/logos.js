// these functions are in charge to check
// whether software logo exists using
// onerror event for img tag.
// If it doesn't exist or other kind of error
// is returned from request, it will replace
// with a simple placeholder.
function checkImage(src, good, bad) {
  var img = new Image();
  img.onload = good;
  img.onerror = bad;
  img.src = src;
}

function setImage(src, rootEl) {
  const el = `<div class="{{ classes }}"
    style="
      background-position: top center;
      background-repeat: no-repeat; 
      background-size: cover;
      height:150px; ">
  </div>`;
  $el = $(el);
  $el.css("background-image", "url(" + src + ")");
  $(rootEl).html($el);
}
