import 'datatables.net';

const project_prefix = [
  'api-',
  'bootstrap-',
  'spid-',
  '18app',
  'anpr-',
  'daf-',
  'dati-',
  'pianotriennale-',
  'lg-',
  'design-',
  'security-',
  'cie-',
];

// eslint-disable-next-line sonarjs/cognitive-complexity
$(document).ready(function () {
  const $section = $('section[data-projects-dictionary]');
  if ($section.length === 0) {
    return;
  }

  const projects_dictionary = JSON.parse($section.data('projects-dictionary'));

  const datatables_language_url = {
    en: '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json',
    it: '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json',
  };
  const current_language = $('html').attr('lang');
  const $issues_table_clear = $('#issues_table_clear');
  const $github_projects_list = $('#github_projects_list');
  const $github_projects_list_select = $('#github_projects_list_select');
  const $github_types_list = $('#github_types_list');
  const github_types_sel = [];
  const $github_languages_list = $('#github_languages_list');

  function createTypeCheckboxes(j, d, className, checked) {
    return `<div class="form-check">
                <input id="github_types_${j}" name="github_types_list[]" value="${d}" type="checkbox" ${checked ? 'checked' : ''}>
                <label for="github_types_${j}"><i class="issue-${className}"></i> ${d}</label>
              </div>`;
  }

  const $issues_table = $('#issues_table').DataTable({
    responsive: true,
    pageLength: 20,
    bLengthChange: false,
    bInfo: false,
    sDom:
      "<'row' B><'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
      "<'row'tr>" +
      "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    language: {
      url: datatables_language_url[current_language],
    },
    ajax: {
      url: 'https://raw.githubusercontent.com/italia/developers.italia.it-data/main/github_issues.json',
      dataSrc: (data) => {
        data.forEach((el) => {
          let project = '';
          for (let i = 0; i < project_prefix.length; i++) {
            if (el.name.indexOf(project_prefix[i]) === 0) {
              project = project_prefix[i].split('-')[0];
              break;
            }
          }
          if (project === '') {
            const re = /.italia.it|\.gov.it|\.governo\.it/;
            if (el.name.match(re)) {
              project = 'website';
            } else {
              project = 'other';
            }
          }
          el.project = project;
        });
        return data;
      },
    },
    order: [[0, 'desc']],
    columns: [
      { data: 'created_at', visible: false },
      { data: 'language', visible: false, name: 'language' },
      {
        data: 'project',
        name: 'project',
        render: (data) => (data in projects_dictionary ? projects_dictionary[data] : data),
      },
      {
        data: 'subproject',
        render: (data, type, row) =>
          "<a class='u-textWeight-400' target='_blank' href='" + row.repository_url + "'>" + data + '</a>',
      },
      {
        data: 'title',
        render: (data, type, row) => "<a target='_blank' href='" + row.url + "'>" + data + '</a>',
      },
      {
        data: 'type',
        className: 'text-center',
        orderable: false,
        name: 'type',
        render: (data) => {
          const classname = data.replace(' ', '');
          return '<span hidden>' + data + "</span><span class='issue-" + classname + "' ></span>";
        },
      },
      {
        data: 'labels',
        render: (data) => {
          let labelist = '';
          data.forEach(function (item) {
            labelist = labelist + "<span class='badge badge-secondary me-1' >" + item + ' </span>';
          });
          return labelist;
        },
      },
    ],
    initComplete() {
      // Get type from query param (useful to share links)
      const urlParams = new URLSearchParams(window.location.search);
      const typeParam = urlParams.get('type');
      const platformParam = urlParams.get('platform');

      this.api()
        .column('project:name')
        .every(function () {
          const column = this;
          $github_projects_list_select.on('change', function () {
            let val = $(this).val() === '' ? '' : projects_dictionary[$(this).val()];
            val = val === undefined ? $(this).val() : $.fn.dataTable.util.escapeRegex(val);
            column.search(val ? val : '', true, false).draw();
          });

          const apps = {};
          column
            .data()
            .unique()
            .sort()
            .each(function (d) {
              const title = d in projects_dictionary ? projects_dictionary[d] : d;
              apps[title] = { text: title, value: d };
            });
          const apps_keys = Object.keys(apps).sort((a, b) => a.localeCompare(b));
          const apps_arr = [];
          for (const key in apps_keys) {
            if (Object.prototype.hasOwnProperty.call(apps, apps_keys[key])) {
              apps_arr.push(apps[apps_keys[key]]);
            }
          }
          $github_projects_list.setOptionsToSelect(apps_arr);
          $github_projects_list_select.selectpicker('val', platformParam);
          $github_projects_list_select.trigger('change', platformParam);
        });
      this.api()
        .column('language:name')
        .every(function () {
          const column = this;
          $github_languages_list.on('change', function () {
            const val = $(this).val();
            if (val != null) {
              column.search(val.join('|'), true, false, true).draw();
            } else {
              column.search('', true, false).draw();
            }
          });
        });
      this.api()
        .column('type:name')
        .every(function () {
          const column = this;
          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              // eslint-disable-next-line eqeqeq
              if (d != null && d != '') {
                // eslint-disable-next-line eqeqeq
                const checked = d == typeParam;
                const classname = d.replace(' ', '');
                $github_types_list.append(createTypeCheckboxes(j, d, classname, checked));
                $('#github_types_' + j).on('change', function () {
                  const val = $(this).val();

                  if (github_types_sel.indexOf(val) > -1) {
                    github_types_sel.splice(github_types_sel.indexOf(val), 1);
                  } else {
                    github_types_sel.push(val);
                  }

                  if (github_types_sel.length > 0) {
                    column.search(github_types_sel.join('|'), true, false, true).draw();
                  } else {
                    column.search('', true, false).draw();
                  }
                });
                if (checked) {
                  $('#github_types_' + j).trigger('change');
                }
              }
            });
        });

      // reset all filters
      $issues_table_clear.on('click', function () {
        $github_types_list.find('input:checked').removeAttr('checked');
        $github_languages_list.val([]).trigger('change');
        $github_projects_list_select.val('').trigger('change');
        $issues_table.columns().search('', true, false).draw();
      });
    },
  });
});
