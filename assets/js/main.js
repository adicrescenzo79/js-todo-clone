$(document).ready(function(){

  if ($('ul.todos li').length == 0) {
    $('ul.todos').hide();
  }

  // FACCIO APPARIRE LA FORM  DI INSERIMENTO
  $('i.add').click(function(){
    $('.aggiunta').removeClass('inactive');
    $('input#nuovo').focus();
  })

  $('input#nuovo').keyup(function(e){

    if (e.which == 13) {
      var template = $('.todo li').clone();
      var nuovo = $(this).val();

      if (nuovo) {

        $('#nuovo').val('');

        template.children('span.title').text(nuovo);
      }

      // CANCELLAZIONE RIGA
      var fatto = template.children('.icons').children('i.done');
      fatto.click(function(){
        $(this).parents('li').remove();
        if ($('ul.todos li').length == 0) {
          $('ul.todos').hide();
        }
      })

      // MODIFICA RIGA
      var modifica = template.children('.icons').children('i.edit');

      modifica.click(function(){
        var title = $(this).parent('.icons').siblings('span.title');
        var valore = title.text();
        title.hide();
        $(this).parent('.icons').siblings('input#mod').val(valore).show();
        $('input#mod').focus();
        $(this).hide();

      })

      var modificato = template.children('input#mod');

      modificato.keyup(function(e){
        if (e.which == 13) {
          var valoreNew = $(this).val();
          var title = $(this).siblings('span.title');
          title.text(valoreNew).show();
          $(this).hide();
          $(this).siblings('.icons').children('i.edit').show();
        }
      })

      var todos = $('ul.todos');
      todos.append(template);

      $('ul.todos').show();

      $('.aggiunta').addClass('inactive');


    }


  })






















});
