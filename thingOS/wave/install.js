wave.prototype.install = function(name) {
    // terminal.log("Warning, wave is in beta...")
    for (let id = Object.keys(pkgList).length; id--; id == 0) {
        if (pkgList[id].name == name) {
            try {
                fetch(pkgList[id].link)
                .then(response => response.text())
                .then((data) => {
                    terminal.log("Downloaded")
                    terminal.log("Installing");
                    eval(data)
                    terminal.log("Done")
                })

            }
            catch {
                terminal.log("Failed to get " + name)
            }
        }
    }
}