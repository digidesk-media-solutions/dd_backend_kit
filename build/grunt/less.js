module.exports = {

    options: {
        compress: true,
        plugins: [
            new ( require( 'less-plugin-autoprefix' ) )( { browsers: [ "last 2 versions" ] } )
        ]
    },

    default: {
        files: {
            "modules/digidesk/dd_backend_kit/out/src/css/header.min.css": "build/less/header.less",
            "modules/digidesk/dd_backend_kit/out/src/css/adminnav.min.css": "build/less/adminnav.less",
            "modules/digidesk/dd_backend_kit/out/src/css/basefrm.min.css": "build/less/basefrm.less",
            "modules/digidesk/dd_backend_kit/out/src/css/list.min.css": "build/less/list.less",
            "modules/digidesk/dd_backend_kit/out/src/css/edit.min.css": "build/less/edit.less"
        }
    }

};