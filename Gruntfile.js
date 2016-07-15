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
 * @author      pclaisse
 */

module.exports = function ( grunt )
{
    var path = require( 'path' );

    // measures the time each task takes
    require( 'time-grunt' )( grunt );

    // load grunt config
    require( 'load-grunt-config' )( grunt,
        {
            configPath: path.join( process.cwd(), 'build' + path.sep + 'grunt' )
        }
    );

};