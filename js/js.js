$(document).ready(
    function showContent(link) { 
        var cont = document.getElementById('content'); 
        var loading = document.getElementById('loading'); 
        cont.innerHTML = loading.innerHTML;   
        var http = createRequestObject(); 
        if( http )  
        { http.open('get', link); 
            http.onreadystatechange = function ()  
            {   if(http.readyState == 4)  
                {   cont.innerHTML = http.responseText;  }    } 
            http.send(null);  } 
        else  
        {  document.location = link;   }   }); 
    // ajax объект
    function createRequestObject()  
    {  try { return new XMLHttpRequest() } 
        catch(e)  
        {  try { return new ActiveXObject('Msxml2.XMLHTTP') } 
            catch(e)  
            {   try { return new ActiveXObject('Microsoft.XMLHTTP') } 
                catch(e) { return null; }   } } }); 


showContent('page1.html') // страница по умолчанию
