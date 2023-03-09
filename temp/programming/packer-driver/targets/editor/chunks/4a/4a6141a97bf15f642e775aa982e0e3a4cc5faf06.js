System.register([], function (_export, _context) {
  "use strict";

  var asyncIterator, readBlob;
  return {
    setters: [],
    execute: function () {
      ({
        asyncIterator
      } = Symbol);

      readBlob = async function* (blob) {
        if (blob.stream) {
          yield* blob.stream();
        } else if (blob.arrayBuffer) {
          yield await blob.arrayBuffer();
        } else if (blob[asyncIterator]) {
          yield* blob[asyncIterator]();
        } else {
          yield blob;
        }
      };

      _export("default", readBlob);
    }
  };
});
//# sourceMappingURL=4a6141a97bf15f642e775aa982e0e3a4cc5faf06.js.map