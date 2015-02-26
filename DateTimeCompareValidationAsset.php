<?php
namespace EAnushan\validators;

use yii\web\AssetBundle;

/**
 * This asset bundle provides the javascript files for client validation.
 *
 * @author Anushan Easwaramoorthy <EAnushan@hotmail.com>
 * @since 2.0
 */
class DateTimeCompareValidationAsset extends AssetBundle
{
    public $sourcePath = '@EAnushan/validators/assets';
    public $js = [
        'js/datetimecompare.validation.js',
    ];
    public $depends = [
        'yii\validators\ValidationAsset',
    ];
}
