import React, { useEffect } from 'react'
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols';
const TWEEN = require('@tweenjs/tween.js')

const View = () => {
  useEffect(()=>{
    var group:any = new THREE.Group();

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.01, 10 );
    camera.position.z = 2;

    let markFeometry = new THREE.PlaneGeometry( 3,1);
    let markMaterial = new THREE.MeshBasicMaterial({
      color : 0xffffff,
      transparent : true,
      opacity : 0.7
    })
    let mark:any = new THREE.Mesh( markFeometry, markMaterial );
    mark.position.z = 0.02
    mark.visible = false;
    // group.add(mark)

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
    	new THREE.Vector2( 0.2, 0.15 ),
    	new THREE.Vector2( 0.4, 0.15 ),
    	new THREE.Vector2( 0.8, 0.05 )
    );

    var points = curve.getPoints( 50 );
    var geometry_b = new THREE.BufferGeometry().setFromPoints( points );
    var material_b = new THREE.LineBasicMaterial( { color : 0x000000 } );

    // Create the final object to add to the scene
    var curveObject = new THREE.Line( geometry_b, material_b );
    curveObject.visible = false;
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


    let position:any, target:any, tween:any, tweenBack:any, onOff = true;

    function init(mesh:any) {
			let position = {z: 0};
			// target = mesh;
			tween = new TWEEN.Tween(position)
				.to({z: 0.3}, 800)
				.delay(1000)
				.easing(TWEEN.Easing.Elastic.InOut)
				.onUpdate(()=>mesh.position.z = position.z);
			tweenBack = new TWEEN.Tween(position)
				.to({z: 0}, 3000)
				.easing(TWEEN.Easing.Elastic.InOut)
				.onUpdate(update);
			// tween.chain(tweenBack);
			// tweenBack.chain(tween);
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
        console.log(scene,group.children )
        // 获取raycaster直线和所有模型相交的数组集合
        var intersects = raycaster.intersectObjects( group.children );
        console.log(intersects);
        if (intersects.length>0) {

            init(group.children[2]);
            tween.start()
            init(group.children[0]);
            tween.start()
            init(curveObject);
            tween.start()

            setTimeout(()=>{
              mark.visible = true;
              curveObject.visible = true;
            },1200)

            // init(intersects[0]);
            // intersects[0].object.position.z += 0.1;
            if (onOff) {
                onOff=false



            }else{
                onOff=true
                tweenBack.start();
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
    const controls = new TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 4.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;
        controls.keys = [65, 83, 68];
        controls.addEventListener('change', ()=>{renderer.render(scene, camera);});
    CanvasWarp.appendChild( renderer.domElement )


    animate();
    function animate() {
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
