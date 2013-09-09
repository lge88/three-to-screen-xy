
var THREE = require( 'three' );

var toScreenXY = ( function() {
  var pos = new THREE.Vector3();
  var projMat = new THREE.Matrix4();

  return function( pos3D, camera, canvas ) {
    pos.copy( pos3D );
    projMat.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
    pos.applyProjection( projMat );

    return new THREE.Vector2(
      ( pos.x + 1) * canvas.width/2 + canvas.offsetLeft,
      (-pos.y + 1) * canvas.height/2 + canvas.offsetTop
    );
  };
} )();

module.exports = exports = toScreenXY;
