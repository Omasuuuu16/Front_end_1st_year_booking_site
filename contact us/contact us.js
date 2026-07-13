// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
});
document.forms[0].onsubmit = function(event){ // 0 as it's first form
    let name = document.forms[0]["name"].value.trim(); // "name" -> name of attribute // .trim() remove spaces from both the beginning and the end of a string.
    let email = document.forms[0]["email"].value.trim(); // "email" -> name of attribute
    let message = document.forms[0]["message"].value.trim(); // message -> name of attribute
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //must [string but not \s or @]+@[string but not \s or @]+.[string but not \s or @]

    let nameValid = name !== ""; // must not equal to empty string
    let emailValid = regex.test(email); // test -> test if string match the regex
    let messageVaild = message !== ""; //must not equal to empty string
    if(!nameValid || !emailValid || !messageVaild){ // if(!false) == if(true)
        event.preventDefault(); // prevent valdition
        alert("Please fill in all required fields with valid information.");
    }
    else {
        event.preventDefault('reload');
        alert("Your feedBack have been submitted");
    }
};
/*
^ :	Start of the string
[^\s@] :	One or more characters that are not spaces (\s) or @	
@ : The "@" symbol must be present
[^\s@] :	Again, one or more characters that are not space or @ (domain name)
\. : A literal dot (.), escaped with a backslash
[^\s@] : One or more characters for the domain extension (like .com)
$ :	End of the string

test(email) : return true if it matches the pattern or false false if it doesn’t
دي طريقة عشان تعرف ان ده فعلا ايميل مكتوب صح

\s matches: -> من الاخر اي مساحة
A regular space (" ")
A tab (\t)
A newline (\n)
A carriage return (\r)
A vertical tab (\v)
A form feed (\f)
*/