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
 */

$.noConflict();

+function( $ )
{
    'use strict';

    // BACKEND KIT CLASS DEFINITION
    // ============================

    var BackendKit = function ( moduleURL )
    {
        this.moduleURL = moduleURL;

        this.setFrameEvents();
    };


    // BACKEND KIT CONSTANTS
    // =====================

    BackendKit.ALLOWED_STYLESHEETS = [ 'header.min.css', 'adminnav.min.css', 'basefrm.min.css', 'list.min.css', 'edit.min.css' ];


    // BACKEND KIT PROPTERTIES
    // =======================

    BackendKit.prototype.moduleURL = null;


    // BACKEND KIT CLASS METHODS
    // =========================

    BackendKit.prototype.setFrameEvents = function( $frame )
    {
        if( typeof $frame == 'undefined' )
        {
            $frame = $( 'frame' );
        }

        var self = this;

        $frame.each( function()
            {
                $( this ).on( 'load', function()
                    {
                        var sFrameId = $( this ).attr( 'name' );
                        var oFrameDocument = $( this ).contents();

                        if( $( 'frame', oFrameDocument ).length )
                        {
                            $( 'frame', oFrameDocument ).each( function()
                                {
                                    self.injectStylesheet( $( this ).contents(), $( this ).attr( 'name' ) + '.min.css' );
                                    self.setFrameEvents( $( this ) );
                                }
                            );
                        }

                        self.injectStylesheet( oFrameDocument, sFrameId + '.min.css' );
                    }
                );
            }
        );

    };

    BackendKit.prototype.injectStylesheet = function( document, stylesheet )
    {
        if( this.moduleURL && stylesheet && BackendKit.ALLOWED_STYLESHEETS.indexOf( stylesheet ) >= 0 )
        {
            if( stylesheet == 'adminnav.min.css' )
            {
                $( 'body', document ).prepend( $( '<div id="shopLogo"><img src="' + this.moduleURL + 'out/src/img/logo.svg" /></div>' ) );
            }

            if ( typeof document.createStyleSheet == 'function' )
            {
                document.createStyleSheet( this.moduleURL + 'out/src/css/' + stylesheet );
            }
            else
            {
                $( 'head', document ).append( $( '<link rel="stylesheet" href="' + this.moduleURL + 'out/src/css/' + stylesheet + '" type="text/css" />' ) );
            }
        }
    };


    // MAKE BACKEND KIT PUBLIC
    // =======================

    window.BackendKit = BackendKit;

}( jQuery );