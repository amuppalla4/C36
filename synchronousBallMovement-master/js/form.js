class Form{
    constructor(){
        
    }
    display(){
        var title=createElement('h2');
        title.html("Multiplayer Car Racing");
        title.position(130,3);
        var input=createInput('Name');
        var button=createButton('Play');
        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            var greeting = createElement("h3");
            greeting.html("hello "+name);
            greeting.position(130,160);
        })
    }
}