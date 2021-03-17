$(document).ready(function(){

  var lista = $('ul.todos');
  console.log(lista);
  console.log(lista.text());
  if (lista.text() == '') {
    $('ul.todos').hide();
    console.log(lista.text());
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

      $('.aggiunta').addClass('inactive');


    }


  })






















});
