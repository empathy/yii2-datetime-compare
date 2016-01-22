# yii2-datetime-compare

[![Latest Stable Version](https://poser.pugx.org/empathy/yii2-datetime-compare/v/stable.svg)](https://packagist.org/packages/empathy/yii2-datetime-compare)
[![Latest Unstable Version](https://poser.pugx.org/empathy/yii2-datetime-compare/v/unstable.svg)](https://packagist.org/packages/empathy/yii2-datetime-compare)
[![License](https://poser.pugx.org/empathy/yii2-datetime-compare/license.svg)](https://packagist.org/packages/empathy/yii2-datetime-compare)
[![Total Downloads](https://poser.pugx.org/empathy/yii2-datetime-compare/downloads.svg)](https://packagist.org/packages/empathy/yii2-datetime-compare)
[![Monthly Downloads](https://poser.pugx.org/empathy/yii2-datetime-compare/d/monthly.png)](https://packagist.org/packages/empathy/yii2-datetime-compare)
[![Daily Downloads](https://poser.pugx.org/empathy/yii2-datetime-compare/d/daily.png)](https://packagist.org/packages/empathy/yii2-datetime-compare)

DateTime comparison validator for Yii Framework 2.0. Temporary solution until this [enhancement](https://github.com/yiisoft/yii2/issues/3581) is implemented.

## [[Empathy\Validators\DateTimeCompareValidator|compare]] <span id="datetime-compare"></span>

```php
[
    // validates if the value of "birthday" attribute equals to that of "birthday_repeat"
    ['birthday', DateTimeCompareValidator::className()],

    // validates if birthday is less than or equal to today
    ['birthday', DateTimeCompareValidator::className(), 'compareValue' => date('Y-m-d H:i:s'), 'operator' => '<='],
    
    // validates if birthday is less than driver's license expiry
    ['birthday', DateTimeCompareValidator::className(), 'compareAttribute' => 'driver_license_expiry', 'operator' => '<'],
]
```

This validator compares the specified input datetime with another one and make sure if their relationship
is as specified by the `operator` property.

- `compareAttribute`: the name of the attribute whose value should be compared with. When the validator
  is being used to validate an attribute, the default value of this property would be the name of
  the attribute suffixed with `_repeat`. For example, if the attribute being validated is `birthday`,
  then this property will default to `birthday_repeat`.
- `compareValue`: a constant value that the input value should be compared with. When both 
  of this property and `compareAttribute` are specified, this property will take precedence.
- `operator`: the comparison operator. Defaults to `==`, meaning checking if the input value is equal
  to that of `compareAttribute` or `compareValue`. The following operators are supported:
     * `==`: check if two values are equal. The comparison is done is non-strict mode.
     * `===`: check if two values are equal. The comparison is done is strict mode.
     * `!=`: check if two values are NOT equal. The comparison is done is non-strict mode.
     * `!==`: check if two values are NOT equal. The comparison is done is strict mode.
     * `>`: check if value being validated is greater than the value being compared with.
     * `>=`: check if value being validated is greater than or equal to the value being compared with.
     * `<`: check if value being validated is less than the value being compared with.
     * `<=`: check if value being validated is less than or equal to the value being compared with.
- `format`: Date format to parse values with. If blank, PHP Date will try and guess your format.
- `jsFormat`: Date format to parse values with client side. If blank, JavaScript Date will try and guess your format.

## Installation

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

> Note: Check the [composer.json](https://github.com/empathy/yii2-datetime-compare/blob/master/composer.json) for this extension's requirements and dependencies. 

Run

```
$ composer require empathy/yii2-datetime-compare
```
