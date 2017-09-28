$(document).ready(function() {
        var datatables_language_url = {
            "en" : "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json",
            "it" : "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"
        };
        var current_language = $('html').attr('lang');
        var $issues_table_clear = $('#issues_table_clear');
        var $github_projects_list = $('#github_projects_list');
        var $github_types_list = $('#github_types_list');
        var github_types_sel = [];
        var $github_languages_list = $('#github_languages_list');
        $github_languages_list.select2();


        var $issues_table = $('#issues_table').DataTable( {
            responsive: true,
            "pageLength": 20,
            "bLengthChange": false,
            "bInfo" : false,
            "language": {
                "url": datatables_language_url[current_language]
            },
            "ajax": {
                "url":"/github/issues.json",
                "dataSrc": ""
            },
            "order": [[ 0, "desc" ]],
            "columns": [
                { "data": "created_at" , "visible": false},
                { "data": "language" , "visible": false, "name":"language"},
                { "data": "project" , "name":"project", "render": function(data, type, row, meta ) {
                    return data in projects_dictionary ? projects_dictionary[data] : data;
                }},
                { "data": "subproject" , "render": function(data, type, row, meta ){
                    return "<a class='u-textWeight-400' target='_blank' href='"+row.repository_url+"'>"+data+"</a>";
                    } 
                },
                { "data": "title", "render": function(data, type, row, meta ){
                    return "<a target='_blank' href='"+row.url+"'>"+data+"</a>";
                    } 
                },
                { "data": "type" ,  "orderable": false, "name":"type", "render": function(data, type, row, meta) {
                    var classname = data.replace(' ','');
                    return "<span hidden>"+data+"</span><span class='issue-"+classname+"' ></span>";
                }},
                { "data": "labels", "render": function(data, type, row, meta ){
                    var labelist = '';
                    data.forEach( function (item){
                         labelist = labelist + "<span class='labelist u-color-white u-background-40 u-borderRadius-l u-padding-all-xxs u-margin-right-xxs u-margin-left-xxs u-margin-bottom-xxs' >"+item+"</span>";
                        });
                    return labelist;
                    } 
                },
            ],
            initComplete: function () {
            this.api().column('project:name').every( function () {
                var column = this;
                var select = $github_projects_list.on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
                        column.search( val ? val : '', true, false ).draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    var title = d in projects_dictionary ? projects_dictionary[d] : d;
                    select.append( '<option value="'+title+'">'+title+'</option>' )
                } );
            } );
            this.api().column('language:name').every( function () {
                var column = this;
                var select = $github_languages_list.on('change', function () {
                    var val = $(this).val();
                    if (val!=null) {
                        column.search(val.join('|'), true, false, true).draw();
                    } else {
                        column.search('', true, false ).draw();
                    }
                } );
            } );
            this.api().column('type:name').every( function () {
                var column = this;
                column.data().unique().sort().each( function ( d, j ) {
                    if (d!=null && d!='') {
                    var classname = d.replace(' ','');
                    $github_types_list.append('<span ><input type="checkbox" id="github_types_'+j+'" name="github_types_list[]" value="'+d+'"/> <i class="issue-'+classname+'"></i>'+d+'</span>');
                    $('#github_types_'+j).on('change', function() {
                        var val = $(this).val();

                        if (github_types_sel.indexOf(val) > -1) {
                            github_types_sel.splice( github_types_sel.indexOf(val) ,1);
                        }
                        else {
                            github_types_sel.push(val);
                        }
                        
                        if (github_types_sel.length > 0) {
                            column.search(github_types_sel.join('|'), true, false, true).draw();
                        } else {
                            column.search('', true, false ).draw();
                        }
                    });

                    }
                } );

            } );

            // reset all filters
            $issues_table_clear.on('click', function (e){
                $github_types_list.find('input:checked').removeAttr('checked');
                $github_languages_list.val([]).trigger("change");
                $github_projects_list.val('');
                $issues_table.columns().search('', true, false).draw();
            });
        }
        } );

    } );