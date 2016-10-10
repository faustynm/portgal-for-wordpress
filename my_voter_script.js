

jQuery(document).ready( function() {
  
   jQuery(".user_vote").click( function() {
      post_id	= jQuery(this).attr("data-post_id");
      nonce	= jQuery(this).attr("data-nonce");
      
      jQuery.ajax({
         type	: "post",
         url	: myAjax.ajaxurl,
         data	: { action: "my_user_vote" },
         success: function(response) {
            alert(response);
         }
      });
      
      
      
   });
  
});


