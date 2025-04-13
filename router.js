
$('#menu-home').on('click',function(){
    routing('index')
})
$('#menu-clients').on('click',function(){
    routing('cliente')
})
$('#menu-factura').on('click', function(){
    routing('factura')
})
function routing(route){
    $('#main-content').load('views/'+route+'.html')
}