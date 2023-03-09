declare namespace huawei {
    namespace agc {
        namespace auth {
            /**
             * @en
             * Refer to [AGConnectAuthCredential](https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-References/agconnectauthcredential#getProvider), enum value of the auth credential.
             * @zh
             * 可参考 [AGConnectAuthCredential](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agconnectauthcredential#getProvider)，认证方式的枚举值。
             */
            enum AuthProvider {
                /**
                 * @en
                 * Anonymous sign-in.
                 * @zh
                 * 匿名登录
                 */
                Anonymous = 0,
                /**
                 * @en
                 * Sign-in through a HUAWEI ID.
                 * @zh
                 * HMS 登录
                 */
                HMS_Provider = 1,
                /**
                 * @en
                 * Sign-in through a Facebook account.
                 * @zh
                 * Facebook 登录
                 */
                Facebook_Provider = 2,
                /**
                 * @en
                 * Sign-in through a Twitter account.
                 * @zh
                 * Twitter 登录
                 */
                Twitter_Provider = 3,
                /**
                 * @en
                 * Sign-in through a WeChat account.
                 * @zh
                 * 微信登录
                 */
                WeiXin_Provider = 4,
                /**
                 * @en
                 * Sign-in through a HUAWEI Game Service account.
                 * @zh
                 * 华为游戏帐号登录
                 */
                HWGame_Provider = 5,
                /**
                 * @en
                 * Sign-in through a Tencent QQ account.
                 * @zh
                 * QQ 登录
                 */
                QQ_Provider = 6,
                /**
                 * @en
                 * Sign-in through a Weibo account.
                 * @zh
                 * 微博登录
                 */
                WeiBo_Provider = 7,
                /**
                 * @en
                 * Sign-in through a Google account.
                 * @zh
                 * 谷歌帐号登录
                 */
                Google_Provider = 8,
                /**
                 * @en
                 * Sign-in through a Google Play account.
                 * @zh
                 * 谷歌游戏帐号登录
                 */
                GoogleGame_Provider = 9,
                /**
                 * @en
                 * Sign-in through a self-created account.
                 * @zh
                 * 自建帐号登录
                 */
                SelfBuild_Provider = 10,
                /**
                 * @en
                 * Sign-in through a hosted mobile phone account.
                 * @zh
                 * 托管手机帐号
                 */
                Phone_Provider = 11,
                /**
                 * @en
                 * Sign-in through a hosted email account.
                 * @zh
                 * 托管邮箱帐号
                 */
                Email_Provider = 12
            }
            /**
             * @en
             * Refer to [AGCAuthException](https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-References/agcauthexception), exceptions of the AppGallery Connect Auth Service SDK. Code 1XXX indicate unified code used by the integrate plug-in. Error codes 2038XXXXX indicate backend server errors, and other error codes indicate SDK internal errors.
             * @zh
             * 可参考 [AGCAuthException](https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-References/agcauthexception)，捕捉 AGConnect Auth SDK 的异常，其中 1XXX 的 Code 为接入插件使用的统一封装，2038XXXXX 的错误码为后端服务器的错误信息，其他的为 SDK 内部错误信息。
             */
            enum AuthRetCode {
                /**
                 * @en
                 * The access token is empty. Please sign in again.
                 * @zh
                 * AccessToken为空，建议重新登录。
                 */
                NULL_TOKEN = 1,
                /**
                 * @en
                 * Obtain the access token information before sign-in.
                 * @zh
                 * 未登录时去获取 AccessToken 信息。
                 */
                NOT_SIGN_IN = 2,
                /**
                 * @en
                 * The user has been associated with the authentication mode.
                 * @zh
                 * 用户已经关联此 Provider 登录方式。
                 */
                USER_LINKED = 3,
                /**
                 * @en
                 * The user has not been associated with the authentication mode.
                 * @zh
                 * 用户尚未关联此 Provider 登录方式。
                 */
                USER_UNLINKED = 4,
                /**
                 * @en
                 * A user has signed in using an authentication mode. Use the corresponding account or another account to sign in without signing out.
                 * @zh
                 * 已经使用一个帐号登录，在未登出情况下使用此帐号或者其他帐号登录。
                 */
                ALREADY_SIGN_IN_USER = 5,
                /**
                 * @en
                 * The email verification code is empty.
                 * @zh
                 * 邮件验证码为空
                 */
                EMAIL_VERIFICATION_IS_EMPTY = 6,
                /**
                 * @en
                 * The SMS verification code is empty.
                 * @zh
                 * 电话验证码为空
                 */
                PHONE_VERIFICATION_IS_EMPTY = 7,
                /**
                 * @en
                 * Login success.
                 * @zh
                 * 登录成功
                 */
                LOGIN_SUCCESS = 1001,
                /**
                 * @en
                 * Link succeed.
                 * @zh
                 * 账号连接成功
                 */
                LINK_SUCCESS = 1002,
                /**
                 * @en
                 * Register succeed.
                 * @zh
                 * 账号注册成功
                 */
                REGISTER_SUCCESS = 1003,
                /**
                 * @en
                 * Get verify code succeed.
                 * @zh
                 * 获取验证码成功
                 */
                GET_VERIFY_SUCCESS = 1004,
                /**
                 * @en
                 * Get verfiy code failed.
                 * @zh
                 * 获取 Token 成功
                 */
                GET_TOKEN_SUCCESS = 1007,
                /**
                 * @en
                 * Get token failed.
                 * @zh
                 * 获取 Token 失败
                 */
                GET_TOKEN_FAIL = 1107,
                /**
                 * @en
                 * Update profile succeed.
                 * @zh
                 * 更新用户信息成功
                 */
                UPDATE_PROFILE_SUCCESS = 1008,
                /**
                 * @en
                 * Update profile failed.
                 * @zh
                 * 更新用户信息失败
                 */
                UPDATE_PROFILE_FAIL = 1108,
                /**
                 * @en
                 * Update email succeed.
                 * @zh
                 * 更新用户邮箱成功
                 */
                UPDATE_EMAIL_SUCCESS = 1009,
                /**
                 * @en
                 * Update email failed.
                 * @zh
                 * 更新用户邮箱失败
                 */
                UPDATE_EMAIL_FAIL = 1109,
                /**
                 * @en
                 * Update password succeed.
                 * @zh
                 * 更新用户密码成功
                 */
                UPDATE_PASSWORD_SUCCESS = 1010,
                /**
                 * @en
                 * Update password failed.
                 * @zh
                 * 更新用户密码失败
                 */
                UPDATE_PASSWORD_FAIL = 1110,
                /**
                 * @en
                 * Update phone succeed.
                 * @zh
                 * 更新手机号成功
                 */
                UPDATE_PHONE_SUCCESS = 1011,
                /**
                 * @en
                 * Update phone failed.
                 * @zh
                 * 更新手机号失败
                 */
                UPDATE_PHONE_FAIL = 1111,
                /**
                 * @en
                 * Get user extra info success.
                 * @zh
                 * 获取当前用户的 Extra 信息成功
                 */
                GET_USER_EXTRA_SUCCESS = 1012,
                /**
                 * @en
                 * Get user extra info failed.
                 * @zh
                 * 获取当前用户的 Extra 信息失败
                 */
                GET_USER_EXTRA_FAIL = 1112,
                /**
                 * @en
                 * Reset password succeed.
                 * @zh
                 * 重置密码成功
                 */
                RESET_PASS_SUCCESS = 1013,
                /**
                 * @en
                 * Reset password failed.
                 * 重置密码失败
                 */
                RESET_PASS_FAIL = 1113,
                /**
                 * Login failed.
                 * @zh
                 * 登录失败
                 */
                LOGIN_FAIL = 1101,
                /**
                 * @en
                 * Link failed.
                 * @zh
                 * 账号连接失败
                 */
                LINK_FAIL = 1102,
                /**
                 * @en
                 * Register failed.
                 * @zh
                 * 账号注册失败
                 */
                REGISTER_FAIL = 1103,
                /**
                 * @en
                 * Sign in failed.
                 * @zh
                 * 授权登录失败（Google/HMS/微信）
                 */
                SIGN_IN_FAIL = 1104,
                /**
                 * @en
                 * Get verfiy code failed.
                 * @zh
                 * 获取验证码失败
                 */
                GET_VERIFY_FAIL = 1105,
                /**
                 * @en
                 * Get player info failed.
                 * @zh
                 * 获取用户信息失败
                 */
                GET_PLAYER_INFO_FAIL = 1106,
                /**
                 * @en
                 * User not login.
                 * @zh
                 * 用户未登录
                 */
                USER_NOT_LOGIN = 1113,
                /**
                 * @en
                 * User signed in.
                 * @zh
                 * 用户授权登录
                 */
                SIGNED_IN = 1201,
                /**
                 * @en
                 * User token updated.
                 * @zh
                 * 用户 Token 更新
                 */
                TOKEN_UPDATED = 1202,
                /**
                 * @en
                 * User token invalid.
                 * @zh
                 * Token 无效
                 */
                TOKEN_INVALID = 1203,
                /**
                 * @en
                 * User singed out.
                 * @zh
                 * 用户授权登出
                 */
                SIGNED_OUT = 1204,
                /**
                 * @en
                 * unlink succeed.
                 * @zh
                 * 账号取消连接成功
                 */
                UNLINK_SUCCESS = 1014,
                /**
                 * @en
                 * unlink failed.
                 * @zh
                 * 账号取消连接失败
                 */
                UNLINK_FAIL = 1114,
                /**
                 * @en
                 * Invalid email address.
                 * @zh
                 * 输入的邮箱地址不合法
                 */
                INVALID_EMAIL = 203817223,
                /**
                 * @en
                 * Invalid mobile number.
                 * @zh
                 * 输入的手机号码不合法
                 */
                INVALID_PHONE = 203817224,
                /**
                 * @en
                 * Failed to obtain the user ID.
                 * @zh
                 * 获取用户 ID 失败
                 */
                GET_UID_ERROR = 203817728,
                /**
                 * @en
                 * The user ID does not match the product ID.
                 * @zh
                 * 用户 ID 和产品 ID 不匹配
                 */
                UID_PRODUCTID_NOT_MATCH = 203817729,
                /**
                 * @en
                 * Failed to obtain user information.
                 * @zh
                 * 获取用户信息失败
                 */
                GET_USER_INFO_ERROR = 203817730,
                /**
                 * @en
                 * Currently, Auth Service is deployed at four sites whose authentication modes are different.
                 * @zh
                 * 当前 Auth 微服务部署了4个局点，每个局点支持的认证方式不同
                 */
                AUTH_METHOD_NOT_SUPPORT = 203817732,
                /**
                 * @en
                 * Auth Service is not enabled for the product.
                 * @zh
                 * 产品没有开通认证服务
                 */
                PRODUCT_STATUS_ERROR = 203817744,
                /**
                 * @en
                 * The number of verification code inputs for password-based sign-in exceeds the upper limit.
                 * @zh
                 * 密码验证码次数超过限制
                 */
                PASSWORD_VERIFICATION_CODE_OVER_LIMIT = 203817811,
                /**
                 * @en
                 * The client token is unavailable.
                 * @zh
                 * Client Token 不可用
                 */
                INVALID_TOKEN = 203817984,
                /**
                 * @en
                 * The access token is unavailable.
                 * @zh
                 * Access Token 不可用
                 */
                INVALID_ACCESS_TOKEN = 203817985,
                /**
                 * @en
                 * The refresh token is unavailable. The user's refresh token has expired. Sign in the user again to obtain a new refresh token.
                 * @zh
                 * Refresh Token 不可用。用户的 Refresh Token 过期，重新登录，获取新的 Refresh Token
                 */
                INVALID_REFRESH_TOKEN = 203817986,
                /**
                 * @en
                 * The token does not match the product ID. It is recommended that a consistency check between agconnect-services.json and information from AppGallery Connect be conducted.
                 * @zh
                 * Token 和 Product Id 不匹配，建议检查 agconnect-services.json 是否与平台上申请的信息一致
                 */
                TOKEN_AND_PRODUCTID_NOT_MATCH = 203817987,
                /**
                 * @en
                 * The authentication mode is not supported.
                 * @zh
                 * 不支持的认证方式
                 */
                AUTH_METHOD_IS_DISABLED = 203817988,
                /**
                 * @en
                 * Failed to obtain the third-party user information.
                 * @zh
                 * 获取第三方用户信息失败
                 */
                FAIL_TO_GET_THIRD_USER_INFO = 203817989,
                /**
                 * @en
                 * Failed to obtain the third-party union ID.
                 * @zh
                 * 获取第三方 Union ID 失败
                 */
                FAIL_TO_GET_THIRD_USER_UNION_ID = 203817990,
                /**
                 * @en
                 * The number of access tokens exceeds the upper limit.
                 * @zh
                 * AccessToken 数量超过了限定数量
                 */
                ACCESS_TOKEN_OVER_LIMIT = 203817991,
                /**
                 * @en
                 * Failed to associate the user.
                 * @zh
                 * link 用户失败
                 */
                FAIL_TO_USER_LINK = 203817992,
                /**
                 * @en
                 * Failed to disassociate the user.
                 * @zh
                 * unlink 用户失败
                 */
                FAIL_TO_USER_UNLINK = 203817993,
                /**
                 * @en
                 * The number of signed-in anonymous users exceeds the upper limit.
                 * @zh
                 * 匿名用户登录超过限制
                 */
                ANONYMOUS_SIGNIN_OVER_LIMIT = 203818019,
                /**
                 * @en
                 * The app ID is unavailable.
                 * @zh
                 * app ID 不可用
                 */
                INVALID_APPID = 203818020,
                /**
                 * @en
                 * The app secret is unavailable.
                 * @zh
                 * app secret 不可用
                 */
                INVALID_APPSECRET = 203818021,
                /**
                 * @en
                 * Failed to obtain the third-party QQ user information.
                 * @zh
                 * 获取 QQ 第三方用户信息失败
                 */
                GET_QQ_USERINFO_ERROR = 203818023,
                /**
                 * @en
                 * No QQ Info information is returned.
                 * @zh
                 * 获取 QQ Info 返回为空
                 */
                QQINFO_RESPONSE_IS_NULL = 203818024,
                /**
                 * @en
                 * No QQ UID is returned.
                 * @zh
                 * 获取 QQ UID 返回为空
                 */
                GET_QQ_UID_ERROR = 203818025,
                /**
                 * @en
                 * Incorrect password or verification code.
                 * @zh
                 * 密码和验证码错误
                 */
                PASSWORD_VERIFY_CODE_ERROR = 203818032,
                /**
                 * @en
                 * The information returned by Google does not match the app ID.
                 * @zh
                 * Google 返回信息与 app ID 不匹配
                 */
                GOOGLE_RESPONSE_NOT_EQUAL_APPID = 203818033,
                /**
                 * @en
                 * The user is suspended.
                 * @zh
                 * 用户被 CP 停用
                 */
                SIGNIN_USER_STATUS_ERROR = 203818036,
                /**
                 * @en
                 * Incorrect password.
                 * @zh
                 * 用户密码错误
                 */
                SIGNIN_USER_PASSWORD_ERROR = 203818037,
                /**
                 * @en
                 * The authentication mode has been associated with another user.
                 * @zh
                 * 提供者已经被其他用户绑定
                 */
                PROVIDER_USER_HAVE_BEEN_LINKED = 203818038,
                /**
                 * @en
                 * The authentication mode has already been associated with the user.
                 * @zh
                 * 帐号中该提供者类型已经被绑定过
                 */
                PROVIDER_HAVE_LINKED_ONE_USER = 203818039,
                /**
                 * @en
                 * Failed to obtain user information from an authentication platform.
                 * @zh
                 * 获取提供者用户失败
                 */
                FAIL_GET_PROVIDER_USER = 203818040,
                /**
                 * @en
                 * Cannot disassociate a single authentication mode.
                 * @zh
                 * 不能对单一的提供者做 unlink 操作
                 */
                CANNOT_UNLINK_ONE_PROVIDER_USER = 203818041,
                /**
                 * @en
                 * Sending verification codes too frequently.
                 * @zh
                 * 在发送间隔内发送验证码
                 */
                VERIFY_CODE_INTERVAL_LIMIT = 203818048,
                /**
                 * @en
                 * The verification code is empty.
                 * @zh
                 * 验证码为空
                 */
                VERIFY_CODE_EMPTY = 203818049,
                /**
                 * @en
                 * The language for sending a verification code is empty.
                 * @zh
                 * 验证码发送语言为空
                 */
                VERIFY_CODE_LANGUAGE_EMPTY = 203818050,
                /**
                 * @en
                 * The verification code receiver is empty.
                 * @zh
                 * 验证码接收器为空
                 */
                VERIFY_CODE_RECEIVER_EMPTY = 203818051,
                /**
                 * @en
                 * The verification code type is empty.
                 * @zh
                 * 验证码类型为空
                 */
                VERIFY_CODE_ACTION_ERROR = 203818052,
                /**
                 * @en
                 * The number of times for sending verification codes exceeds the upper limit.
                 * @zh
                 * 验证码发送次数超过限制
                 */
                VERIFY_CODE_TIME_LIMIT = 203818053,
                /**
                 * @en
                 * The password cannot be the same as the user name.
                 * @zh
                 * 用户名密码一致
                 */
                ACCOUNT_PASSWORD_SAME = 203818064,
                /**
                 * @en
                 * The password strength is too low.
                 * @zh
                 * 密码强度太低
                 */
                PASSWORD_STRENGTH_LOW = 203818065,
                /**
                 * @en
                 * Failed to update the password.
                 * @zh
                 * 更新密码失败
                 */
                UPDATE_PASSWORD_ERROR = 203818066,
                /**
                 * @en
                 * The new password cannot be the same as the old one.
                 * @zh
                 * 密码与老密码相同
                 */
                PASSWORD_SAME_AS_BEFORE = 203818067,
                /**
                 * @en
                 * The password is empty.
                 * @zh
                 * 密码为空
                 */
                PASSWORD_IS_EMPTY = 203818068,
                /**
                 * @en
                 * The password is too long.
                 * @zh
                 * 密码太长
                 */
                PASSWORD_TOO_LONG = 203818071,
                /**
                 * @en
                 * The latest sign-in time of the sensitive operation times out.
                 * @zh
                 * 敏感操作的最近登录时间超时
                 */
                SENSITIVE_OPERATION_TIMEOUT = 203818081,
                /**
                 * @en
                 * The account already exists.
                 * @zh
                 * 帐号已经被注册
                 */
                ACCOUNT_HAVE_BEEN_REGISTERED = 203818082,
                /**
                 * @en
                 * Failed to update the account.
                 * @zh
                 * 更新帐号失败
                 */
                UPDATE_ACCOUNT_ERROR = 203818084,
                /**
                 * @en
                 * The user has not been registered.
                 * @zh
                 * 用户没有注册
                 */
                USER_NOT_REGISTERED = 203818087,
                /**
                 * @en
                 * Incorrect verification code.
                 * @zh
                 * 验证码错误
                 */
                VERIFY_CODE_ERROR = 203818129,
                /**
                 * @en
                 * The user already exists.
                 * @zh
                 * 用户已经被注册
                 */
                USER_HAVE_BEEN_REGISTERED = 203818130,
                /**
                 * @en
                 * The account is empty.
                 * @zh
                 * 注册帐号为空
                 */
                REGISTER_ACCOUNT_IS_EMPTY = 203818132,
                /**
                 * @en
                 * Incorrect verification code format.
                 * @zh
                 * 验证码格式错误
                 */
                VERIFY_CODE_FORMAT_ERROR = 203818134,
                /**
                 * @en
                 * The verification code or password cannot be empty.
                 * @zh
                 * 验证码和密码都为空
                 */
                VERIFY_CODE_AND_PASSWORD_BOTH_NULL = 203818135,
                /**
                 * @en
                 * Failed to send the email.
                 * @zh
                 * 发送邮件失败
                 */
                SEND_EMAIL_FAIL = 203818240,
                /**
                 * @en
                 * Failed to send the SMS message.
                 * @zh
                 * 发送短信失败
                 */
                SEND_MESSAGE_FAIL = 203818241,
                /**
                 * @en
                 * Failed to lock an account because the maximum number of password or verification code retry times is not set.
                 * @zh
                 * 配置密码/验证码最大尝试次数/冻结时常错误
                 */
                CONFIG_LOCK_TIME_ERROR = 203818261
            }
            interface AuthListener {
                (retCode: number, msg: string): void;
            }
            class AGCAuthService {
                private listener;
                support: boolean;
                /**
                 * @en
                 * set the listener for auth
                 * @zh
                 * 设置认证服务监听
                 * @param {AuthListener} listener auth listener
                 * @example
                 * ```
                 * huawei.agc.auth.authService.setAuthListener(this.onAuthResult, this));
                 *
                 * onAuthResult: function (code, msg) {
                 *     switch (code) {
                 *         ...
                 *     }
                 * }
                 * ```
                 */
                setAuthListener(listener: AuthListener): void;
                /**
                 * @en
                 * Select the current authentication method. You need to call this method first, before calling other methods such as `login`.
                 * @zh
                 * 选取当前认证登录方式。需要先调用该方法，才能调用 `login` 等方法。
                 * @param { AuthProvider } authType enumeration value of AuthProvider type
                 * @example
                 * ```
                 * huawei.agc.auth.authService.switchAuthType(huawei.agc.auth.AuthProvider.HMS_Provider);
                 * ```
                 */
                switchAuthType(authType: AuthProvider): void;
                /**
                 * @en
                 * Get supported authentication methods, such as "[0, 1, 2]", refer to AuthProvider type.
                 * @zh
                 * 获取支持的认证登录方式，例如 "[0, 1, 2]"。枚举值对应 AuthProvider。
                 * @example
                 * ```
                 * let supAuthType = huawei.agc.auth.authService.getSupportAuthType();
                 * console.log("getSupportAuthType...", "type = ", supAuthType);
                 * ```
                 */
                getSupportAuthType(): string;
                /**
                 * @en
                 * Call the **login** method of the current authentication method.
                 * @zh
                 * 调用当前认证登录方式的 **登录** 方法
                 * @example
                 * ```
                 * huawei.agc.auth.authService.login();
                 * ```
                 */
                login(): void;
                /**
                 * @en
                 * Call the **logout** method of the current authentication method.
                 * @zh
                 * 调用当前认证登录方式的 **登出** 方法
                 * @example
                 * ```
                 * huawei.agc.auth.authService.logout();
                 * ```
                 */
                logout(): void;
                /**
                 * @en
                 * Associate a new authentication login method for the current user.
                 * @zh
                 * 为当前用户关联新的认证登录方式
                 * @param { AuthProvider } authType enumeration value of AuthProvider type
                 * @example
                 * ```
                 * huawei.agc.auth.authService.link(huawei.agc.auth.AuthProvider.HMS_Provider);
                 * ```
                 */
                link(authType: AuthProvider): void;
                /**
                 * @en
                 * Disassociates the current user from the associated login method.
                 * @zh
                 * 当前用户解除关联的登录方式。
                 * @param { AuthProvider } authType other provider tage
                 * @example
                 * ```
                 * huawei.agc.auth.authService.unlink(huawei.agc.auth.AuthProvider.HMS_Provider);
                 * ```
                 */
                unlink(authType: AuthProvider): void;
                /**
                 * @en
                 * get verify code (for Email or Phone provider)
                 * @zh
                 * 获取验证码（邮箱或手机认证登录方式）
                 * @example
                 * ```
                 * huawei.agc.auth.authService.getVerifyCode();
                 * ```
                 */
                getVerifyCode(): void;
                /**
                 * @en
                 * User register (for phone number or email account authentication methods only).
                 * @zh
                 * 用户注册（邮箱或手机认证登录方式）
                 * @example
                 * ```
                 * huawei.agc.auth.authService.register();
                 * ```
                 */
                register(): void;
                /**
                 * @en
                 * Set user registration or login information (for phone number or email account authentication methods only), the method needs to be called before other methods.
                 * @zh
                 * 设置用户注册或登录信息（邮箱或手机认证登录方式），该方法需要在其他方法前调用。
                 * @param loginInfo JSON Object, according to the needs of phone or email account authentication method.
                 * @example
                 * ```
                 * let loginInfo = {
                 *    email: '953xxxxx#gmail.com',  // email provider required, replace `#` to `@`
                 *    phoneNumber: "181XXXXXXXX",   // phone provider required
                 *    countryCode: "86",            // phone provider required
                 *    verifyCode: code,             // after `register` or `getVerifyCode` called, reset login info with verify code
                 *    action: "register",           // `register` or `reset`
                 *    locale: "zh",                 // language tag, optional, use system language by default
                 * }
                 * huawei.agc.auth.authService.setLoginInfo(loginInfo);
                 * ```
                 */
                setLoginInfo(loginInfo: any): void;
                /**
                 * @en
                 * Get current user info.
                 * @zh
                 * 获取当前用户信息
                 * @example
                 * ```
                 * let userInfo = huawei.agc.auth.authService.getUserInfo();
                 * console.log('getUserInfo...', 'info =', JSON.stringify(userInfo));
                 * ```
                 */
                getUserInfo(): any;
                /**
                 * @en
                 * Obtains the Access Token of a user from AppGallery Connect, update results via the asynchronous callback. Callback code is `huawei.agc.auth.AuthRetCode.GET_TOKEN_SUCCESS` or `huawei.agc.auth.AuthRetCode.GET_TOKEN_FAIL`.
                 * @zh
                 * 获取用户的 Access Token 信息。通过异步回调更新结果。回调 Code 为 `huawei.agc.auth.AuthRetCode.GET_TOKEN_SUCCESS` 或 `huawei.agc.auth.AuthRetCode.GET_TOKEN_FAIL`。
                 * @param forceRefresh Indicates whether to forcibly update the Access Token for new users.
                 * @example
                 * ```
                 * huawei.agc.auth.authService.getToken(true);
                 * ```
                 */
                getToken(forceRefresh: boolean): void;
                /**
                 * @en
                 * Updates information (profile image and nickname) for the current user.
                 * This API verifies the Access Token and Refresh Token of a user. Ensure that the Refresh Token is within its validity period. Otherwise, result code `INVALID_REFRESH_TOKEN = 203817986` will be returned, indicating that the user's Refresh Token has expired. When receiving the result code, prompt your user to sign in again so that you can obtain the new Access Token and Refresh Token.
                 * @zh
                 * 更新当前用户的个人信息（图像和昵称）。
                 * 此接口会验证用户 Access Token 和 Refresh Token，请确保用户 Refresh Token 在有效期内，否则会抛出 INVALID_REFRESH_TOKEN = 203817986（用户 Refresh Token 无效错误码）。开发者收到此错误码后，应该让用户重新登录，获取新的 Access Token 和 Refresh Token。
                 * @param displayName Display/nick name.
                 * @param photoUrl    Icon photo url.
                 * @example
                 * ```
                 * huawei.agc.auth.authService.updateProfile("name1", photoUrl);
                 * ```
                 */
                updateProfile(displayName: string, photoUrl: string): void;
                /**
                 * @en
                 * Updates the current user's password, update results via the asynchronous callback. After the password is updated successfully, the user's Access Token is refreshed and the user is asked to re-sign in. Otherwise, the API call may fail due to the Access Token matching failure.
                 * @zh
                 * 更新当前用户的密码，通过异步回调更新结果。密码更新成功后，用户的 Access Token 将会刷新，请用户重新登录，否则会出现 Access Token 不匹配而调用接口失败。
                 * @param newPassword New password.
                 * @param verifyCode  Verification code.
                 * @param provider    Enumeration value of AuthProvider type, which is used to distinguish the email account from the phone number account.
                 * @example
                 * ```
                 * huawei.agc.auth.authService.updatePassword("neWPaSSwOrd", "1234", huawei.agc.auth.AuthProvider.Phone_Provider);
                 * ```
                 */
                updatePassword(newPassword: string, verifyCode: string, provider: AuthProvider): void;
                /**
                 * @en
                 * Updates the email account of the current user, update results via the asynchronous callback. Before calling this interface, call `getVerifyCode` function to apply a verification code for the new phone number to make sure the new number is owned by the current user.
                 * @zh
                 * 更新当前用户邮箱。通过异步回调更新结果。调用此接口之前，请调用 getVerifyCode 方法来为新邮箱申请验证码，从而确定新邮箱为该用户所有。
                 * @param newEmail New email account.
                 * @param newVerifyCode Verification code.
                 * @example
                 * ```
                 * huawei.agc.auth.authService.updateEmail("newUser1#gmail.com", "1234"); // replace `#` to `@`
                 * ```
                 */
                updateEmail(newEmail: string, newVerifyCode: string): void;
                /**
                 * @en
                 * Updates the phone number of the current user, update results via the asynchronous callback. Before calling this method, call the `getVerifyCode` function to apply for a verification code of the new email account. The verification code is used to verify that the current user owns the new email account.
                 * @zh
                 * 更新当前用户手机号。通过异步回调更新结果。调用此接口之前，请调用 getVerifyCode 方法来为新手机申请验证码，从而确定新手机为该用户所有。
                 * @param countryCode Country/Region code. For example, 86 indicates China, 49 indicates Germany, 7 indicates Russia, and 65 indicates Singapore. This parameter supports multiple formats. Taking China as an example, the code can be 86, 0086, or +86.
                 * @param phoneNumber Phone number. The number does not include the plus sign (+) and country/region code. For example, for the phone number +86132xxxxxxxx, the value of this parameter is 132xxxxxxxx.
                 * @param newVerifyCode  Verification code.
                 * @example
                 * ```
                 * huawei.agc.auth.authService.updateEmail("0086", "132xxxxxxxx", "1234");
                 * ```
                 */
                updatePhone(countryCode: string, phoneNumber: string, newVerifyCode: string): void;
                /**
                 * @en
                 * Obtains UserExtra of the current user, update results via the asynchronous callback. This API verifies the Access Token and Refresh Token of a user. Ensure that the Refresh Token is within its validity period. Otherwise, result code `INVALID_REFRESH_TOKEN = 203817986` will be returned, indicating that the user's Refresh Token has expired.
                 * @zh
                 * 获取当前用户的 UserExtra，通过异步回调更新结果。此接口会验证用户 Access Token 和 Refresh Token，请确保用户 Refresh Token 在有效期内，否则会抛出错误码 `INVALID_REFRESH_TOKEN = 203817986`，表示用户 Refresh Token 无效错误码。开发者收到此错误码后，应该让用户重新登录，获取新的 Access Token 和 Refresh Token。
                 * @example
                 * ```
                 * huawei.agc.auth.authService.getUserExtra();
                 * ```
                 */
                getUserExtra(): void;
                /**
                 * @en
                 * Deletes the current user information and cache information from the AppGallery Connect server.
                 * @zh
                 * 在 AppGallery Connect 服务器端删除当前用户信息，同时清除缓存信息。
                 * @example
                 * ```
                 * huawei.agc.auth.authService.deleteUser();
                 * ```
                 */
                deleteUser(): void;
                /**
                 * @en
                 * Resets the password using a phone number (for phone number or email account authentication methods only). If the `countryCode parameter` is sent, it is the phone number authentication method, otherwise it is email account authentication method. Callback code is `huawei.agc.auth.AuthRetCode.RESET_PASS_SUCCESS` or `huawei.agc.auth.AuthRetCode.RESET_PASS_FAIL`.
                 * @zh
                 * 重置密码（邮箱或手机认证登录方式）。若传入 `countryCode` 参数则为手机认证登录方式，不传则为邮箱认证登录方式。回调 Code 为 `huawei.agc.auth.AuthRetCode.RESET_PASS_SUCCESS` 和 `huawei.agc.auth.AuthRetCode.RESET_PASS_FAIL`。
                 * @param emailOrPhone Email account or phone number.
                 * @param newPassword  New password.
                 * @param verifyCode   Verification code.
                 * @param countryCode  Country/Region code. For example, 86 indicates China, 49 indicates Germany, 7 indicates Russia, and 65 indicates Singapore. This parameter supports multiple formats. Taking China as an example, the code can be 86, 0086, or +86.
                 * @example
                 * ```
                 * huawei.agc.auth.authService.resetPassword("132xxxxxxxx", "neWPaSSwOrd", "1234", "0086");
                 * huawei.agc.auth.authService.resetPassword("newUser1#gmail.com", "neWPaSSwOrd", "1234"); // replace `#` to `@`
                 * ```
                 */
                resetPassword(emailOrPhone: string, newPassword: string, verifyCode: string, countryCode?: string): void;
            }
            const authService: AGCAuthService;
        }
    }
}
