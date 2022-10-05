let neofetch = {
    name: "neofetch",
    run: function(){
        terminal.log("<    ?    >:      name: " + settings.accounts.currentUser_string  + "@thingOS ");
        terminal.log("<    ?    >:      shell: Splash(version 0.2)");
        terminal.log("<    ?    >:      OS: thingOS (version 0.2.1)");
        terminal.log("<    ?    >:      Resolution: " + width + "x" + height);
    }
}
termApps.push(neofetch)
terminal.log("done!")