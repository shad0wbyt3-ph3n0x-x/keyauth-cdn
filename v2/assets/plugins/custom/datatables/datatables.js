"use strict";

var KTDatatables = function () {

    var initTableLicenses = function () {
        var table = $('#kt_datatable_licenses');

        table.DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            ajax: {
                url: '/app/license-fetch.php',
                type: 'POST'
            },
            columns: [
                { data: 'key' },
                { data: 'gendate' },
                { data: 'genby' },
                { data: 'expires' },
                { data: 'note' },
                { data: 'usedon' },
                { data: 'usedby' },
                { data: 'status' },
                { data: 'actions' }
            ],
            columnDefs: [
                { targets: -1, orderable: false, searchable: false }
            ],
            order: [[1, 'desc']]
        });
    };

    var initTableUsers = function () {
        var table = $('#kt_datatable_users');

        table.DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            ajax: {
                url: 'includes/api/admin/User/fetch.php',
                type: 'POST'
            },
            columns: [
                { data: 'username' },
                { data: 'email' },
                { data: 'owner' },
                { data: 'app' },
                { data: 'role' },
                { data: 'expires' },
                { data: 'lastlogin' },
                { data: 'status' },
                { data: 'actions' }
            ],
            columnDefs: [
                { targets: -1, orderable: false, searchable: false }
            ],
            order: [[1, 'asc']]
        });
    };

    var initTableApps = function () {
        var table = $('#kt_datatable_apps');

        table.DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            ajax: {
                url: 'includes/api/admin/Application/fetch.php',
                type: 'POST'
            },
            columns: [
                { data: 'name' },
                { data: 'owner' },
                { data: 'secret' },
                { data: 'createdate' },
                { data: 'status' },
                { data: 'actions' }
            ],
            columnDefs: [
                { targets: -1, orderable: false, searchable: false }
            ],
            order: [[0, 'asc']]
        });
    };

    return {
        init: function () {
            initTableLicenses();
            initTableUsers();
            initTableApps();
        }
    };

}();

jQuery(document).ready(function () {
    KTDatatables.init();
});
