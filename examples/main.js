var ISEViewport = require( 'ise-viewport' );
var randomCubes = require( 'three-random-cubes' );
var EditorControls = require( 'ise-editor-controls' );
var toScreenXY = require( 'three-to-screen-xy' );

var viewport = ISEViewport();
var controls = EditorControls( viewport.camera, viewport.container );

// build scene:
var cubes = randomCubes( 1 ).map( function( c ) { viewport.scene.add(c); return c; } );
var cube = cubes[0];
var camera = viewport.camera;
var canvas = viewport.canvas3D;
var coords = document.getElementById( 'coords' );
coords.onmousedown = function( e ) { e.preventDefault(); }

viewport.preStack.push( {
  update: function() {
    var xy = toScreenXY( cube.position, camera, canvas );
    var x = xy.x.toFixed( 2 ), y = xy.y.toFixed( 2 );
    coords.style.left = x + 'px';
    coords.style.top = y +'px';
    coords.textContent = 'X:' + x + ',Y:' + y;
  }
} );
