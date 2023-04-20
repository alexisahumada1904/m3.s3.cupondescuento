
$("#obtener_codigo").on("click", function(){
  if($("#check").prop("checked")==true){
      $("#code-2").addClass( "show")
  }
  else{
      alert('Para obtener un código de descuento debe aceptar teminos y condiciones!');
  }
  })


  $("#check").on("change", function(){
    if($("#check").prop("checked")==false){
    $("#code-2").removeClass( "show")
    }
    })