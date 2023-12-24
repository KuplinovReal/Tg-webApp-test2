function showInputValue() {
    var inputValue = document.getElementById('textInput').value;
    alert('Введенный текст: ' + inputValue);
}

function showinform(){
    var outputTextElement1 = document.getElementById('outputText1');
    var outputTextElement2 = document.getElementById('outputText2');
    var outputTextElement3 = document.getElementById('outputText3');
    var outputTextElement4 = document.getElementById('outputText4');
    var outputTextElement5 = document.getElementById('outputText5');
    outputTextElement1.innerHTML="Версия приложения: "+window.Telegram.WebApp.version;

    outputTextElement2.innerHTML="Информация про пользователя";

    if(window.Telegram.WebApp.initDataUnsafe.user==null) {
        outputTextElement2.innerHTML="Пользователь не найден";
        return;
    }

    if(window.Telegram.WebApp.initDataUnsafe.user.first_name!=null && window.Telegram.WebApp.initDataUnsafe.user.last_name==null)
    outputTextElement3.innerHTML="Имя пользователя: "+window.Telegram.WebApp.initDataUnsafe.user.first_name;
    else if(window.Telegram.WebApp.initDataUnsafe.user.first_name==null && window.Telegram.WebApp.initDataUnsafe.user.last_name!=null)
    outputTextElement3.innerHTML="Имя пользователя: "+window.Telegram.WebApp.initDataUnsafe.user.last_name;
    else if(window.Telegram.WebApp.initDataUnsafe.user.first_name!=null && window.Telegram.WebApp.initDataUnsafe.user.last_name!=null)
    outputTextElement3.innerHTML="Имя пользователя: "+window.Telegram.WebApp.initDataUnsafe.user.first_name + " " + window.Telegram.WebApp.initDataUnsafe.user.last_name;
    else
    outputTextElement3.innerHTML="Имя пользователя: без имени";

    if(window.Telegram.WebApp.initDataUnsafe.user.username!=null)
    outputTextElement4.innerHTML="Ник пользователя: "+ window.Telegram.WebApp.initDataUnsafe.user.username;
    else
    outputTextElement4.innerHTML="Ник пользователя: без имени";

    outputTextElement5.innerHTML="ID пользователя: " + window.Telegram.WebApp.initDataUnsafe.user.id;


}