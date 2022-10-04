wave.prototype.install = function(name) {
    terminal.log("Warning, wave is in beta...")
    for (let id = Object.keys(pkgList).length; id--; id == 0) {
        if (pkgList[id].name == name) {
            try {
                fetch(pkgList[id].link)
                .then(response => response.text())
                .then((data) => {
                    eval(data)
                })

            }
            catch {
                terminal.log("error... sorry")
            }
        }
        else {
            terminal.log(name + " not found, sorry")
        }
    }
}