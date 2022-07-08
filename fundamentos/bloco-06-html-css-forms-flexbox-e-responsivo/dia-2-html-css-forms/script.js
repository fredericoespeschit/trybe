const BUTTON = document.querySelector('#buttonSubmit');
const CHECKBOX_DOIS = document.querySelector('#checkbox-2');


function buttonSubmit(eventButtonSubmit) {
   // eventButtonSubmit.preventDefault();
}
BUTTON.addEventListener('click', buttonSubmit);

function checkboxDois() {
    console.log(CHECKBOX_DOIS);
}
CHECKBOX_DOIS.addEventListener('click', checkboxDois);


window.addEventListener('DOMContentLoaded', function () {
    var $min = document.querySelector('.real [name="realDPX-min"]'),
        $max = document.querySelector('.real [name="realDPX-max"]');

    $min.DatePickerX.init({
        mondayFirst: true,
        format: 'dd/mm/yyyy',
        //minDate: new Date(2021, 5, 9),
        maxDate: $max
    });

    $max.DatePickerX.init({
        mondayFirst: true,
         //minDate: $min,
        format: 'dd/mm/yyyy',
       /*
        maxDate: function () {
            var date = new Date();
            return new Date().setDate(date.getDate() + 1);
        }, */
        clearButton: false
    });

});
