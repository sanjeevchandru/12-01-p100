document.write("64. to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string."+"<br>");
function test64(str1,str2){
    if(str1.length==str2.length){
        return str1+str2;
    }
    var m=Math.min(str1.length,str2.length);
    return str1.substring(str1.length-m)+str2.substring(str2.length-m);
}
document.write("The strings are :sanjee, chandru , Ans : "+test64("sanjee","chandru")+"<br>");
document.write("The strings are :javaaa, kabi   , Ans : "+test64("java","kabi")+"<br><br>");