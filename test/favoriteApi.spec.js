/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var FavoriteMock = require('../test/mockObjects/mockAlfrescoApi').Favorite;
var expect = require('chai').expect;

describe('Favorite', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.favoriteMock = new FavoriteMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('Get favorites', function (done) {
        this.favoriteMock.get200Response();

        this.alfrescoJsApi.core.favoritesApi.getFavorites('-me-').then(function (data) {
            expect(data.list.entries[0].entry.target.folder.name).to.be.equal('Data Dictionary');
            done();
        }, function () {
        });
    });

    it('createdAt and modifiedAt should be a date', function (done) {
        this.favoriteMock.get200Response();

        this.alfrescoJsApi.core.favoritesApi.getFavorites('-me-').then(function (data) {
            console.log(data.list.entries[0].entry.target.folder.modifiedAt);
            expect(data.list.entries[0].entry.target.folder.modifiedAt).to.be.equal('2017-03-24T15:30:12.312+0000');
            expect(data.list.entries[0].entry.target.folder.modifiedAt instanceof Date).to.be.equal(true);
            done();
        }, function () {
        });
    });

});
