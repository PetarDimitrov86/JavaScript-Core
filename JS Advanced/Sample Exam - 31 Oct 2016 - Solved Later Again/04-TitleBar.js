class TitleBar {
    constructor(title) {
        this.title = title;
        this.menuList = []
    }

    addLink(href, name) {
        this.menuList.push($('<a>')
            .addClass('menu-link')
            .text(name)
            .attr('href', href));
    }

    appendTo(selector) {
        let menuItems = $('<nav>')
            .addClass('menu');
        for (let item of this.menuList){
            menuItems.append($(item))
        }

        let header = $('<header>')
            .addClass('header')
            .append($('<div>')
                .addClass('header-row')
                .append($('<a>')
                    .addClass('button')
                    .html('&#9776;')
                    .click(() => $('div.drawer').toggle()))
                .append($('<span>')
                    .addClass('title')
                    .text(this.title)))
            .append($('<div>')
                .addClass('drawer')
                .append(menuItems));

        $(selector).append(header)
    }
}