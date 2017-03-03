/**
 * Created by jay on 3/1/2017.
 */

///Function for form validation , this is function is executed when register button is clicked
function uservalid() {

    var user_field = document.getElementById('user').value;
    if (user_field.length < 6 && user_field.length!=6 ) {
        document.getElementById('uvalspan').innerHTML ="Username must be at least 6  characters";

    };

    var pass_field = document.getElementById('ppas').value;

    if (pass_field.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)===null) {
        document.getElementById('pasvalspan').innerHTML ="Password must contain  8 characters" + '<br>' +
            "Password must contain at least 1 number" +"<br>" +"Password must contain at least 1 lowercase character (a-z)"+
            "<br>"+"Password must contain at least 1 uppercase character (A-Z)"+"<br>"+"Password must contains only 0-9a-zA-Z" ;

    };

    var usernum_field = document.getElementById('usnum').value;

    if (usernum_field.length < 6 && usernum_field.length!=6 ){

        document.getElementById('usnumvalspan').innerHTML ="User Number must be at least 6 digit long";

    };

    var userg_field = document.getElementById('userg').value;

    if (userg_field.length <=0 ){

        document.getElementById('usergspan').innerHTML ="Must be filled";

    };


};


function hideangupics() {

 document.getElementById('hide').style.display = 'inline';

}


