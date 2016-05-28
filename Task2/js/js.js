(function () {
    var ENTER_KEY_CODE = 13,
        ESC_KEY_CODE = 27;
        itemTemplate =
            '<div class="list-item no-select cursor-pointer" tabindex="1">' +
                '<div class="check-box"></div>' +
                '<div class="label"></div>' +
                '<div class="remove-button"> + </div>' +
            '</div>',

        createItem = function (itemText) {
            var item = $(itemTemplate),
                checkBox = item.find('.check-box'),
                label =  item.find('.label');
            label.text(itemText);


            label.dblclick(function () {
                $(this).attr('contenteditable', '');
                $(this).text('');
                $(this).focus();

                return false;
            });

            label.keyup(function (event) {
                if (event.keyCode === ENTER_KEY_CODE) {
                    event.preventDefault();
                    itemText = label.text();
                    label.removeAttr('contenteditable');
                }
                if (event.keyCode === ESC_KEY_CODE) {
                    label.text(itemText);
                    label.removeAttr('contenteditable');
                }
            });

            label.blur(function () {
                $(this).removeAttr('contenteditable');
            });

            if ($('.list-actions-buttons').hasClass('checked')) {
                checkBox.parent().addClass('checked');
            }

            checkBox.click(function () {
                var currentListItem = $(this).parent();

                if (currentListItem.hasClass('checked')) {
                    currentListItem.removeClass('checked')
                } else {
                    currentListItem.addClass('checked')
                }
            });

            item.find('.remove-button').click(function () {
                $(this).parent().remove();
            });

            return item;
        },
        addItem = function (itemText) {
            $('.goods-list').append(createItem(itemText));
        },
        submitItem = function () {
            var input = $('.new-item-controls input'),
                inputValue = input.val();

            if (inputValue.length) {
                addItem(inputValue);
                input.val('');
            } else {
                alert('Please, enter item name and try again');
            }
        };

    $('.goods-container .new-item-controls').keyup(function (event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            submitItem();
        }
    });

    $('.goods-container .new-item-controls .add-item').click(submitItem);

    $('.list-actions-buttons .check-box, .list-actions-buttons .set-all-checked').click(function () {
        var currentListItem = $(this).parent();

        if (currentListItem.hasClass('checked')) {
            currentListItem.removeClass('checked')
        } else {
            currentListItem.addClass('checked')
        }
    });


    $('.goods-container .list-actions-buttons .set-all-checked, .goods-container .list-actions-buttons .check-box').click(function () {
        var i, items, buttonsContainer = $(this).parent();

        if (buttonsContainer.hasClass('checked')) {
            items = $('.list-item:not(.checked)');
            for (i = 0; i < items.length; i ++) {
                items.eq(i).addClass('checked');
            }
        } else {
            items =  $('.list-item.checked');
            for (i = 0; i < items.length; i ++) {
                items.eq(i).removeClass('checked');
            }
        }
    });
    $('.goods-container .list-actions-buttons .remove-all-checked').click(function () {
        $('.list-item.checked').remove();
    });
}());

