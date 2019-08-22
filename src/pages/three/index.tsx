import React, { useEffect } from 'react'
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols';
const TWEEN = require('@tweenjs/tween.js')

const steps = [
  {
    name : 'step-A',
    tables : [
      {
        name : '佣金基础数据',
        type: "snapshot",
        id: "d7fa71c0-cb41-4a06-bba5-cccf5fe0cd17",
        dependedOnBy: ["880369e2-f0b2-4854-bd39-589537da6248","98599b77-2b85-4145-837e-3c6ec1f437c2"],//被依赖项
        depends: [] // 依赖项目
      },
      {
        name : 'CA',
        type: "snapshot",
        id: "6d4d2f9f-5f68-40cf-98c8-bb9ba5504412",
        dependedOnBy: ["880369e2-f0b2-4854-bd39-589537da6248"],//被依赖项
        depends: [] // 依赖项目
      },
      {
        name: "商务销售毛利率区间",
        type: "snapshot",
        id: "a5209316-4986-4f92-95f0-5a960e2c4dd9",
        dependedOnBy: [],
        depends: []
      },
      {
        name: "产品销售毛利率区间",
        type: "snapshot",
        id: "7a9f1a84-dda9-47d3-83d0-60cf1cd4d0c2",
        dependedOnBy: [],
        depends: []
      },
      {
        name: "员工主数据表",
        type: "snapshot",
        id: "a758c9f7-4fc6-4c0c-a016-d9512001d19f",
        dependedOnBy: [],
        depends: []
      },
      {
        name: "员工薪资档案表",
        type: "snapshot",
        id: "b6f20cbc-f67e-485f-a741-99fa50577e0a",
        dependedOnBy: ["880369e2-f0b2-4854-bd39-589537da6248"],
        depends: []
      },
      {
        name: "员工方案关系表",
        type: "snapshot",
        id: "3a68a786-8120-46f9-873c-441d6dfc49fd",
        dependedOnBy: [],
        depends: []
      }
    ]
  },
  {
    name : 'step-B',
    tables : [
      {
        name: "2018Q1",
        type: "data",
        id: "98599b77-2b85-4145-837e-3c6ec1f437c1",
        dependedOnBy: ["98599b77-2b85-4145-837e-3c6ec1f437c2"],
        depends: []
      }
    ]
  },
  {
    name : 'step-C',
    tables : [
      {
        name : 'table-3',
        type : "param",
        id: "98599b77-2b85-4145-837e-3c6ec1f437c2",
        dependedOnBy: [],
        depends: ["d7fa71c0-cb41-4a06-bba5-cccf5fe0cd17","98599b77-2b85-4145-837e-3c6ec1f437c1"]
      }
    ]
  },
  {
    name : 'step-D',
    tables : [
      {
        name: "CA02",
        type: "data",
        id: "880369e2-f0b2-4854-bd39-589537da6248",
        dependedOnBy: [],
        depends: ["f89d3700-9d82-4dfe-a08e-c0d3457cf91a", "6d4d2f9f-5f68-40cf-98c8-bb9ba5504412", "b6f20cbc-f67e-485f-a741-99fa50577e0a","d7fa71c0-cb41-4a06-bba5-cccf5fe0cd17"]
      },
      {
        name: "Monthly Revenue",
        type: "data",
        id: "f89d3700-9d82-4dfe-a08e-c0d3457cf91a",
        dependedOnBy: ["880369e2-f0b2-4854-bd39-589537da6248"],
        depends: []
      }
    ]
  }
]

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

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 1, 10000 );
    // let camera = new THREE.OrthographicCamera(
    //   -4,
    //   4,
    //   3,
    //   -3,
    //   0,
    //   100
    // );
    // camera.position.z = 200;
    camera.position.set(0,0,3)
    camera.lookAt(scene.position);

    // 坐标轴
    // var axes = new THREE.AxesHelper(1.6);
    // scene.add(axes);


    //创建半透明mark
    let markFeometry = new THREE.PlaneGeometry(6,4);
    let markMaterial = new THREE.MeshBasicMaterial({
      color : 0xffffff,
      transparent : true,
      opacity : 0
    })
    let mark:any = new THREE.Mesh( markFeometry, markMaterial );
    mark.position.z = 0.02

    scene.add( mark );

    var curve = new THREE.CubicBezierCurve(
    	new THREE.Vector2( -0, 0.05 ),
    	new THREE.Vector2( 0.26, 0.15 ),
    	new THREE.Vector2( 0.53, 0.15 ),
    	new THREE.Vector2( 0.8, 0.05 )
    );

    var points = curve.getPoints( 50 );
    // var points2 = points.filter( (x,i) => i<1 );
    // console.log('points==>',points)
    // curve.updateArcLengths()
    var geometry_b = new THREE.BufferGeometry().setFromPoints( points );
    var material_b = new THREE.LineBasicMaterial( { color : 0x000000 } );
    // curveObject.geometry.setFromPoints(points.slice(0,i)) //动态设置长短
    // Create the final object to add to the scene
    var curveObject = new THREE.Line( geometry_b, material_b );
    // curveObject.visible = false;
    console.log('curveObject',curveObject)
    // scene.add(curveObject)
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
    var loader = new THREE.FontLoader();
    var font = loader.parse(require('./fonts1/optimer_bold.typeface.json'));
    var stepGroup:any = new THREE.Group();
    var group:any = new THREE.Group();

    steps.forEach( ( item, i ) => {
      //创建step
      let geometryFont:any = new THREE.TextGeometry( item.name, {
        font: font,
        size: 0.06,
        height: 0.0001,
      } );
      let textMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000
      })
      let textMesh = new THREE.Mesh(geometryFont,textMaterial)
      textMesh.position.x = 0.6*i;
      textMesh.translateX(-2)
      textMesh.position.y = 1;
      textMesh.position.z = 0;
      stepGroup.add(textMesh)

      let geometry = new THREE.BoxGeometry( 0.3, 0.15, 0.01);
      let material = new THREE.MeshBasicMaterial()

      item.tables.forEach( (table:any,index:number) => {
        //使用材质颜色区分不同的表
        if (table.type==='snapshot') {
          material.color = new THREE.Color(0xffe596);
        }
        if (table.type==='param') {
          material.color = new THREE.Color(0x7ce6e0);
        }
        if (table.type==='data') {
          material.color = new THREE.Color(0xabdbff);
        }
        let tableCardMesh:any = new THREE.Mesh( geometry, material );
        tableCardMesh.name = table.id;
        tableCardMesh.position.x = i * 0.6;
        tableCardMesh.position.y = index * - 0.2;
        tableCardMesh.translateX(-1.88)
        tableCardMesh.translateY(0.80)
        tableCardMesh.dependedOnBy = table.dependedOnBy;
        tableCardMesh.depends = table.depends;
        tableCardMesh.step = i;

        group.add(tableCardMesh)
      })

    })

    var lineGroup:any = new THREE.Group();
    var materialLine = new THREE.LineBasicMaterial({
    	color: 0x0000ff
    });
    group.children.forEach( (table:any) => {

      //被依赖项
      if (table.dependedOnBy.length>0) {
        var geometryLine = new THREE.Geometry();
        // scene.add( lineA );
        const meshArr = table.dependedOnBy.map( (id:string) => group.children.filter((m:any) => m.name === id )[0]);
        meshArr.forEach( (m:any) => {

          let startX = table.position.x;
          let startY = table.position.y;
          let endX  = m.position.x;
          let endY  = m.position.y;
          console.log('265=====> YYY',startY,endY)
          console.log('266=====> XXX',startX,endX)

          if ( startY===endY && m.step>table.step && (m.step - table.step === 1)) {
            console.log('水平 跨单步骤依赖',startX,endX)
            startX = startX + table.geometry.parameters.width/2;
            endX  = endX - table.geometry.parameters.width/2
          }
          geometryLine.vertices.push(
            new THREE.Vector3( startX, startY, 0 ), //起点
            new THREE.Vector3( endX, endY, 0 ), //终点
          );
          var line:any = new THREE.Line( geometryLine, materialLine );
          if ( startY===endY && m.step>table.step && (m.step - table.step > 1)) {

            startY = startY + table.geometry.parameters.height/2;
            endY  = endY + table.geometry.parameters.height/2

            // console.log(table.geometry.parameters.height/2)

            // console.log('水平 跨步骤依赖',startX,endX)
            var curve = new THREE.CubicBezierCurve(
            	new THREE.Vector2( startX, startY ),
            	new THREE.Vector2( (startX-endX)/3*2+endX, startY+0.1 ),
            	new THREE.Vector2( (startX-endX)/3+endX, endY+0.1 ),
            	new THREE.Vector2( endX, endY )
            );
            // console.log('curve',curve)
            var points = curve.getPoints( 50 );
            var geometry_b = new THREE.BufferGeometry().setFromPoints( points );
            var material_b = new THREE.LineBasicMaterial( { color : 0x000000 } );
            line = new THREE.Line( geometry_b, material_b );
            // lineGroup.add(curveObject)

          }

          line.position.z = 0.01;
          line.connect = [table.name,m.name];
          lineGroup.add(line)
        })
      }
    })
    scene.add(stepGroup)
    scene.add(group);
    scene.add(lineGroup)


    let position:any, target:any, tween:any, tweenBack:any, onOff = true, lengthSlice = { l : 0 }, opacity ={ o : 0};

    function init(mesh:any) {
			let position = { z: mesh.position.z };
			// target = mesh;
			tween = new TWEEN.Tween(position)
				.to({z: 0.2}, 800)
				// .delay(1000)
				.easing(TWEEN.Easing.Circular.InOut)
				.onUpdate(()=>mesh.position.z = position.z);
			tweenBack = new TWEEN.Tween(position)
				.to({z: 0}, 800)
				.easing(TWEEN.Easing.Circular.InOut)
				.onUpdate(()=>mesh.position.z = position.z);
			// tween.chain(tweenBack);
			// tweenBack.chain(tween);


      // let opacity = { o : mesh.material.opacity };
      let tweenOpacity = new TWEEN.Tween(opacity)
				.to({o: 0.88}, 800)
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
    let allItem:any = [];
    let currentItem:any = { position:{} };
    function onMouseClick( event:any ) {

        //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.

        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        raycaster.setFromCamera( mouse, camera );
        // console.log(scene,group.children )
        // 获取raycaster直线和所有模型相交的数组集合
        var intersects = raycaster.intersectObjects( group.children );
        if (intersects.length>0) {
            // init(intersects[0]);
            // intersects[0].object.position.z += 0.1;
            currentItem = intersects[0].object;
            console.log('currentItem',currentItem)
            if (onOff&&(currentItem.dependedOnBy.length>0||currentItem.depends.length>0)) {
                onOff=false

                let dependedOnByItem = currentItem.dependedOnBy.map( (id:string) => group.children.filter( (card:any) => card.name === id )[0] )
                let dependsItem = currentItem.depends.map( (id:string) => group.children.filter( (card:any) => card.name === id )[0] )
                let lineArray = lineGroup.children.filter( (line:any) => line.connect.includes(currentItem.name) )
                console.log('lineArray',lineArray)
                let stepTitleIndex:any = Array.from(new Set([currentItem].concat(dependedOnByItem,dependsItem).map( (item:any) => item.step )))
                console.log('stepTitleIndex',stepTitleIndex)
                allItem = Array.prototype.concat([],dependedOnByItem,dependsItem,lineArray,stepTitleIndex.map( (i:number) => stepGroup.children[i] ))
                console.log('allItem',allItem)


                init(currentItem);
                tween.start()
                allItem.forEach( (mesh:any) => {
                  init(mesh);
                  tween.start()
                })

                // init(stepGroup);
                // tween.start()

                const { tweenOpacity } = init(mark);
                tweenOpacity.start()

            }

        }else{
          onOff = true
          const { tweenOpacityBack } = init(mark);
          tweenOpacityBack.start()
          init(currentItem);
          tweenBack.start()
          allItem.forEach( (mesh:any) => {
            init(mesh);
            tweenBack.start()
          })


          // init(stepGroup);
          // tweenBack.start()


          // setTimeout(()=>{
          //   const { tweenLineBack } = init(curveObject);
          //   tweenLineBack.start()
          // },200)
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

    // console.log(stepGroup)
    animate();
    function animate() {

      // console.log(points)
      trackballControls.update(clock.getDelta());
      // stepGroup.children.forEach( (meshItem:any) => meshItem.rotation.y += 0.01)
      // stepGroup.children.forEach( (meshItem:any) => meshItem.rotation.y += 0.01)
      // stepGroup.children.forEach( (meshItem:any) => meshItem.rotation.z += 0.01)
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
