'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class FavoriteMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/favorites')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 2,
                        'hasMoreItems': false,
                        'totalItems': 2,
                        'skipCount': 0,
                        'maxItems': 100
                    },
                    'entries': [{
                        'entry': {
                            'targetGuid': '5ded8a48-7095-40a6-9857-fa38530fda23',
                            'createdAt': '2017-03-28T15:48:19.297+0000',
                            'target': {
                                'folder': {
                                    'name': 'Data Dictionary',
                                    'createdAt': '2017-03-10T11:17:42.503+0000',
                                    'modifiedAt': '2017-03-24T15:30:12.312+0000',
                                    'createdByUser': {'id': 'System', 'displayName': 'System'},
                                    'modifiedByUser': {'id': 'admin', 'displayName': 'Administrator'},
                                    'isFolder': true,
                                    'isFile': false,
                                    'title': 'Data Dictionary',
                                    'guid': '5ded8a48-7095-40a6-9857-fa38530fda23',
                                    'description': 'Data Dictionary',
                                    'createdBy': 'System',
                                    'modifiedBy': 'admin',
                                    'parentId': '1ee81bf8-52d6-4cfc-a924-1efbc79306bf',
                                    'id': '5ded8a48-7095-40a6-9857-fa38530fda23'
                                }
                            }
                        }
                    }, {
                        'entry': {
                            'targetGuid': '35c37954-24de-4d94-b092-e1724e3405b7',
                            'createdAt': '2017-03-28T15:48:17.772+0000',
                            'target': {
                                'folder': {
                                    'name': 'example',
                                    'createdAt': '2017-03-10T11:27:29.091+0000',
                                    'modifiedAt': '2017-03-10T11:33:20.796+0000',
                                    'createdByUser': {'id': 'admin', 'displayName': 'Administrator'},
                                    'modifiedByUser': {'id': 'admin', 'displayName': 'Administrator'},
                                    'isFolder': true,
                                    'isFile': false,
                                    'guid': '35c37954-24de-4d94-b092-e1724e3405b7',
                                    'createdBy': 'admin',
                                    'modifiedBy': 'admin',
                                    'parentId': '1ee81bf8-52d6-4cfc-a924-1efbc79306bf',
                                    'id': '35c37954-24de-4d94-b092-e1724e3405b7'
                                }
                            }
                        }
                    }]
                }
            });
    }
}

module.exports = FavoriteMock;
