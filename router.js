
$('#menu-home').on('click',function(){
    routing('home')
})
$('#menu-uñas-manos').on('click',function(){
    routing('manos')
})
$('#menu-uñas-pies').on('click', function(){
    routing('pies')
})
$('#menu-servicios').on('click', function(){
    routing('servicio')
})
function routing(route){
    $('#main-content').load('views/'+route+'.html')
}