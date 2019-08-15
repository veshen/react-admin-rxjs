import React, { useEffect } from 'react'
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols';
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
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.01, 10 );
    camera.position.z = 2;

    // 坐标轴
    // var axes = new THREE.AxesHelper(1.6);
    // scene.add(axes);


    //创建半透明mark
    let markFeometry = new THREE.PlaneGeometry(3,1);
    let markMaterial = new THREE.MeshBasicMaterial({
      color : 0xffffff,
      transparent : true,
      opacity : 0
    })
    let mark:any = new THREE.Mesh( markFeometry, markMaterial );
    mark.position.z = 0.02

    let geometry = new THREE.PlaneGeometry( 0.2, 0.1);
    let material = new THREE.MeshNormalMaterial();

    let mesh = new THREE.Mesh( geometry, material );
    mesh.name = "mesh1"
    let mesh2 = new THREE.Mesh( geometry, material );
    let mesh3 = new THREE.Mesh( geometry, material );
    mesh2.name = "mesh2"

    mesh2.position.x = 0.4;
    mesh3.position.x = 0.8;
    group.add(mesh)
    group.add(mesh2)
    group.add(mesh3)
    scene.add( group );
    scene.add( mark );

    var curve = new THREE.CubicBezierCurve(
    	new THREE.Vector2( -0, 0.05 ),
    	new THREE.Vector2( 0.26, 0.15 ),
    	new THREE.Vector2( 0.53, 0.15 ),
    	new THREE.Vector2( 0.8, 0.05 )
    );

    var points = curve.getPoints( 50 );
    var points2 = points.filter( (x,i) => i<1 );
    // console.log('points==>',points)
    // curve.updateArcLengths()
    var geometry_b = new THREE.BufferGeometry().setFromPoints( points2 );
    var material_b = new THREE.LineBasicMaterial( { color : 0x000000 } );
    // curveObject.geometry.setFromPoints(points.slice(0,i)) //动态设置长短
    // Create the final object to add to the scene
    var curveObject = new THREE.Line( geometry_b, material_b );
    // curveObject.visible = false;
    console.log('curveObject',curveObject)
    scene.add(curveObject)
    /**
     * 创建二维样条曲线对象
     */
    var path = new THREE.Path();//创建Path对象
    path.moveTo (0.1,0);//设置起点
    path.splineThru([//样条曲线经过的顶点
        new THREE.Vector2(0.15,0),
        new THREE.Vector2(0.2,0)
    ]);
    //返回几何体对象，设置细分数
    var geometryLine = path.createPointsGeometry(25);
    var materialLine =new THREE.LineBasicMaterial({
        color:0xff0000 //线条颜色
    });//材质对象
    // var line=new THREE.Line(geometryLine,materialLine);//线条模型对象
    // scene.add(line);//线条对象添加到场景中

    /*字体*/
    // var loader = new THREE.FontLoader();
    //
    // loader.load( 'fonts/optimer_bold.typeface.json', function ( font ) {
    //
    // 	var geometryFont = new THREE.TextGeometry( 'Hello three.js!', {
    // 		font: font,
    // 		size: 80,
    // 		height: 5,
    // 		curveSegments: 12,
    // 		bevelEnabled: true,
    // 		bevelThickness: 10,
    // 		bevelSize: 8,
    // 		bevelSegments: 5
    // 	} );
    //   // scene.add(geometryFont)
    // } );


    let position:any, target:any, tween:any, tweenBack:any, onOff = true, lengthSlice = { l : 0 };

    function init(mesh:any) {
			let position = { z: mesh.position.z };
			// target = mesh;
			tween = new TWEEN.Tween(position)
				.to({z: 0.4}, 800)
				// .delay(1000)
				.easing(TWEEN.Easing.Circular.InOut)
				.onUpdate(()=>mesh.position.z = position.z);
			tweenBack = new TWEEN.Tween(position)
				.to({z: 0}, 800)
				.easing(TWEEN.Easing.Circular.InOut)
				.onUpdate(()=>mesh.position.z = position.z);
			// tween.chain(tweenBack);
			// tweenBack.chain(tween);


      let opacity = { o: mesh.material.opacity };
      let tweenOpacity = new TWEEN.Tween(opacity)
				.to({o: 0.7}, 800)
				.delay(100)
				.easing(TWEEN.Easing.Cubic.InOut)
				.onUpdate(()=>mesh.material.opacity = opacity.o);
      let tweenOpacityBack = new TWEEN.Tween(opacity)
				.to({o: 0}, 800)
				.easing(TWEEN.Easing.Cubic.InOut)
				.onUpdate(()=>mesh.material.opacity = opacity.o);

      // let lengthSlice = { l : 0 }
      let tweenLine = new TWEEN.Tween(lengthSlice)
				.to({ l: points.length }, 800)
				.delay(100)
				.easing(TWEEN.Easing.Cubic.InOut)
				.onUpdate(()=>mesh.geometry.setFromPoints(points.slice(0,lengthSlice.l)));
      let tweenLineBack = new TWEEN.Tween(lengthSlice)
				.to({ l: 0}, 800)
				.easing(TWEEN.Easing.Cubic.InOut)
				.onUpdate(()=>mesh.geometry.setFromPoints(points.slice(0,lengthSlice.l)));

      return{
        tweenOpacity,
        tweenOpacityBack,
        tweenLine,
        tweenLineBack
      }
		}

    function update() {
			target.position.z = position.z;
			// target.style.webkitTransform = 'rotate(' + Math.floor(position.rotation) + 'deg)';
			// target.style.MozTransform = 'rotate(' + Math.floor(position.rotation) + 'deg)';
		}

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    function onMouseClick( event:any ) {

        //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.

        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        raycaster.setFromCamera( mouse, camera );
        // console.log(scene,group.children )
        // 获取raycaster直线和所有模型相交的数组集合
        var intersects = raycaster.intersectObjects( group.children );
        console.log(intersects);
        if (intersects.length>0) {
            // init(intersects[0]);
            // intersects[0].object.position.z += 0.1;
            if (onOff) {
                onOff=false
                init(group.children[2]);
                tween.start()
                init(group.children[0]);
                tween.start()
                curveObject.visible = true;
                init(curveObject);
                tween.start()



                const { tweenOpacity } = init(mark);
                tweenOpacity.start()

                setTimeout(()=>{
                  const { tweenLine } = init(curveObject);
                  tweenLine.start()
                },200)


            }

        }else{
          onOff = true
          const { tweenOpacityBack } = init(mark);
          tweenOpacityBack.start()

          init(group.children[2]);
          tweenBack.start()
          init(group.children[0]);
          tweenBack.start()
          init(curveObject);
          tweenBack.start()
          setTimeout(()=>{
            const { tweenLineBack } = init(curveObject);
            tweenLineBack.start()
          },200)
          // curveObject.visible = false;

        }

        var intersectsMark = raycaster.intersectObjects( [mark] );
        if (intersectsMark.length>0) {

            if (onOff===false) {

                // onOff=true;
                // const { tweenOpacityBack } = init(mark);
                // tweenOpacityBack.start()
                //
                // init(group.children[2]);
                // tweenBack.start()
                // init(group.children[0]);
                // tweenBack.start()
                // init(curveObject);
                // tweenBack.start()
                // setTimeout(()=>{
                //   curveObject.visible = false;
                // },200)
            }

        }
        //将所有的相交的模型的颜色设置为红色，如果只需要将第一个触发事件，那就数组的第一个模型改变颜色即可
        // for ( var i = 0; i < intersects.length; i++ ) {
        //
        //     intersects[ i ].object.material.color.set( 0xff0000 );
        //
        // }

    }

    window.addEventListener( 'click', onMouseClick, false );

    let renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor(new THREE.Color(0xf6f6f6))
  	renderer.setSize( window.innerWidth, window.innerHeight );
  	const CanvasWarp:any = document.querySelector('#container');
    CanvasWarp.appendChild( renderer.domElement )
    // attach them here, since appendChild needs to be called first
    var trackballControls = initTrackballControls(camera, renderer);
    var clock = new THREE.Clock();

    console.log(group)
    animate();
    function animate() {
      // console.log(points)
      trackballControls.update(clock.getDelta());
      // group.children.forEach( (meshItem:any) => meshItem.rotation.x += 0.01)
      // group.children.forEach( (meshItem:any) => meshItem.rotation.y += 0.01)
      // group.children.forEach( (meshItem:any) => meshItem.rotation.z += 0.01)
    	requestAnimationFrame( animate );
      TWEEN.update()
    	renderer.render( scene, camera );
    }
  },[])

  return(
    <div id="container"></div>
  )
}

export default View;
