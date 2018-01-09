// $(function(){
//     'use strict';
//     $('#btnPopover').popover();
// });

// $(function () {
//   $('.example-popover').popover({
//     container: 'body'
//   });
// });

// $(document).ready(function(){
//     $('[data-toggle="popover"]').popover(); 
// });

// $(function () {
  // $('[data-toggle="popover"]').popover();
  // $('.example-popover').popover({
  //   container: 'body'
  // });
  // $('.popover-dismiss').popover({
  // trigger: 'focus'
  // });

  // $('#rivers').popover({
  //   placement : 'bottom',
  //   html : true,
  //   title : '<a href="#">Your Bag is Empty</a>',
  //   content : ''

  // });
  
// });
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
      html:true
    });   
        $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
});