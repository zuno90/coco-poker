'use strict';

System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var utils, settle, cookies, buildURL, buildFullPath, isURLSameOrigin, transitionalDefaults, AxiosError, CanceledError, parseProtocol, platform, AxiosHeaders, speedometer, isXHRAdapterSupported;

  function progressEventReducer(listener, isDownloadStream) {
    var bytesNotified = 0;

    var _speedometer = speedometer(50, 250);

    return e => {
      var loaded = e.loaded;
      var total = e.lengthComputable ? e.total : undefined;
      var progressBytes = loaded - bytesNotified;

      var rate = _speedometer(progressBytes);

      var inRange = loaded <= total;
      bytesNotified = loaded;
      var data = {
        loaded,
        total,
        progress: total ? loaded / total : undefined,
        bytes: progressBytes,
        rate: rate ? rate : undefined,
        estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
        event: e
      };
      data[isDownloadStream ? 'download' : 'upload'] = true;
      listener(data);
    };
  }

  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }, function (_unresolved_2) {
      settle = _unresolved_2.default;
    }, function (_unresolved_3) {
      cookies = _unresolved_3.default;
    }, function (_unresolved_4) {
      buildURL = _unresolved_4.default;
    }, function (_unresolved_5) {
      buildFullPath = _unresolved_5.default;
    }, function (_unresolved_6) {
      isURLSameOrigin = _unresolved_6.default;
    }, function (_unresolved_7) {
      transitionalDefaults = _unresolved_7.default;
    }, function (_unresolved_8) {
      AxiosError = _unresolved_8.default;
    }, function (_unresolved_9) {
      CanceledError = _unresolved_9.default;
    }, function (_unresolved_10) {
      parseProtocol = _unresolved_10.default;
    }, function (_unresolved_11) {
      platform = _unresolved_11.default;
    }, function (_unresolved_12) {
      AxiosHeaders = _unresolved_12.default;
    }, function (_unresolved_13) {
      speedometer = _unresolved_13.default;
    }],
    execute: function () {
      isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

      _export("default", isXHRAdapterSupported && function (config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = AxiosHeaders.from(config.headers).normalize();
          var responseType = config.responseType;
          var onCanceled;

          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }

            if (config.signal) {
              config.signal.removeEventListener('abort', onCanceled);
            }
          }

          if (utils.isFormData(requestData) && (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv)) {
            requestHeaders.setContentType(false); // Let the browser set it
          }

          var request = new XMLHttpRequest(); // HTTP basic authentication

          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
          }

          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

          request.timeout = config.timeout;

          function onloadend() {
            if (!request) {
              return;
            } // Prepare the response


            var responseHeaders = AxiosHeaders.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response); // Clean up request

            request = null;
          }

          if ('onloadend' in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
          } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              } // The request errored out and we didn't get a response, this will be
              // handled by onerror instead
              // With one exception: request that using file: protocol, most browsers
              // will return status as 0 even though it's a successful request


              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
              } // readystate handler is calling before onerror or ontimeout handlers,
              // so we should call onloadend on the next 'tick'


              setTimeout(onloadend);
            };
          } // Handle browser request cancellation (as opposed to a manual cancellation)


          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }

            reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request)); // Clean up request

            request = null;
          }; // Handle low level network errors


          request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request)); // Clean up request

            request = null;
          }; // Handle timeout


          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || transitionalDefaults;

            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }

            reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request)); // Clean up request

            request = null;
          }; // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.


          if (platform.isStandardBrowserEnv) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

            if (xsrfValue) {
              requestHeaders.set(config.xsrfHeaderName, xsrfValue);
            }
          } // Remove Content-Type if data is undefined


          requestData === undefined && requestHeaders.setContentType(null); // Add headers to the request

          if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
              request.setRequestHeader(key, val);
            });
          } // Add withCredentials to request if needed


          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          } // Add responseType to request if needed


          if (responseType && responseType !== 'json') {
            request.responseType = config.responseType;
          } // Handle progress if needed


          if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
          } // Not all browsers support upload events


          if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
          }

          if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = cancel => {
              if (!request) {
                return;
              }

              reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
              request.abort();
              request = null;
            };

            config.cancelToken && config.cancelToken.subscribe(onCanceled);

            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
            }
          }

          var protocol = parseProtocol(fullPath);

          if (protocol && platform.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
            return;
          } // Send the request


          request.send(requestData || null);
        });
      });
    }
  };
});
//# sourceMappingURL=cbe9337d19968aa05e25d4d34eb44cf5053fd7e4.js.map