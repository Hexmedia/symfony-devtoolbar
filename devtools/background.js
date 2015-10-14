var panels = chrome && chrome.devtools && chrome.devtools.panels;

panels && panels.elements.createSidebarPane(
    "$scope",
    function(sidebar) {
        var symfonyPanel = panels.create(
            "Symfony",
            "../img/symfony.png",
            "../panel/app.html"
        );
    }
);

