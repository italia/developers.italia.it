var g;
$(function () {

  if ($('.tiled-gallery').length > 0) {
    new PerfectScrollbar('.tiled-gallery', {
      maxScrollbarLength: 24
    });

    var initPhotoSwipeFromDOM = function (gallerySelector) {
      // parse slide data (url, title, size ...) from DOM elements
      // (children of gallerySelector)
      var parseThumbnailElements = function (el) {
        var linkElements = el.getElementsByTagName('a');
        var items = [];

        for (var i = 0; i < linkElements.length; i++) {
          var imgElement = el.getElementsByTagName('img').item(i);
          var linkEl = linkElements[i];
          var size = linkEl.dataset.size.split('x');

          // create slide object
          var item = {
            src: linkEl.getAttribute('href'),
            w: Number(size[0]) || imgElement.naturalWidth || 1980,
            h: Number(size[1]) || imgElement.naturalHeight || 1020,
            msrc: linkEl.children[0].src
          };

          item.el = linkEl; // save link to element for getThumbBoundsFn
          items.push(item);
        }

        return items;
      };

      // triggers when user clicks on thumbnail
      var onThumbnailsClick = function (e) {
        e.preventDefault();

        // find root element of slide
        var clickedListItem = e.target.parentNode;

        if (clickedListItem.tagName !== 'A') return;
        var clickedGallery = $(clickedListItem).closest('.tiled-gallery-inner')[0];

        var index = Number(clickedListItem.dataset.index);

        if (index >= 0) {
          openPhotoSwipe(index, clickedGallery);
        }
      };

      var openPhotoSwipe = function (index, galleryElement) {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var gallery;
        var options;
        var items;

        items = parseThumbnailElements(galleryElement);

        options = {
          index: index,
          getThumbBoundsFn: function (index) {
            // See Options -> getThumbBoundsFn section of documentation for more info
            var thumbnail = items[index].el.getElementsByTagName('img')[0]; // find thumbnail
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            var rect = thumbnail.getBoundingClientRect();

            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width
            };
          }
        };

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
      };

      // loop through all gallery elements and bind events
      var galleryElements = document.querySelectorAll(gallerySelector);

      galleryElements.forEach(function (galleryEl, i) {
        galleryEl.setAttribute('data-pswp-uid', i + 1);
        galleryEl.onclick = onThumbnailsClick;

        //each gallery has an "all pics" button next to it
        //adding a listener to show the gallery
        let btnNextGallery = $(galleryEl)
          .parent()
          .parent()
          .find('.tiled-gallery-btn');
        if (btnNextGallery.length > 0)
          btnNextGallery[0].addEventListener('click', e => {
            openPhotoSwipe(0, galleryEl)
          });

        //if empty gallery removing div and button
        if($(galleryEl).find('img').length==0) {
          $(galleryEl).parent().remove();
          btnNextGallery.remove();
        }
      });

    };

    ///Temporarily disabled on 2019-03-19 because it doesn't work properly.
    initPhotoSwipeFromDOM('.tiled-gallery-inner');

    var printPage = function () {
      window.print()
    };

    var printBtns = [].slice.call(document.getElementsByClassName('js-print-page'));
    printBtns.forEach(function (btn) {
      btn.addEventListener('click', printPage)
    })
  }

});
