$(document).ready(function() {

    var navigation = ['#homebtn', '#eolicabtn', '#nuclearbtn', '#hidrobtn', '#autorsbtn']
    setContent(navigation)

    var content_e = ['#aboutbtn-e', '#pointsbtn-e', '#extbtn-e']
    var content_n = ['#aboutbtn-n', '#pointsbtn-n', '#extbtn-n']
    var content_h = ['#aboutbtn-h', '#pointsbtn-h', '#extbtn-h']
    itemContent(content_e)
    itemContent(content_n)
    itemContent(content_h)

    $('#navbar').mouseover(function() {
        $('#main').css('margin-right', '13rem')
    })

    $('#navbar').mouseleave(function() {
        $('#main').css('margin-right', '5rem')
    })

    //Listener para a barra de navegação interna da aba Eólica
    content_e.forEach(function(x) {
        $(x).click(function() {
            $(x).addClass('h-ativo')

            var temp = Array.from(content_e)
            delete temp[temp.indexOf(x)]
            temp.forEach(function(x) {
                if (x) {
                    $(x).removeClass('h-ativo')
                }
            })
            delete temp
            itemContent(content_e)
        })
    })

    //Listener para a barra de navegação interna da aba Nuclear
    content_n.forEach(function(x) {
        $(x).click(function() {
            $(x).addClass('h-ativo')

            var temp = Array.from(content_n)
            delete temp[temp.indexOf(x)]
            temp.forEach(function(x) {
                if (x) {
                    $(x).removeClass('h-ativo')
                }
            })
            delete temp
            itemContent(content_n)
        })
    })

    //Listener para a barra de navegação interna da aba Hidrelétrica
    content_h.forEach(function(x) {

        $(x).click(function() {
            $(x).addClass('h-ativo')

            var temp = Array.from(content_h)
            delete temp[temp.indexOf(x)]
            temp.forEach(function(x) {
                if (x) {
                    $(x).removeClass('h-ativo')
                }
            })
            delete temp
            itemContent(content_h)
        })
    })

    //Listener para a barra de navegação
    navigation.forEach(function(x) {
        $(x).click(function() {
            $(x).addClass('ativo')

            var temp = Array.from(navigation)
            delete temp[temp.indexOf(x)]
            temp.forEach(function(x) {
                if (x) {
                    $(x).removeClass('ativo')
                }
            })
            delete temp
            setContent(navigation)
        })
    })
})

function setContent(navigation) {

    navigation.forEach(function(x) {

        var href = $(x).attr('href')

        if ($(x).hasClass("ativo")) {
            $(href).show();
            $(href).css('opacity', 1)
            $(href).addClass('show')
        } else {
            $(href).hide()
            $(href).css('opacity', 0)
        }
    })
    setTimeout(topFunction, 50)
}

function itemContent(content) {

    content.forEach(function(x) {

        var href = $(x).attr('href')

        if ($(x).hasClass("h-ativo")) {
            $(href).show();
            $(href).css('opacity', 1)
            $(href).addClass('show')
        } else {
            $(href).hide()
            $(href).css('opacity', 0)
        }
    })
    setTimeout(topFunction, 50)
}

function topFunction() {
    window.scrollTo(0, 0);
}