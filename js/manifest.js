/* Gallery photos are numbered sequentially: images/gallery/1.jpg, 2.jpg, ...
   To add more photos: just drop the next number in images/gallery/ (e.g. 11.jpg).
   script.js probes numbers starting at `start` and stops at the first missing file. */
const GALLERY_CONFIG = {
  folder: "images/gallery",
  extension: "jpg",
  start: 1,
};

/* Alt text per photo number — used for accessibility and Google Image search.
   A photo with no entry here still shows; it just falls back to generic text,
   so describe each new photo (what the room is, plus "Aekant Villa" and the
   location) whenever you add one. */
const GALLERY_ALT = {
  1: "Carved wooden main entrance of Aekant Villa lit up at night",
  2: "Aekant Villa exterior with red-tiled porch and landscaped lawn, Trimbakeshwar",
  3: "Air-conditioned bedroom with wardrobe and marble flooring at Aekant Villa",
  4: "3BHK villa bedroom with cove lighting and fresh towels at Aekant Villa, Nashik",
  5: "Spacious living room with TV and sofa seating at Aekant Villa, Trimbakeshwar",
  6: "Second bedroom with wardrobe and attached bathroom at Aekant Villa",
  7: "Third bedroom with double bed and air conditioning at Aekant Villa, Nashik",
  8: "Modern bathroom with rain shower and hot water geyser at Aekant Villa",
  9: "Bedroom with wardrobe, air conditioning and cove lighting at Aekant Villa",
  10: "Illuminated swimming pool under a starry night sky at Aekant Villa, Nashik",
};
