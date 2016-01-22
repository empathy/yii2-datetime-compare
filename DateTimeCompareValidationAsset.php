<?php
namespace Empathy\Validators;

use yii\web\AssetBundle;

/**
 * This asset bundle provides the javascript files for client validation.
 *
 * @author Anushan Easwaramoorthy <EAnushan@hotmail.com>
 * @since 2.0
 */
class DateTimeCompareValidationAsset extends AssetBundle
{
    public $sourcePath = '@Empathy/Validators/assets';
    public $js = [
        'js/datetimecompare.validation.js',
    ];
    public $depends = [
        'yii\validators\ValidationAsset',
        'Empathy\Validators\MomentAsset',
    ];
}
