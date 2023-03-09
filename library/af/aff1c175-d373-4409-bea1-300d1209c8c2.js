(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  (function () {
    !function (_, E) {
      if ("object" == typeof exports && "object" == typeof module) module.exports = E();else if ("function" == typeof define && define.amd) define([], E);else {
        var I = E();

        for (var S in I) ("object" == typeof exports ? exports : _)[S] = I[S];
      }
    }(window, function () {
      return function (_) {
        var E = {};

        function I(S) {
          if (E[S]) return E[S].exports;
          var R = E[S] = {
            i: S,
            l: !1,
            exports: {}
          };
          return _[S].call(R.exports, R, R.exports, I), R.l = !0, R.exports;
        }

        return I.m = _, I.c = E, I.d = function (_, E, S) {
          I.o(_, E) || Object.defineProperty(_, E, {
            enumerable: !0,
            get: S
          });
        }, I.r = function (_) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(_, "__esModule", {
            value: !0
          });
        }, I.t = function (_, E) {
          if (1 & E && (_ = I(_)), 8 & E) return _;
          if (4 & E && "object" == typeof _ && _ && _.__esModule) return _;
          var S = Object.create(null);
          if (I.r(S), Object.defineProperty(S, "default", {
            enumerable: !0,
            value: _
          }), 2 & E && "string" != typeof _) for (var R in _) I.d(S, R, function (E) {
            return _[E];
          }.bind(null, R));
          return S;
        }, I.n = function (_) {
          var E = _ && _.__esModule ? function () {
            return _.default;
          } : function () {
            return _;
          };
          return I.d(E, "a", E), E;
        }, I.o = function (_, E) {
          return Object.prototype.hasOwnProperty.call(_, E);
        }, I.p = "", I(I.s = 0);
      }([function (_, E, I) {
        "use strict";

        Object.defineProperty(E, "__esModule", {
          value: !0
        });
        const S = I(1),
              R = I(2);
        var e;
        !function (_) {
          let E;
          !function (_) {
            let E;
            !function (_) {
              function E(_, E, ...I) {
                return S.jsBridge.callStaticMethod("com/cocos/service/ServiceAGCAuth", _, E, ...I);
              }

              let I, R;
              !function (_) {
                _[_.Anonymous = 0] = "Anonymous", _[_.HMS_Provider = 1] = "HMS_Provider", _[_.Facebook_Provider = 2] = "Facebook_Provider", _[_.Twitter_Provider = 3] = "Twitter_Provider", _[_.WeiXin_Provider = 4] = "WeiXin_Provider", _[_.HWGame_Provider = 5] = "HWGame_Provider", _[_.QQ_Provider = 6] = "QQ_Provider", _[_.WeiBo_Provider = 7] = "WeiBo_Provider", _[_.Google_Provider = 8] = "Google_Provider", _[_.GoogleGame_Provider = 9] = "GoogleGame_Provider", _[_.SelfBuild_Provider = 10] = "SelfBuild_Provider", _[_.Phone_Provider = 11] = "Phone_Provider", _[_.Email_Provider = 12] = "Email_Provider";
              }(I = _.AuthProvider || (_.AuthProvider = {})), function (_) {
                _[_.NULL_TOKEN = 1] = "NULL_TOKEN", _[_.NOT_SIGN_IN = 2] = "NOT_SIGN_IN", _[_.USER_LINKED = 3] = "USER_LINKED", _[_.USER_UNLINKED = 4] = "USER_UNLINKED", _[_.ALREADY_SIGN_IN_USER = 5] = "ALREADY_SIGN_IN_USER", _[_.EMAIL_VERIFICATION_IS_EMPTY = 6] = "EMAIL_VERIFICATION_IS_EMPTY", _[_.PHONE_VERIFICATION_IS_EMPTY = 7] = "PHONE_VERIFICATION_IS_EMPTY", _[_.LOGIN_SUCCESS = 1001] = "LOGIN_SUCCESS", _[_.LINK_SUCCESS = 1002] = "LINK_SUCCESS", _[_.REGISTER_SUCCESS = 1003] = "REGISTER_SUCCESS", _[_.GET_VERIFY_SUCCESS = 1004] = "GET_VERIFY_SUCCESS", _[_.GET_TOKEN_SUCCESS = 1007] = "GET_TOKEN_SUCCESS", _[_.GET_TOKEN_FAIL = 1107] = "GET_TOKEN_FAIL", _[_.UPDATE_PROFILE_SUCCESS = 1008] = "UPDATE_PROFILE_SUCCESS", _[_.UPDATE_PROFILE_FAIL = 1108] = "UPDATE_PROFILE_FAIL", _[_.UPDATE_EMAIL_SUCCESS = 1009] = "UPDATE_EMAIL_SUCCESS", _[_.UPDATE_EMAIL_FAIL = 1109] = "UPDATE_EMAIL_FAIL", _[_.UPDATE_PASSWORD_SUCCESS = 1010] = "UPDATE_PASSWORD_SUCCESS", _[_.UPDATE_PASSWORD_FAIL = 1110] = "UPDATE_PASSWORD_FAIL", _[_.UPDATE_PHONE_SUCCESS = 1011] = "UPDATE_PHONE_SUCCESS", _[_.UPDATE_PHONE_FAIL = 1111] = "UPDATE_PHONE_FAIL", _[_.GET_USER_EXTRA_SUCCESS = 1012] = "GET_USER_EXTRA_SUCCESS", _[_.GET_USER_EXTRA_FAIL = 1112] = "GET_USER_EXTRA_FAIL", _[_.RESET_PASS_SUCCESS = 1013] = "RESET_PASS_SUCCESS", _[_.RESET_PASS_FAIL = 1113] = "RESET_PASS_FAIL", _[_.LOGIN_FAIL = 1101] = "LOGIN_FAIL", _[_.LINK_FAIL = 1102] = "LINK_FAIL", _[_.REGISTER_FAIL = 1103] = "REGISTER_FAIL", _[_.SIGN_IN_FAIL = 1104] = "SIGN_IN_FAIL", _[_.GET_VERIFY_FAIL = 1105] = "GET_VERIFY_FAIL", _[_.GET_PLAYER_INFO_FAIL = 1106] = "GET_PLAYER_INFO_FAIL", _[_.USER_NOT_LOGIN = 1113] = "USER_NOT_LOGIN", _[_.SIGNED_IN = 1201] = "SIGNED_IN", _[_.TOKEN_UPDATED = 1202] = "TOKEN_UPDATED", _[_.TOKEN_INVALID = 1203] = "TOKEN_INVALID", _[_.SIGNED_OUT = 1204] = "SIGNED_OUT", _[_.UNLINK_SUCCESS = 1014] = "UNLINK_SUCCESS", _[_.UNLINK_FAIL = 1114] = "UNLINK_FAIL", _[_.INVALID_EMAIL = 203817223] = "INVALID_EMAIL", _[_.INVALID_PHONE = 203817224] = "INVALID_PHONE", _[_.GET_UID_ERROR = 203817728] = "GET_UID_ERROR", _[_.UID_PRODUCTID_NOT_MATCH = 203817729] = "UID_PRODUCTID_NOT_MATCH", _[_.GET_USER_INFO_ERROR = 203817730] = "GET_USER_INFO_ERROR", _[_.AUTH_METHOD_NOT_SUPPORT = 203817732] = "AUTH_METHOD_NOT_SUPPORT", _[_.PRODUCT_STATUS_ERROR = 203817744] = "PRODUCT_STATUS_ERROR", _[_.PASSWORD_VERIFICATION_CODE_OVER_LIMIT = 203817811] = "PASSWORD_VERIFICATION_CODE_OVER_LIMIT", _[_.INVALID_TOKEN = 203817984] = "INVALID_TOKEN", _[_.INVALID_ACCESS_TOKEN = 203817985] = "INVALID_ACCESS_TOKEN", _[_.INVALID_REFRESH_TOKEN = 203817986] = "INVALID_REFRESH_TOKEN", _[_.TOKEN_AND_PRODUCTID_NOT_MATCH = 203817987] = "TOKEN_AND_PRODUCTID_NOT_MATCH", _[_.AUTH_METHOD_IS_DISABLED = 203817988] = "AUTH_METHOD_IS_DISABLED", _[_.FAIL_TO_GET_THIRD_USER_INFO = 203817989] = "FAIL_TO_GET_THIRD_USER_INFO", _[_.FAIL_TO_GET_THIRD_USER_UNION_ID = 203817990] = "FAIL_TO_GET_THIRD_USER_UNION_ID", _[_.ACCESS_TOKEN_OVER_LIMIT = 203817991] = "ACCESS_TOKEN_OVER_LIMIT", _[_.FAIL_TO_USER_LINK = 203817992] = "FAIL_TO_USER_LINK", _[_.FAIL_TO_USER_UNLINK = 203817993] = "FAIL_TO_USER_UNLINK", _[_.ANONYMOUS_SIGNIN_OVER_LIMIT = 203818019] = "ANONYMOUS_SIGNIN_OVER_LIMIT", _[_.INVALID_APPID = 203818020] = "INVALID_APPID", _[_.INVALID_APPSECRET = 203818021] = "INVALID_APPSECRET", _[_.GET_QQ_USERINFO_ERROR = 203818023] = "GET_QQ_USERINFO_ERROR", _[_.QQINFO_RESPONSE_IS_NULL = 203818024] = "QQINFO_RESPONSE_IS_NULL", _[_.GET_QQ_UID_ERROR = 203818025] = "GET_QQ_UID_ERROR", _[_.PASSWORD_VERIFY_CODE_ERROR = 203818032] = "PASSWORD_VERIFY_CODE_ERROR", _[_.GOOGLE_RESPONSE_NOT_EQUAL_APPID = 203818033] = "GOOGLE_RESPONSE_NOT_EQUAL_APPID", _[_.SIGNIN_USER_STATUS_ERROR = 203818036] = "SIGNIN_USER_STATUS_ERROR", _[_.SIGNIN_USER_PASSWORD_ERROR = 203818037] = "SIGNIN_USER_PASSWORD_ERROR", _[_.PROVIDER_USER_HAVE_BEEN_LINKED = 203818038] = "PROVIDER_USER_HAVE_BEEN_LINKED", _[_.PROVIDER_HAVE_LINKED_ONE_USER = 203818039] = "PROVIDER_HAVE_LINKED_ONE_USER", _[_.FAIL_GET_PROVIDER_USER = 203818040] = "FAIL_GET_PROVIDER_USER", _[_.CANNOT_UNLINK_ONE_PROVIDER_USER = 203818041] = "CANNOT_UNLINK_ONE_PROVIDER_USER", _[_.VERIFY_CODE_INTERVAL_LIMIT = 203818048] = "VERIFY_CODE_INTERVAL_LIMIT", _[_.VERIFY_CODE_EMPTY = 203818049] = "VERIFY_CODE_EMPTY", _[_.VERIFY_CODE_LANGUAGE_EMPTY = 203818050] = "VERIFY_CODE_LANGUAGE_EMPTY", _[_.VERIFY_CODE_RECEIVER_EMPTY = 203818051] = "VERIFY_CODE_RECEIVER_EMPTY", _[_.VERIFY_CODE_ACTION_ERROR = 203818052] = "VERIFY_CODE_ACTION_ERROR", _[_.VERIFY_CODE_TIME_LIMIT = 203818053] = "VERIFY_CODE_TIME_LIMIT", _[_.ACCOUNT_PASSWORD_SAME = 203818064] = "ACCOUNT_PASSWORD_SAME", _[_.PASSWORD_STRENGTH_LOW = 203818065] = "PASSWORD_STRENGTH_LOW", _[_.UPDATE_PASSWORD_ERROR = 203818066] = "UPDATE_PASSWORD_ERROR", _[_.PASSWORD_SAME_AS_BEFORE = 203818067] = "PASSWORD_SAME_AS_BEFORE", _[_.PASSWORD_IS_EMPTY = 203818068] = "PASSWORD_IS_EMPTY", _[_.PASSWORD_TOO_LONG = 203818071] = "PASSWORD_TOO_LONG", _[_.SENSITIVE_OPERATION_TIMEOUT = 203818081] = "SENSITIVE_OPERATION_TIMEOUT", _[_.ACCOUNT_HAVE_BEEN_REGISTERED = 203818082] = "ACCOUNT_HAVE_BEEN_REGISTERED", _[_.UPDATE_ACCOUNT_ERROR = 203818084] = "UPDATE_ACCOUNT_ERROR", _[_.USER_NOT_REGISTERED = 203818087] = "USER_NOT_REGISTERED", _[_.VERIFY_CODE_ERROR = 203818129] = "VERIFY_CODE_ERROR", _[_.USER_HAVE_BEEN_REGISTERED = 203818130] = "USER_HAVE_BEEN_REGISTERED", _[_.REGISTER_ACCOUNT_IS_EMPTY = 203818132] = "REGISTER_ACCOUNT_IS_EMPTY", _[_.VERIFY_CODE_FORMAT_ERROR = 203818134] = "VERIFY_CODE_FORMAT_ERROR", _[_.VERIFY_CODE_AND_PASSWORD_BOTH_NULL = 203818135] = "VERIFY_CODE_AND_PASSWORD_BOTH_NULL", _[_.SEND_EMAIL_FAIL = 203818240] = "SEND_EMAIL_FAIL", _[_.SEND_MESSAGE_FAIL = 203818241] = "SEND_MESSAGE_FAIL", _[_.CONFIG_LOCK_TIME_ERROR = 203818261] = "CONFIG_LOCK_TIME_ERROR";
              }(R = _.AuthRetCode || (_.AuthRetCode = {}));

              class e {
                constructor() {
                  this.listener = null, this.support = !1;
                }

                setAuthListener(_) {
                  this.listener = _;
                }

                switchAuthType(_) {
                  E("switchAuthType", "(I)V", _);
                }

                getSupportAuthType() {
                  return E("getSupportAuthType", "()Ljava/lang/String;");
                }

                login() {
                  E("login", "()V");
                }

                logout() {
                  E("logout", "()V");
                }

                link(_) {
                  E("link", "(I)V", _);
                }

                unlink(_) {
                  E("unlink", "(I)V", _);
                }

                getVerifyCode() {
                  E("getVerifyCode", "()V");
                }

                register() {
                  E("register", "()V");
                }

                setLoginInfo(_) {
                  E("setLoginInfo", "(Ljava/lang/String;)V", JSON.stringify(_ || {}));
                }

                getUserInfo() {
                  return JSON.parse(E("getUserInfo", "()Ljava/lang/String;"));
                }

                getToken(_) {
                  E("getToken", "(Z)V", _);
                }

                updateProfile(_, I) {
                  E("updateProfile", "(Ljava/lang/String;Ljava/lang/String;)V", _, I);
                }

                updatePassword(_, I, S) {
                  E("updatePassword", "(Ljava/lang/String;Ljava/lang/String;I)V", _, I, S);
                }

                updateEmail(_, I) {
                  E("updateEmail", "(Ljava/lang/String;Ljava/lang/String;)V", _, I);
                }

                updatePhone(_, I, S) {
                  E("updatePhone", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", _, I, S);
                }

                getUserExtra() {
                  E("getUserExtra", "()V");
                }

                deleteUser() {
                  E("deleteUser", "()V");
                }

                resetPassword(_, I, S, R = "") {
                  E("resetPassword", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", _, I, S, R);
                }

                onAuthResult(_, E) {
                  this.listener && this.listener(_, E);
                }

              }

              _.AGCAuthService = e, _.authService = new e(), _.authService.support = cc.sys.os === cc.sys.OS_ANDROID;
            }(E = _.auth || (_.auth = {}));
          }(E = _.agc || (_.agc = {}));
        }(e || (e = {})), R.exportViaGlobalVar(["huawei", "agc", "auth"], e.agc.auth);
      }, function (_, E, I) {
        "use strict";

        Object.defineProperty(E, "__esModule", {
          value: !0
        }), E.jsBridge = void 0, E.jsBridge = "undefined" != typeof JavascriptJavaBridge ? new JavascriptJavaBridge() : "undefined" != typeof jsb ? jsb.reflection : null;
      }, function (_, E, I) {
        "use strict";

        Object.defineProperty(E, "__esModule", {
          value: !0
        }), E.getEngineMajorVersion = E.exportViaGlobalVar = void 0, E.exportViaGlobalVar = function (_, E) {
          if (0 === _.length) return;
          const I = globalThis || window;
          if (!I) return;

          const S = _.pop();

          let R = I;

          for (const E of _) R[E] || (R[E] = {}), R = R[E];

          R[S] = E;
        }, E.getEngineMajorVersion = function () {
          const _ = cc.ENGINE_VERSION.match(/\d+/);

          return _ ? _[0] : null;
        };
      }]);
    });
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));