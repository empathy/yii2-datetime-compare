/**
 * DateTimeCompare validation module.
 *
 * This JavaScript module provides the validation methods for the DateTimeCompareValidator.
 *
 * @author Anushan Easwaramoorthy <EAnushan@hotmail.com>
 * @since 2.0
 */

$.extend(yii.validation, (function ($) {
    var pub = {
        datetimecompare: function (value, messages, options) {
            if (options.skipOnEmpty && yii.validation.isEmpty(value)) {
                return;
            }

            var compareValue, valid = true;
            if (options.compareAttribute === undefined) {
                compareValue = options.compareValue;
            } else {
                compareValue = $('#' + options.compareAttribute).val();
            }

            var dateValue = moment(value, options.format).unix();
            var dateCompareValue = moment(compareValue, options.format).unix();

            switch (options.operator) {
                case '==':
                    valid = dateValue == dateCompareValue;
                    break;
                case '===':
                    valid = value === compareValue;
                    break;
                case '!=':
                    valid = dateValue != dateCompareValue;
                    break;
                case '!==':
                    valid = value !== compareValue;
                    break;
                case '>':
                    valid = dateValue > dateCompareValue;
                    break;
                case '>=':
                    valid = dateValue >= dateCompareValue;
                    break;
                case '<':
                    valid = dateValue < dateCompareValue;
                    break;
                case '<=':
                    valid = dateValue <= dateCompareValue;
                    break;
                default:
                    valid = false;
                    break;
            }

            if (!valid) {
            	yii.validation.addMessage(messages, options.message, value);
            }
        }
    };

    return pub;
})(jQuery));
