jQuery(function(){

    /**
     * Declaring variables 
     */
    
    var temp, j , i, obj , flag = false;

    /**
     * Form validation and checking
     * @param  {[type]} e){                             flag [description]
     * @return {[type]}      [description]
     */

    jQuery('.calculate-side-form').on('submit',function(e){
        
        flag = false;    

        if( jQuery.trim(jQuery('#amount').val())  === "") {
            flag = true;
            temp = ' Amount cannot be empty ' ;
        }else if( jQuery.trim(jQuery('#amount').val()) < 5000) {
            flag = true;
            temp = ' Amount cannot be less than 5000 ';
        }


        // Count how many checkboxes are ticked;
        i = 0;
        jQuery('.investment_choices_area input[type="checkbox"]').each(function(){

             if( jQuery(this).is(':checked') )
                i++;

        });

        if(i > 2) {
             temp = 'Only 2 Investing options are permitted !';
             flag = true;   
        }

         if(i === 0) {
             temp = 'Please select atleast one investing option !';
             flag = true;   
        }


       if(flag === true) {
            jQuery('#formErrorModal .modal-body').html(temp);
            jQuery('#formErrorModal').modal('show');

            return false; 
       }    

       
        
    })
  

    /**
     * Animation for Li items
     */
    

         jQuery('.steps li').each(function(i){


                jQuery(this).css({

                    "-webkit-animation-duration" : (i+0.5)*0.4+"s",
                    "animation-duration" : (i+0.5)*0.4+"s",

                });

         });

         jQuery('.steps li').addClass('fadeInLeft'); 

});


