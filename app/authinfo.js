"use strict";
var AuthInfo = (function () {
    function AuthInfo(client_id, client_secrect) {
        this._client_id = client_id;
        this._client_secret = client_secrect;
        this._grant_type = 'client_credentials';
        this._baseUrl = 'https://developer.api.autodesk.com';
        this._version = 'v1';
    }
    Object.defineProperty(AuthInfo.prototype, "Authentication", {
        get: function () {
            return this._baseUrl + '/authentication/' + this._version + '/authenticate';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthInfo.prototype, "Credentials", {
        get: function () {
            return {
                client_id: this._client_id,
                client_secret: this._client_secret,
                grant_type: this._grant_type,
                scope: 'data:read'
            };
        },
        enumerable: true,
        configurable: true
    });
    return AuthInfo;
}());
exports.AuthInfo = AuthInfo;

//# sourceMappingURL=authinfo.js.map
