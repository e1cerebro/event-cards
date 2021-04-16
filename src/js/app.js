let jQuery = require('jquery');

//Add the jQuery to the window object
window.jQuery = jQuery;

jQuery(document).ready(function(){
    jQuery('.form-control:has(select)').addClass('form-control--dropdown');
});