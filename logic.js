/**$('.calc').on('click', function() {
console.log($(this).val())
}
);**/

$('input').on('mousedown', function() {
    if($(this).attr('id')=='res' || $(this).attr('id')=='rm'){return}
    else{
    $('#resultat').append($(this).val())
}
}
);

$('#rm').on('mousedown', () => 
$('#resultat').text('')
)

let calcul;
$('#res').on('mousedown', () =>
{calcul = $('#resultat').text();
$('#resultat').text((eval(calcul)));})

