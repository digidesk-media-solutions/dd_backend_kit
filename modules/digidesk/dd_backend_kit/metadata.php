<?php
/**
 *
 *     |o     o    |          |
 * ,---|.,---..,---|,---.,---.|__/
 * |   |||   |||   ||---'`---.|  \
 * `---'``---|``---'`---'`---'`   `
 *       `---'    [media solutions]
 *
 * @copyright   (c) digidesk - media solutions
 * @link        http://www.digidesk.de
 * @author      digidesk - media solutions
 */

/**
 * Metadata version
 */
$sMetadataVersion = '1.1';

/**
 * Module information
 */
$aModule = array(
    'id'          => 'dd_backend_kit',
    'title'       => '<img src="../modules/digidesk/dd_backend_kit/ddicon.png" width="15" height="15"> digidesk - Backend UI Kit',
    'description' => array(
        'de' => '<span>Optische Anpassungen für das Backend</span>',
        'en' => '<span>Optical adjustmens for the backend</span>',
    ),
    'thumbnail'   => 'module.png',
    'version'     => '1.0.0',
    'author'      => 'digidesk - media solutions',
    'url'         => 'http://www.digidesk.de/',
    'email'       => 'support@digidesk.de',
    'extend'      => array(

        // Admin Controller
        'admin_start' => 'digidesk/dd_backend_kit/application/controller/admin/ddbk_admin_start',

    ),
    'templates' => array(

        // Admin Templates
        'ddbk_admin_start.tpl' => 'digidesk/dd_backend_kit/application/views/admin/tpl/ddbk_admin_start.tpl',

    )
);