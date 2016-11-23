$("#subscribe").click(function(e){
    e.preventDefault();
    var account = $("#account").val();
    console.log(account);
    $.post("http://106.14.25.2:5000/add?",{
        account:account
    },function(result){
        console.log(result);
        $("#result").text(result);
        $("#result").css("display","block");
    });
})