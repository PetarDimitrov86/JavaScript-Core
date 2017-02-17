class TitleBar{
    constructor(title){
        this.title = title;
        this.links = [];
        $('.button').on('click', this.toggleDisplay)
    }

    toggleDisplay(){
        if ($('.drawer').css('display') == 'none' || $('.drawer').css('display') == undefined )
            $('.drawer').css('display', 'block');
        else
            $('.drawer').css('display', 'none');

    }

    addLink(href, name) {
        this.links.push($('<a>')
                        .addClass('menu-link')
                        .attr('href', href)
                        .text(name))
    }

    appendTo(selector){
        let navMenu = $('<nav>').addClass('menu');
        for (let link of this.links)
            navMenu.append(link);
        let headerHTML = $('<header>').addClass('header')
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
                .append(navMenu));
        $(selector).append(headerHTML)
    }
}

let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#container');
