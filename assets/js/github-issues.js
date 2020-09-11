$(document).ready(function () {
    const $section = $('section[data-projects-dictionary]');
    if ($section.length === 0) {
      return;
    }

    const projects_dictionary = JSON.parse($section.data('projects-dictionary'));

    var datatables_language_url = {
        "en": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json",
        "it": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"
    };
    var current_language = $('html').attr('lang');
    var $issues_table_clear = $('#issues_table_clear');
    var $github_projects_list = $('#github_projects_list');
    var $github_projects_list_select = $('#github_projects_list_select');
    var $github_types_list = $('#github_types_list');
    var github_types_sel = [];
    var $github_languages_list = $('#github_languages_list');

    function createTypeCheckboxes(j, d, className) {
        return `<div class="form-check">
                <input id="github_types_${j}" name="github_types_list[]" value="${d}" type="checkbox">
                <label for="github_types_${j}"><i class="issue-${className}"></i> ${d}</label>
              </div>`;
    }

    var $issues_table = $('#issues_table').DataTable({
        responsive: true,
        "pageLength": 20,
        "bLengthChange": false,
        "bInfo": false,
        "sDom": "<'row' B><'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
            "<'row'tr>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        "language": {
            "url": datatables_language_url[current_language]
        },
        "ajax": {
            "url": "/assets/github_issues.json",
            "dataSrc": ""
        },
        "order": [[0, "desc"]],
        "columns": [
            { "data": "created_at", "visible": false },
            { "data": "language", "visible": false, "name": "language" },
            {
                "data": "project", "name": "project", "render": function (data, type, row, meta) {
                    return data in projects_dictionary ? projects_dictionary[data] : data;
                }
            },
            {
                "data": "subproject", "render": function (data, type, row, meta) {
                    return "<a class='u-textWeight-400' target='_blank' href='" + row.repository_url + "'>" + data + "</a>";
                }
            },
            {
                "data": "title", "render": function (data, type, row, meta) {
                    return "<a target='_blank' href='" + row.url + "'>" + data + "</a>";
                }
            },
            {
                "data": "type", className: "text-center", "orderable": false, "name": "type", "render": function (data, type, row, meta) {
                    var classname = data.replace(' ', '');
                    return "<span hidden>" + data + "</span><span class='issue-" + classname + "' ></span>";
                }
            },
            {
                "data": "labels", "render": function (data, type, row, meta) {
                    var labelist = '';
                    data.forEach(function (item) {
                        labelist = labelist + "<span class='badge badge-secondary mr-1' >" + item + " </span>";
                    });
                    return labelist;
                }
            },
        ],
        initComplete: function () {
            this.api().column('project:name').every(function () {
                var column = this;
                var select = $github_projects_list_select.on('change', function () {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                    );
                    column.search(val ? val : '', true, false).draw();
                });

                let apps = [];
                column.data().unique().sort().each(function (d, j) {
                    var title = d in projects_dictionary ? projects_dictionary[d] : d;
                    apps.push({ text: title, value: title });
                });
                apps.forEach(function(x) {
                  $github_projects_list.find('select').append(
                    $('<option>', {
                      value: x.value,
                      text: x.text,
                    })
                  )
                })
            });
            this.api().column('language:name').every(function () {
                var column = this;
                var select = $github_languages_list.on('change', function () {
                    var val = $(this).val();
                    if (val != null) {
                        column.search(val.join('|'), true, false, true).draw();
                    } else {
                        column.search('', true, false).draw();
                    }
                });
            });
            this.api().column('type:name').every(function () {
                var column = this;
                column.data().unique().sort().each(function (d, j) {
                    if (d != null && d != '') {
                        var classname = d.replace(' ', '');
                        // $github_types_list.append('<span ><input type="checkbox" id="github_types_' + j + '" name="github_types_list[]" value="' + d + '"/> <i class="issue-' + classname + '"></i>' + d + '</span>');
                        $github_types_list.append(createTypeCheckboxes(j, d, classname));
                        $('#github_types_' + j).on('change', function () {
                            var val = $(this).val();

                            if (github_types_sel.indexOf(val) > -1) {
                                github_types_sel.splice(github_types_sel.indexOf(val), 1);
                            }
                            else {
                                github_types_sel.push(val);
                            }

                            if (github_types_sel.length > 0) {
                                column.search(github_types_sel.join('|'), true, false, true).draw();
                            } else {
                                column.search('', true, false).draw();
                            }
                        });

                    }
                });

            });

            // reset all filters
            $issues_table_clear.on('click', function (e) {
                $github_types_list.find('input:checked').removeAttr('checked');
                $github_languages_list.val([]).trigger("change");
                $github_projects_list_select.val('').trigger("change");
                $issues_table.columns().search('', true, false).draw();
            });
        }
    });

});
