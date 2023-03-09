'use strict';

System.register(["stream", "__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var stream, utils, throttle, speedometer, AxiosTransformStream, kInternals;
  return {
    setters: [function (_stream) {
      stream = _stream.default;
    }, function (_unresolved_) {
      utils = _unresolved_.default;
    }, function (_unresolved_2) {
      throttle = _unresolved_2.default;
    }, function (_unresolved_3) {
      speedometer = _unresolved_3.default;
    }],
    execute: function () {
      kInternals = Symbol('internals');
      AxiosTransformStream = class AxiosTransformStream extends stream.Transform {
        constructor(options) {
          options = utils.toFlatObject(options, {
            maxRate: 0,
            chunkSize: 64 * 1024,
            minChunkSize: 100,
            timeWindow: 500,
            ticksRate: 2,
            samplesCount: 15
          }, null, (prop, source) => {
            return !utils.isUndefined(source[prop]);
          });
          super({
            readableHighWaterMark: options.chunkSize
          });
          var self = this;
          var internals = this[kInternals] = {
            length: options.length,
            timeWindow: options.timeWindow,
            ticksRate: options.ticksRate,
            chunkSize: options.chunkSize,
            maxRate: options.maxRate,
            minChunkSize: options.minChunkSize,
            bytesSeen: 0,
            isCaptured: false,
            notifiedBytesLoaded: 0,
            ts: Date.now(),
            bytes: 0,
            onReadCallback: null
          };

          var _speedometer = speedometer(internals.ticksRate * options.samplesCount, internals.timeWindow);

          this.on('newListener', event => {
            if (event === 'progress') {
              if (!internals.isCaptured) {
                internals.isCaptured = true;
              }
            }
          });
          var bytesNotified = 0;
          internals.updateProgress = throttle(function throttledHandler() {
            var totalBytes = internals.length;
            var bytesTransferred = internals.bytesSeen;
            var progressBytes = bytesTransferred - bytesNotified;
            if (!progressBytes || self.destroyed) return;

            var rate = _speedometer(progressBytes);

            bytesNotified = bytesTransferred;
            process.nextTick(() => {
              self.emit('progress', {
                'loaded': bytesTransferred,
                'total': totalBytes,
                'progress': totalBytes ? bytesTransferred / totalBytes : undefined,
                'bytes': progressBytes,
                'rate': rate ? rate : undefined,
                'estimated': rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : undefined
              });
            });
          }, internals.ticksRate);

          var onFinish = () => {
            internals.updateProgress(true);
          };

          this.once('end', onFinish);
          this.once('error', onFinish);
        }

        _read(size) {
          var internals = this[kInternals];

          if (internals.onReadCallback) {
            internals.onReadCallback();
          }

          return super._read(size);
        }

        _transform(chunk, encoding, callback) {
          var self = this;
          var internals = this[kInternals];
          var maxRate = internals.maxRate;
          var readableHighWaterMark = this.readableHighWaterMark;
          var timeWindow = internals.timeWindow;
          var divider = 1000 / timeWindow;
          var bytesThreshold = maxRate / divider;
          var minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;

          function pushChunk(_chunk, _callback) {
            var bytes = Buffer.byteLength(_chunk);
            internals.bytesSeen += bytes;
            internals.bytes += bytes;

            if (internals.isCaptured) {
              internals.updateProgress();
            }

            if (self.push(_chunk)) {
              process.nextTick(_callback);
            } else {
              internals.onReadCallback = () => {
                internals.onReadCallback = null;
                process.nextTick(_callback);
              };
            }
          }

          var transformChunk = (_chunk, _callback) => {
            var chunkSize = Buffer.byteLength(_chunk);
            var chunkRemainder = null;
            var maxChunkSize = readableHighWaterMark;
            var bytesLeft;
            var passed = 0;

            if (maxRate) {
              var now = Date.now();

              if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
                internals.ts = now;
                bytesLeft = bytesThreshold - internals.bytes;
                internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
                passed = 0;
              }

              bytesLeft = bytesThreshold - internals.bytes;
            }

            if (maxRate) {
              if (bytesLeft <= 0) {
                // next time window
                return setTimeout(() => {
                  _callback(null, _chunk);
                }, timeWindow - passed);
              }

              if (bytesLeft < maxChunkSize) {
                maxChunkSize = bytesLeft;
              }
            }

            if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
              chunkRemainder = _chunk.subarray(maxChunkSize);
              _chunk = _chunk.subarray(0, maxChunkSize);
            }

            pushChunk(_chunk, chunkRemainder ? () => {
              process.nextTick(_callback, null, chunkRemainder);
            } : _callback);
          };

          transformChunk(chunk, function transformNextChunk(err, _chunk) {
            if (err) {
              return callback(err);
            }

            if (_chunk) {
              transformChunk(_chunk, transformNextChunk);
            } else {
              callback(null);
            }
          });
        }

        setLength(length) {
          this[kInternals].length = +length;
          return this;
        }

      };

      _export("default", AxiosTransformStream);
    }
  };
});
//# sourceMappingURL=57f6c69b90f190f97aa4dd30c40127f83d41068d.js.map