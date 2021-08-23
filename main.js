regExpLogin = /^admin$/;
regExpPassword = /^admin$/;
regExpCountTR = /^[1-9]{1,2}$/;
regExpWidthOfTD = /^[0-9]{1,3}$/;
regExpWidthOfBorder = /^[1-9]{1}$/;
regExpCountTD = /^[1-9]{1,2}$/;
regExpHeightOfTD = /^[0-9]{1,3}$/;
regExpCountLiItem = /^[1-9]{1,2}$/;

$(function () {
    let addRedFrame = function (selector) {
        $(selector).css({
            'border': ' 2px solid red',
            'box-shadow': '0 0 3px 3px LightCoral'
        })
    }
    let removeRedFrame = function (selector) {
        $(selector).css({
            'border': '',
            'box-shadow': ''
        })
    }
    let createMyTable = function () {
        let myTD = `<td style="width: ${$('#formGroupExampleInput2').val()}px; height: ${$('#formGroupExampleInput5').val()}px; border: ${$('#formGroupExampleInput3').val()}px ${$('#formGroupExampleInput6').val()} ${$('#formGroupExampleInput7').val()}">TD</td>`;
        let countTD = '';
        for (let i = 0; i < $('#formGroupExampleInput4').val(); i++) {
            countTD += myTD;
        };
        let myTR = `<tr>${countTD}</tr>`;
        let countTR = '';
        for (let i = 0; i < $('#formGroupExampleInput1').val(); i++) {
            countTR += myTR;
        };
        let myTable = `<table>${countTR}</table>`;
        return myTable;
    }
    let createMyListOl = function () {
        let countMyLi = '';
        for (let i = 0; i < $('#formGroupExampleInput11').val(); i++) {
            countMyLi += `<li>item ${i+1}</li>`;
        }
        let myOl = `<ol style="list-style-type:${$('#formGroupExampleInput12').val()}">${countMyLi}</ol>`;
        return myOl;
    }

    let createMyListUl = function () {
        let countMyLi = '';
        for (let i = 0; i < $('#formGroupExampleInput21').val(); i++) {
            countMyLi += `<li>item ${i+1}</li>`;
        }
        let myUl = `<ol style="list-style-type:${$('#formGroupExampleInput22').val()}">${countMyLi}</ol>`;
        return myUl;
    }
    $('button[name="1"]').click(function () {
        $('.field').toggleClass('bold');
    });

    $('button[name="2"]').click(function () {
        $('.field').toggleClass('italic');
    });

    $('button[name="3"]').click(function () {
        $('.field').toggleClass('underline');
    });

    $('button[name="4"]').click(function () {
        $('.field').toggleClass('line-through');
    });

    $('button[name="5"]').click(function () {
        $('.field').addClass('text-left');
        $('.field').removeClass('text-center text-right');
    });

    $('button[name="6"]').click(function () {
        $('.field').addClass('text-center');
        $('.field').removeClass('text-left text-right');
    });

    $('button[name="7"]').click(function () {
        $('.field').addClass('text-right ');
        $('.field').removeClass('text-left text-center');

    });

    $('ul[name="ul1"]').click(function (event) {
        let myFontFamily = $(event.target).text();
        $('p').css('font-family', myFontFamily);
    })

    $('ul[name="ul2"]').click(function (event) {
        let myFontSize = $(event.target).text();
        $('p').css('font-size', myFontSize);
    })

    $('button[name="8"]').click(function () {
        $('.modal1').show()
    });
    $('button[name="81"]').click(function () {
        $('.modal1').hide()
    });
    $('.modal-body1').click(function (event) {
        if (event.target.className == 'text-color') {
            $('.field').css('color', $(event.target).css('backgroundColor'));
        }
    })

    $('button[name="9"]').click(function () {
        $('.modal2').show()
    });
    $('button[name="91"]').click(function () {
        $('.modal2').hide()
    });

    $('.modal-body2').click(function (event) {
        if (event.target.className == 'background-color') {
            $('.field').css('background-color', $(event.target).css('backgroundColor'));
        }
    })

    $('.modal-body3').click(function (event) {
        if (event.target.className == 'background-image') {
            $('.field').css('background-color', '');
            $(".field").css('background-image', $(event.target).css('background-image'));
        }
    })
    $('.form-control-file').change(function () {
        $(".field").css('background-image', `url(${URL.createObjectURL( $('.form-control-file').get(0).files[0])})`); 
    })

    $('button[name="10"]').click(function () {
        $('.modal3').show()
    });
    $('.button-sing-in').click(function () {
        if (regExpLogin.test($('.form-control-login').val()) == true) {
            removeRedFrame('.form-control-login');
        } else {
            addRedFrame('.form-control-login');
        }
        if (regExpPassword.test($('.form-control-password').val()) == true) {
            removeRedFrame('.form-control-password');
        } else {
            addRedFrame('.form-control-password');
        }
        if ($('.form-control-login').val() === '' && $('.form-control-password').val() === '') {
            $('.value-empty').show();
            $('.check-login-password').hide();

        } else if (regExpLogin.test($('.form-control-login').val()) == true && regExpPassword.test($('.form-control-password').val()) == true) {
            $('.modal3').hide();
            $('button[name="00"]').removeAttr('disabled');
            $('.button-lock').hide();
            $('.button-unlock').show();
            $('.form-control-login').val('');
            $('.form-control-password').val('');
            $('.check-login-password').hide();
            $('.value-empty').hide();
        } else {
            $('.check-login-password').show();
            $('.value-empty').hide();
        }
    })
    $('button[name="00"]').click(function () {
        $('.block-buttons').hide();
        $('.field').hide();
        $('.block-edit-buttons').show();
        $('.field-edit').show();
        $('.field-edit').val($('.field').html());
    });
    $('button[name="11"]').click(function () {
        $('.block-edit-buttons').hide();
        $('.field-edit').hide();
        $('.block-buttons').show();
        $('.field').show();
        $('.field').html($('.field-edit').val());
    });
    $('button[name="12"]').click(function () {
        $('.modal4').show()
    });
    $('button[name="44"]').click(function () {
        $('.modal4').hide()
    });
    $('.create-table').click(function () {
        if (regExpCountTR.test($('#formGroupExampleInput1').val()) == true) {
            removeRedFrame('#formGroupExampleInput1');
        } else {
            addRedFrame('#formGroupExampleInput1');
        }
        if (regExpWidthOfTD.test($('#formGroupExampleInput2').val()) == true) {
            removeRedFrame('#formGroupExampleInput2');
        } else {
            addRedFrame('#formGroupExampleInput2');
        }
        if (regExpWidthOfBorder.test($('#formGroupExampleInput3').val()) == true) {
            removeRedFrame('#formGroupExampleInput3');
        } else {
            addRedFrame('#formGroupExampleInput3');
        }
        if (regExpCountTD.test($('#formGroupExampleInput4').val()) == true) {
            removeRedFrame('#formGroupExampleInput4');
        } else {
            addRedFrame('#formGroupExampleInput4');
        }
        if (regExpHeightOfTD.test($('#formGroupExampleInput5').val()) == true) {
            removeRedFrame('#formGroupExampleInput5');
        } else {
            addRedFrame('#formGroupExampleInput5');
        }
        if ($('#formGroupExampleInput6').val() !== 'choose style') {
            removeRedFrame('#formGroupExampleInput6');
        } else {
            addRedFrame('#formGroupExampleInput6');
        }
        if ($('#formGroupExampleInput7').val() !== 'choose color') {
            removeRedFrame('#formGroupExampleInput7');
        } else {
            addRedFrame('#formGroupExampleInput7');
        }
        if (regExpCountTR.test($('#formGroupExampleInput1').val()) == true && regExpWidthOfTD.test($('#formGroupExampleInput2').val()) == true && regExpWidthOfBorder.test($('#formGroupExampleInput3').val()) == true && regExpCountTD.test($('#formGroupExampleInput4').val()) == true && regExpHeightOfTD.test($('#formGroupExampleInput5').val()) == true && $('#formGroupExampleInput6').val() !== 'choose style' && $('#formGroupExampleInput7').val() !== 'choose color') {
            $('.message').hide();
            $('.field-edit').val($('.field-edit').val() + createMyTable());
        } else {
            $('.message').show();
        }
    })
    $('.reset').click(function () {
        $('#formGroupExampleInput1').val('');
        $('#formGroupExampleInput2').val('');
        $('#formGroupExampleInput3').val('');
        $('#formGroupExampleInput4').val('');
        $('#formGroupExampleInput5').val('');
        $('#formGroupExampleInput6').val('choose style');
        $('#formGroupExampleInput7').val('choose color');
    })
    $('button[name="13"]').click(function () {
        $('.modal5').show()
    });
    $('button[name="55"]').click(function () {
        $('.modal5').hide()
    });
    $('.create-list').click(function () {
        if (regExpCountLiItem.test($('#formGroupExampleInput11').val()) == true) {
            removeRedFrame('#formGroupExampleInput11');
        } else {
            addRedFrame('#formGroupExampleInput11');
        }
        if ($('#formGroupExampleInput12').val() !== 'choose Ol type mark') {
            removeRedFrame('#formGroupExampleInput12');
        } else {
            addRedFrame('#formGroupExampleInput12');
        }
        if (regExpCountLiItem.test($('#formGroupExampleInput11').val()) == true && $('#formGroupExampleInput12').val() !== 'choose Ol type mark') {
            $('.modal5-message').hide();
            $('.field-edit').val($('.field-edit').val() + createMyListOl());
        } else {
            $('.modal5-message').show();
        }
    })
    $('.reset-ol').click(function () {
        $('#formGroupExampleInput11').val('');
        $('#formGroupExampleInput12').val('choose Ol type mark');
    })
    $('button[name="14"]').click(function () {
        $('.modal6').show()
    });
    $('button[name="66"]').click(function () {
        $('.modal6').hide()
    });
    $('.create-list-ul').click(function () {
        if (regExpCountLiItem.test($('#formGroupExampleInput21').val()) == true) {
            removeRedFrame('#formGroupExampleInput21');
        } else {
            addRedFrame('#formGroupExampleInput21');
        }
        if ($('#formGroupExampleInput22').val() !== 'choose Ul type mark') {
            removeRedFrame('#formGroupExampleInput22');
        } else {
            addRedFrame('#formGroupExampleInput22');
        }
        if (regExpCountLiItem.test($('#formGroupExampleInput21').val()) == true && $('#formGroupExampleInput22').val() !== 'choose Ul type mark') {
            $('.modal6-message').hide();
            $('.field-edit').val($('.field-edit').val() + createMyListUl());
        } else {
            $('.modal6-message').show();
        }
    })
    $('.reset-ul').click(function () {
        $('#formGroupExampleInput21').val('');
        $('#formGroupExampleInput22').val('choose Ul type mark');
    })
    $('button[name="100"]').click(function () {
        $('.modal7').show();
    });
    $('.cancel').click(function () {
        $('.modal7').hide();
    })
    $('.sign-out').click(function () {
        $('.modal7').hide();
        $('button[name="00"]').attr('disabled', true);
        $('.button-lock').show();
        $('.button-unlock').hide();
    })
})