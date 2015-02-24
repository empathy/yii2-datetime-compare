# yii2-datetime-compare
DateTime comparison validator for Yii Framework 2.0.

## [[EAnushan\validators\DateTimeCompareValidator|compare]] <span id="datetime-compare"></span>

```php
[
    // validates if the value of "birthday" attribute equals to that of "birthday_repeat"
    ['birthday', DateTimeCompareValidator::className()],

    // validates if birthday is less than or equal to today
    ['birthday', DateTimeCompareValidator::className(), 'compareValue' => date('Y-m-d H:i:s'), 'operator' => '<='],
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
