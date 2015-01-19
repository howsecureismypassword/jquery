"use strict";

var main = require("main");
var L = require("library");

main.setNamedNumberDictionary(require("named-number/named-number-dictionary"));
main.setPeriodDictionary(require("period/period-dictionary"));
main.setCheckerDictionary(require("checker/checker-dictionary"));

var filterHSIMPOptions = L.filter(function (value, key) {
    return ["calculationsPerSecond", "ok", "good"].indexOf(key) !== -1;
});

(function ($) {
    var createOutputDiv = function (input) {
        var parent = input.offsetParent(),
            div = $("<div />").addClass("hsimp-results"),
            pos = input.position(),
            padding = {
                top: +(input.css("padding-top").replace("px", "")),
                bottom: +(input.css("padding-bottom").replace("px", ""))
            }

        div.css("max-width", parent.width() - pos.left - 2);

        div.css({
            left: pos.left,
            top: pos.top + input.height() + padding.top + padding.bottom
        })

        return div;
    };

    var listify = function (item) {
        var header = $("<h4 />").text(item.name).addClass("hsimp-check__header"),
            message = $("<p />").text(item.message).addClass("hsimp-check__message").hide(),
            li = $("<li />").append(header,message).addClass("hsimp-check--" + item.level).addClass("hsimp-results__check");

        li.on("mouseenter", function () {
            message.slideDown();
        });

        li.on("mouseleave", function () {
            message.slideUp();
        });

        return li;
    };

    var setup = function (index, item) {
        var input = $(item);

        input.addClass("hsimp-level");

        var outputDiv = createOutputDiv(input).hide();
        input.after(outputDiv);

        var result = $("<p />").addClass("hsimp-results__time"),
            resultText = $("<span />"),
            checks = $("<ul />").addClass("hsimp-results__checks");

        result.append($("<strong/ >").text("Time to crack: "), resultText);

        outputDiv.append(result, checks);

        var lastResults = false;

        input.on("keyup", function () {
            var value = input.val(),
                password = main(value);

            if (value.length) {
                lastResults = true;
                input.addClass("hsimp-level--" + password.getSecurityLevel());
                outputDiv.fadeIn();
                resultText.text(password.getString());
                checks.html(L.map(listify, password.getChecks()));
            } else {
                lastResults = false;
                input.removeClass("hsimp-level--insecure hsimp-level--bad hsimp-level--ok hsimp-level--good");
                outputDiv.fadeOut();
                checks.empty();
            }
        });

        input.on("blur", function () {
            outputDiv.fadeOut();
        });

        input.on("focus", function () {
            if (lastResults) {
                outputDiv.fadeIn();
            }
        });
    };

    $.fn.hsimp = function (options) {
        main.setOptions(filterHSIMPOptions(options));
        $(this).each(setup);
    };
}(jQuery))
