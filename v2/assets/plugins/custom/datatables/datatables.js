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
                type: 'POST',
                data: function (d) {
                    // You can add extra POST data here if needed
                    // For example: d.app = $('#appSelector').val();
                    return d;
                },
                error: function (xhr, error, thrown) {
                    console.error("License fetch failed:", xhr.responseText);
                }
            },
            columns: [
                { data: 'key', defaultContent: 'N/A' },
                { data: 'gendate', defaultContent: 'N/A' },
                { data: 'genby', defaultContent: 'N/A' },
                { data: 'expires', defaultContent: 'N/A' },
                { data: 'note', defaultContent: 'N/A' },
                { data: 'usedon', defaultContent: 'N/A' },
                { data: 'usedby', defaultContent: 'N/A' },
                { data: 'status', defaultContent: 'N/A' },
                { data: 'actions', defaultContent: '', orderable: false, searchable: false }
            ],
            columnDefs: [
                { targets: -1, orderable: false, searchable: false }
            ],
            order: [[1, 'desc']],
            language: {
                loadingRecords: "Loading licenses...",
                zeroRecords: "No licenses found."
            }
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
                type: 'POST',
                error: function (xhr, error, thrown) {
                    console.error("User fetch failed:", xhr.responseText);
                }
            },
            columns: [
                { data: 'username', defaultContent: 'N/A' },
                { data: 'email', defaultContent: 'N/A' },
                { data: 'owner', defaultContent: 'N/A' },
                { data: 'app', defaultContent: 'N/A' },
                { data: 'role', defaultContent: 'N/A' },
                { data: 'expires', defaultContent: 'N/A' },
                { data: 'lastlogin', defaultContent: 'N/A' },
                { data: 'status', defaultContent: 'N/A' },
                { data: 'actions', defaultContent: '', orderable: false, searchable: false }
            ],
            columnDefs: [
                { targets: -1, orderable: false, searchable: false }
            ],
            order: [[1, 'asc']],
            language: {
                loadingRecords: "Loading users...",
                zeroRecords: "No users found."
            }
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
                type: 'POST',
                error: function (xhr, error, thrown) {
                    console.error("App fetch failed:", xhr.responseText);
                }
            },
            columns: [
                { data: 'name', defaultContent: 'N/A' },
                { data: 'owner', defaultContent: 'N/A' },
                { data: 'secret', defaultContent: 'N/A' },
                { data: 'createdate', defaultContent: 'N/A' },
                { data: 'status', defaultContent: 'N/A' },
                { data: 'actions', defaultContent: '', orderable: false, searchable: false }
            ],
            columnDefs: [
                { targets: -1, orderable: false, searchable: false }
            ],
            order: [[0, 'asc']],
            language: {
                loadingRecords: "Loading apps...",
                zeroRecords: "No apps found."
            }
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
