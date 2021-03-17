$(document).ready(function(){

  if ($('ul.todos li').length == 0) {
    $('ul.todos').hide();
  }

  $('i.add').click(function(){
    $('.aggiunta').removeClass('inactive');
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
      var fatto = template.children('i.done');
      fatto.click(function(){
        $(this).parent('li').remove();
        if ($('ul.todos li').length == 0) {
          $('ul.todos').hide();
        }
      })

      // MODIFICA RIGA
      var modifica = template.children('i.edit');

      modifica.click(function(){
        var title = $(this).siblings('span.title');
        var valore = title.text();
        title.hide();
        $(this).siblings('input#mod').val(valore).show();
      })

      var modificato = template.children('input#mod');

      modificato.keyup(function(e){
        if (e.which == 13) {
          var valoreNew = $(this).val();
          var title = $(this).siblings('span.title');
          title.text(valoreNew).show();
          $(this).hide();
        }
      })

      var todos = $('ul.todos');
      todos.append(template);

      $('ul.todos').show();

      $('.aggiunta').addClass('inactive');


    }


  })






















});
