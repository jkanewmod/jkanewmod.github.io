﻿function showResults(){"openjk"==exec?($("#resultopenjk").fadeIn(),$("#resultvanilla").hide(),$("#resultvanillasmod").hide(),$("#resultvanillabase").hide()):($("#comparedto").fadeIn(),$("#resultopenjk").hide(),$("#resultvanilla").fadeIn(),"newmod"!=mod?$("#resultvanillasmod").fadeIn():$("#resultvanillasmod").fadeOut(),"none"==mod?$("#resultvanillabase").fadeIn():$("#resultvanillabase").fadeOut()),$("#result").fadeIn()}$(document).ready(function(){$("#result").hide(),$("#selectmod").hide(),$("#youdontknow").hide(),$("#resultopenjk").hide(),$("#resultvanilla").hide(),$("#resultvanillasmod").hide(),$("#resultvanillabase").hide()});var exec,mod;$("#vanilla, #openjk, #idontknow").click(function(){var e=exec;exec=jQuery(this).attr("id"),"idontknow"==exec?("openjk"!=e&&e?$("#youdontknow").fadeIn():$("#youdontknow").show(),exec="vanilla"):$("#youdontknow").fadeOut(),"openjk"==exec?($("#selectmod").hide(),exec!=e&&($("#comparedto").hide(),$("#comparedto").fadeIn()),showResults()):($("#result").show(),$("#selectmod").fadeIn(),mod&&exec!=e?($("#comparedto").hide(),$("#comparedto").fadeIn(),showResults()):mod||($("#resultopenjk").hide(),$("#comparedto").hide()))}),$("#newmod, #smod, #none").click(function(){mod=jQuery(this).attr("id"),showResults()});