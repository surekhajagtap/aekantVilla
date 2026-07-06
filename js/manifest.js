/* Gallery photos are numbered sequentially: images/gallery/1.jpg, 2.jpg, ...
   To add more photos: just drop the next number in images/gallery/ (e.g. 11.jpg).
   script.js probes numbers starting at `start` and stops at the first missing file. */
const GALLERY_CONFIG = {
  folder: "images/gallery",
  extension: "jpg",
  start: 1,
};
