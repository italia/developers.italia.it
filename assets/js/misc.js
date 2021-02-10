import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';

// eslint-disable-next-line sonarjs/cognitive-complexity
$(function () {
  if ($('.tiled-gallery').length > 0) {
    new PerfectScrollbar('.tiled-gallery', {
      maxScrollbarLength: 24,
    });

    const initPhotoSwipeFromDOM = function (gallerySelector) {
      // parse slide data (url, title, size ...) from DOM elements
      // (children of gallerySelector)
      const parseThumbnailElements = function (el) {
        const linkElements = el.getElementsByTagName('a');
        const items = [];

        for (let i = 0; i < linkElements.length; i++) {
          const imgElement = el.getElementsByTagName('img').item(i);
          const linkEl = linkElements[i];
          const size = linkEl.dataset.size.split('x');

          // create slide object
          const item = {
            src: linkEl.getAttribute('href'),
            w: Number(size[0]) || imgElement.naturalWidth || 1980,
            h: Number(size[1]) || imgElement.naturalHeight || 1020,
            msrc: linkEl.children[0].src,
          };

          item.el = linkEl; // save link to element for getThumbBoundsFn
          items.push(item);
        }

        return items;
      };

      // triggers when user clicks on thumbnail
      const onThumbnailsClick = function (e) {
        e.preventDefault();

        // find root element of slide
        const clickedListItem = e.target.parentNode;

        if (clickedListItem.tagName !== 'A') {
          return;
        }
        const clickedGallery = $(clickedListItem).closest('.tiled-gallery-inner')[0];

        const index = Number(clickedListItem.dataset.index);

        if (index >= 0) {
          openPhotoSwipe(index, clickedGallery);
        }
      };

      const openPhotoSwipe = function (index, galleryElement) {
        const pswpElement = document.querySelectorAll('.pswp')[0];
        const items = parseThumbnailElements(galleryElement);

        const options = {
          index,
          getThumbBoundsFn: (index) => {
            // See Options -> getThumbBoundsFn section of documentation for more info
            const thumbnail = items[index].el.getElementsByTagName('img')[0]; // find thumbnail
            const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            const rect = thumbnail.getBoundingClientRect();

            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width,
            };
          },
        };

        // Pass data to PhotoSwipe and initialize it
        // eslint-disable-next-line no-undef
        const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
      };

      // loop through all gallery elements and bind events
      const galleryElements = document.querySelectorAll(gallerySelector);

      galleryElements.forEach(function (galleryEl, i) {
        galleryEl.setAttribute('data-pswp-uid', i + 1);
        galleryEl.onclick = onThumbnailsClick;

        // each gallery has an "all pics" button next to it
        // adding a listener to show the gallery
        const btnNextGallery = $(galleryEl).parent().parent().find('.tiled-gallery-btn');
        if (btnNextGallery.length > 0) {
          btnNextGallery[0].addEventListener('click', () => {
            openPhotoSwipe(0, galleryEl);
          });
        }

        // if empty gallery removing div and button
        if ($(galleryEl).find('img').length === 0) {
          $(galleryEl).parent().remove();
          btnNextGallery.remove();
        }
      });
    };

    // Temporarily disabled on 2019-03-19 because it doesn't work properly.
    initPhotoSwipeFromDOM('.tiled-gallery-inner');

    const printPage = function () {
      window.print();
    };

    const printBtns = [].slice.call(document.getElementsByClassName('js-print-page'));
    printBtns.forEach(function (btn) {
      btn.addEventListener('click', printPage);
    });
  }
});
