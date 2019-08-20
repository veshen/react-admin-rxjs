import React, { useEffect } from 'react'
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols';
import { CSS3DRenderer, CSS3DObject } from 'three-css3drenderer';
import './index.css';
const TWEEN = require('@tweenjs/tween.js')

const View = () => {

/**
 * Initialize trackball controls to control the scene
 *
 * @param {THREE.Camera} camera
 * @param {THREE.Renderer} renderer
 */
  const initTrackballControls = (camera:any, renderer:any) => {
    var trackballControls = new TrackballControls(camera, renderer.domElement);
    trackballControls.rotateSpeed = 1.0;
    trackballControls.zoomSpeed = 1.2;
    trackballControls.panSpeed = 0.8;
    trackballControls.noZoom = false;
    trackballControls.noPan = false;
    trackballControls.staticMoving = true;
    trackballControls.dynamicDampingFactor = 0.3;
    trackballControls.keys = [65, 83, 68];

    return trackballControls;
  }
  useEffect(()=>{
    var group:any = new THREE.Group();

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 1, 10000 );
    camera.position.z = 3000;

    // 坐标轴
    // var axes = new THREE.AxesHelper(1.6);
    // scene.add(axes);

    var element = document.createElement( 'div' );
    element.innerHTML = 'AABBCC';
    element.className = 'element';
    element.style.width = '100px';
    element.style.height = '100px';
    // element.style.backgroundColor = '#000000';

    var object = new CSS3DObject( element );
		object.position.x = 0;
		object.position.y = 0;
		object.position.z = 1110;
		scene.add( object );



    let renderer = new CSS3DRenderer();
    // let renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor(new THREE.Color(0xf6f6f6))
  	renderer.setSize( window.innerWidth, window.innerHeight );
  	const CanvasWarp:any = document.querySelector('#container');
    CanvasWarp.appendChild( renderer.domElement )
    // attach them here, since appendChild needs to be called first
    var trackballControls = initTrackballControls(camera, renderer);
    var clock = new THREE.Clock();

    animate();
    function animate() {
      // console.log(points)
      trackballControls.update(clock.getDelta());
      // group.children.forEach( (meshItem:any) => meshItem.rotation.x += 0.01)
      // group.children.forEach( (meshItem:any) => meshItem.rotation.y += 0.01)
      // group.children.forEach( (meshItem:any) => meshItem.rotation.z += 0.01)
    	requestAnimationFrame( animate );
      // TWEEN.update()
    	renderer.render( scene, camera );
    }
  },[])

  return(
    <div id="container">
    </div>
  )
}

export default View;
