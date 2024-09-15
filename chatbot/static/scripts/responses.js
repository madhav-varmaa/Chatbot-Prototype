function getBotResponse(input){
    //rock paper scissors
    if(input=="rock"){
    return "paper, I win";
    }
    else if(input=="paper"){
    return "scissors, I win";
    }
    else if(input=="scissors")
    {
    return "rock, I win";
    }
    if(input=="whom shall I marry and why?")
    {
        return "PUJITHA, because she is the best!"
    }
    //simple responses
    if(input=="hello"||input=="hi"||input=="hey"||input=="Hi"||input=="Hello"||input=="Hey"){
    return "hello there";}
    if(input=="goodbye"||input=="bye"||input=="Bye"||input=="Goodbye"){
    return "Talk to you later!";}
    if(input=="What are you doing now?"||input=="what are you doing now?"||input=="What are you doing?"||input=="what are you doing?"||input=="what are you doing"){
    return "Helping you to solve your problems";
     }
    else if(input=="How to improve my coding"||input=="How to improve my coding?"||input=="how to improve my coding"||input=="how to improve my coding?") {
    return "By refering books and watching youtube tuitorials";
    }
    //talking 
    if(input=="what nearest hotel in Visakhapatnam?"||input=="What is the nearest hotel in Visakhapatnam?"||input=="what is the nearest hotel in Visakhapatnam"||input=="What is the nearest hotel in Visakhapatnam"){
     return "Could you specify the location in Visakhapatnam?";}
     if(input=="Near Rushikonda"){
     return "Radison blu";
     }
    else if(input=="Rushikonda"){
    return "Sai priya";
    }
    else if(input=="Beach road")
    {
    return "Novotel";
    }
    else if(input=="RK Beach road"||input=="Beach road"||input=="beach road")
    {
    return "Hotel Taj";
    }
    else if(input=="VIP Road")
    {
    return "Hotel Mantris";
    }
    
    //talking
    if(input=="where can i find the best library near me?"||input=="Where can i find the best library near me?"||input=="Where can i find the best library near me"||input=="where can i find the best library near me"){
    return "The Central Library,Dwarakanagar";
    }
    //alexa
     if(input=="where are the Railway stations loacted in visakhapatnam?"){
    return  "Duvvada, Simhachalam, Marripalem, Yelamanchili, Tuni, Kothavalasa";
    }
    if(input=="Where can I find more information about undergraduation degree?") {
    return "You can look iot up in the following websites: \n1. Quera \n2. College Navigator \n3. Collegemajor101";
    
    }
    if(input=="How can I improve concentration?"||input=="how can I improve concentration?"||input=="How can I improve my concentration"||input=="how can I improve my concentration?"||input=="How can I improve my concentration")
{
    	
    return " 1. Meditation \n2. Listening to music \n 3. Taking a walk \n 4. Reading articles about the aspects you are interested in";
}
    if(input=="Which apps are used for coding C?)||")
    {return"Try using CodeBlocks, Turbo C, GeeksforGeeks etc..";}
    if(input=="Where can I find program codes and coding projects?")
    {
        return"Refer GeeksforGeeks, Coursera, Github";
    }
    if(input=="Where can I find internships?"|| input=="Where can I get internship oppurtunities?")
    {
        return" You can surf and get oppurtunities for internships in LinkedIn, NPTEL, Internshala";
    }
if(input=="Which apps are used for coding C and C++?"||input=="which apps are used for coding C and C++?"||input=="Which apps are used for coding C++?"||input=="Which apps are used for coding C++"||input=="which apps are used for coding C?")
{ return"Try using CodeBlocks, Turbo C, GeeksforGeeks etc..";}
    
    if(input=="How can I improve my focus?"||input=="how can I improve my focus?"||input=="How can I improve my focus"||input=="how can I improve my focus")
    {
        return" 1. Meditation \n2. Listening to music \n 3. Taking a walk \n 4. Reading articles about the aspects you are interested in";
    }
    if(input=="Which apps are used for coding C++?")
    {return"Try using CodeBlocks, Turbo C, GeeksforGeeks etc..";}
}

