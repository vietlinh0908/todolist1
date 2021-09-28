// them sanh sach vào script
var i=1;
$(document).on('click','.add-todo',function(){
var todoInputData=$(this).siblings('input').val();
var todoListData=`<div class="row-parent">
  <div class="list-row">
  <div class="list-num">`+i+`.</div>
  <div class="list-data">`+ todoInputData+`</div>
  <div class="edit-todo">&#9998;</div>
  <div class="remove-todo">&#x2715;</div>
  </div>
  <div class="list-error"></div></div>`;

if($.trim(todoInputData)=='')
{
$(this).parents('.todo-content').find('.error').text('Bạn chưa nhập thông tin!');
}
else{
$(this).parents('.todo-content').find('.todo-list').append(todoListData);
i++
$(this).parents('.todo-content').find('.error').empty();
}
$(this).siblings('input').val('')
});

// them bang phim enter
$(document).keydown(function (event) { 
     if (event.which == 13) { 
         event.preventDefault();
         $('.add-todo').click(); 
         
     } 
});


// xóa khỏi list script
$(document).on('click','.remove-todo',function(){
 $(this).parent('.list-row').remove();
})

// sua todo list script
$(document).on('click','.edit-todo',function(){
 $(this).attr('class','update-todo');
 $(this).html('&#x2713;');
 var listText= $(this).parent('.list-row').find('.list-data').html();
 var listDataHeight=$(this).parent('.list-row').find('.list-data').innerHeight();
 $(this).parent('.list-row').find('.list-data').attr('class','update-data');

 if(listDataHeight>50){
  $(this).parent('.list-row').find('.update-data').html('<textarea style="height:'+listDataHeight+'px">'+listText+'</textarea>');
 }else{
  $(this).parent('.list-row').find('.update-data').html('<textarea style="height:'+listDataHeight+'px">'+listText+'</textarea>');
 }

});

//cap nhap todo script
$(document).on('click','.update-todo',function(){
 var listText= $(this).parent('.list-row').find('textarea').val();
 if($.trim(listText)=='')
  {
   $(this).parents('.row-parent').find('.list-error').text('You must enter something!');
  }else{
   $(this).attr('class','edit-todo');
   $(this).html('&#9998;');
   $(this).parent('.list-row').find('.update-data').attr('class','list-data');
   var listText= $(this).parent('.list-row').find('.list-data').html(listText);
   $(this).parents('.row-parent').find('.list-error').empty();
}
});

// line through the  todo list script
$(document).on('click','.list-data',function(){
 $(this).toggleClass('line-through');
});