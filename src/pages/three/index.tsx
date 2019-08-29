import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols';
import { Spin, Alert } from 'antd';
const TWEEN = require('@tweenjs/tween.js')

const steps = [
  {
    name : '基础数据',
    tables : [
      {
        name : '佣金基础数据',
        type: "snapshot",
        id: "d7fa71c0-cb41-4a06-bba5-cccf5fe0cd17",
        dependedOnBy: ["880369e2-f0b2-4854-bd39-589537da6248","98599b77-2b85-4145-837e-3c6ec1f437c2","3a68a786-8120-46f9-873c-441d6dfc49fd"],//被依赖项
        depends: ["98599b77-2b85-4145-837e-3c6ec1f437c1"], // 依赖项目
        itemDependedOnByList : [
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-b3e12312asdf4-810369183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-4asdf138b-b3e4-810369183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-b3e4-8103611asdgdasg2312311119183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-asdfads123438b-b3e4-8103692222222183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-1asdfasdgdf3423123123438b-b3e4-810369183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6asdfadsf2234a44356346348-438b-b3e4-810369183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "formula",
          }
        ]
      },
      {
        name : 'CA',
        type: "snapshot",
        id: "6d4d2f9f-5f68-40cf-98c8-bb9ba5504412",
        dependedOnBy: ["880369e2-f0b2-4854-bd39-589537da6248"],//被依赖项
        depends: [], // 依赖项目
        itemDependedOnByList : [
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-as3123fc3",
            name: "指标达成限",
            reachable: false,
            type: "formula",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7c3",
            name: "指标达成率上限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2f83123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "input",
          }
        ]
      },
      {
        name: "商务销售毛利率区间",
        type: "snapshot",
        id: "a5209316-4986-4f92-95f0-5a960e2c4dd9",
        dependedOnBy: [],
        depends: ["a758c9f7-4fc6-4c0c-a016-d9512001d19f"]
      },
      {
        name: "产品销售毛利率区间",
        type: "snapshot",
        id: "7a9f1a84-dda9-47d3-83d0-60cf1cd4d0c2",
        dependedOnBy: [],
        depends: ["98599b77-2b85-4145-837e-3c6ec1f437c2"]
      },
      {
        name: "员工主数据表",
        type: "snapshot",
        id: "a758c9f7-4fc6-4c0c-a016-d9512001d19f",
        dependedOnBy: ["a5209316-4986-4f92-95f0-5a960e2c4dd9"],
        depends: []
      },
      {
        name: "员工薪资档案表",
        type: "snapshot",
        id: "b6f20cbc-f67e-485f-a741-99fa50577e0a",
        dependedOnBy: ["880369e2-f0b2-4854-bd39-589537da6248"],
        depends: [],
        itemDependedOnByList : [
          {
            dependedOnBy: ["c2fe7220-6a48-438b-b3e4-810369183fc3"],
            depends: [],
            id: "c2fe7220-123fadsf6a48-as3123fc3",
            name: "指标达成限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: ["c2fe7220-6a48-438b-b3e4-810361111119183fc3"],
            depends: [],
            id: "c2fe7casdfasdg-dasfadsf-3",
            name: "指标达成率上限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: ["c2fe7220-6a48-4gfsdgfg38b-b3e4-810369183123123fc3"],
            depends: [],
            id: "c2f8-sadf-asdf-sad-f-3123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "input",
          }
        ]
      },
      {
        name: "员工方案关系表",
        type: "snapshot",
        id: "3a68a786-8120-46f9-873c-441d6dfc49fd",
        dependedOnBy: [],
        depends: ["d7fa71c0-cb41-4a06-bba5-cccf5fe0cd17"],
        itemDependedOnByList : [
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe72asfasfasddd20-6a48-438b-b3e12312asdf4-810369183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe72asdasdss20-6a48-4asdf138b-b3e4-810369183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220aaaaa-6a48-438b-b3e4-8103611asdgdasg2312311119183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-asdffsdfsdfads123438b-b3e4-8103692222222183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          }
        ]
      }
    ]
  },
  {
    name : 'step-B1',
    tables : [
      {
        name: "2018Q1",
        type: "data",
        id: "98599b77-2b85-4145-837e-3c6ec1f437c1",
        dependedOnBy: ["d7fa71c0-cb41-4a06-bba5-cccf5fe0cd17"],
        depends: [],
        itemDependedOnByList : [
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe72asfasfasdddsdf23423420-6a48-438b-b3e12312asdf4-810369183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe72asdasdss20-6a48-4rwerew--asdf138b-b3e4-810369183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-asdffsdfsdfads---123438b-b3e4-8103692222222183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          }
        ]
      }
    ]
  },
  {
    name : 'step-B2',
    tables : [
      {
        name: "2018Q1231231",
        type: "data",
        id: "589537da6248123123123128599b77-2b85-4145-837e-3c6ec1f437c1",
        dependedOnBy: [],
        depends: [],
        itemDependedOnByList : [
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-b3e12312asdf4-81036918",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2f1119183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-asd2222183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          },
        ]
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
        dependedOnBy: ["7a9f1a84-dda9-47d3-83d0-60cf1cd4d0c2"],
        depends: ["d7fa71c0-cb41-4a06-bba5-cccf5fe0cd17"],
        itemDependedOnByList : [
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-asdffffb3e12312asdf4-810369183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-4asadgasdgasddsasdf138b-b3e4-810369183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-b3sadfasdfasdfasdfe4-8103611asdgdasg2312311119183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "input",
          },
        ]
      },
      {
        name : 'CA',
        type: "snapshot",
        id: "6d4d2f9f-5123f68-40cf-98c8-bb9ba5asd504412",
        dependedOnBy: [],//被依赖项
        depends: [] // 依赖项目
      },
      {
        name: "CA02",
        type: "data",
        id: "880369e2-f0b2-4854-bd39-589537da624812312312312",
        dependedOnBy: [],
        depends: []
      },
      {
        name: "CA02-item",
        type: "data",
        id: "880369e2-f0b2-4854-bd39-589537da6248",
        dependedOnBy: [],
        depends: ["6d4d2f9f-5f68-40cf-98c8-bb9ba5504412", "b6f20cbc-f67e-485f-a741-99fa50577e0a","d7fa71c0-cb41-4a06-bba5-cccf5fe0cd17"],
        itemDependedOnByList : [
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-b3e4-810369183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-b3e4-810369183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-b3e4-810361111119183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "reference",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-438b-b3e4-8103692222222183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-123123123438b-b3e4-810369183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "formula",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a44356346348-438b-b3e4-810369183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "input",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6asdafdf48-438b-b3e4-810369183fc3",
            name: "指标达成率上限",
            reachable: false,
            type: "formula",
          },
          {
            dependedOnBy: [],
            depends: [],
            id: "c2fe7220-6a48-4gfsdgfg38b-b3e4-810369183123123fc3",
            name: "指标达成限",
            reachable: false,
            type: "formula",
          }
        ]
      }
    ]
  },
  {
    name : 'step-D',
    tables : [
      {
        name: "CA02",
        type: "data",
        id: "880369e2-f0b2-4854-bd39-589537da6248123123",
        dependedOnBy: [],
        depends: []
      }
    ]
  }
]

const View = () => {
  const [ spinning, setSpinning ] = useState(false)
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

    const COLOR_DATA:any = {
      snapshot : new THREE.Color(0xFFB02E),
      param : new THREE.Color(0x7ce6e0),
      data : new THREE.Color(0x1D84FF),
      input : new THREE.Color('rgb(118, 217, 166)'),
      formula : new THREE.Color('rgb(254, 183, 83)'),
      reference : new THREE.Color('rgb(51, 122, 183)'),

    }

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 1, 10000 );
    camera.position.set(0,0,3)
    camera.lookAt(scene.position);

    //终点圆环
    let geometryTorus = new THREE.TorusGeometry( 0.01, 0.004 , 8, 100 );
    let materialTorus = new THREE.MeshBasicMaterial( { color: 0x666666 } );
    let torus = new THREE.Mesh( geometryTorus, materialTorus );

    // table Mesh
    let tableGeometry = new THREE.BoxGeometry( 0.36, 0.15, 0.01);
    const TABLE_MESH:any = {
      snapshot : new THREE.Mesh( tableGeometry, new THREE.MeshBasicMaterial({color:COLOR_DATA['snapshot']}) ),
      param : new THREE.Mesh( tableGeometry, new THREE.MeshBasicMaterial({color:COLOR_DATA['param']}) ),
      data : new THREE.Mesh( tableGeometry, new THREE.MeshBasicMaterial({color:COLOR_DATA['data']}) ),
    }

    // 表的子项
    let sphereGroupeometry = new THREE.SphereGeometry( 0.02, 32, 32 );
    const TABLE_CHILDREN_SPHERE_MESH:any = {
      input : new THREE.Mesh( sphereGroupeometry, new THREE.MeshBasicMaterial({color:COLOR_DATA['input']}) ),
      formula : new THREE.Mesh( sphereGroupeometry, new THREE.MeshBasicMaterial({color:COLOR_DATA['formula']}) ),
      reference : new THREE.Mesh( sphereGroupeometry, new THREE.MeshBasicMaterial({color:COLOR_DATA['reference']}) ),
    }


    // 坐标轴
    // var axes = new THREE.AxesHelper(1.6);
    // axes.position.z = 0.4
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

    /*字体*/
    var loader = new THREE.FontLoader();
    // var font = loader.parse(require('./fonts1/optimer_bold.typeface.json'));
    // var font = loader.parse(require('./fonts1/FZLanTingHei-L-GBK_Regular.json'));
    // var font = loader.parse(require('./fonts1/Microsoft_YaHei_UI_Light_Regular.json'));
    var font = loader.parse(require('./fonts1/Microsoft_YaHei.json'));
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
      textMesh.translateX(-steps.length*0.25)
      textMesh.position.y = 1;
      textMesh.position.z = 0;
      stepGroup.add(textMesh)

      item.tables.forEach( (table:any,index:number) => {

        let tableCardMesh:any = TABLE_MESH[table.type].clone();
        tableCardMesh.name = table.id;
        tableCardMesh.cardType = table.type;
        tableCardMesh.position.x = i * 0.6;
        tableCardMesh.position.y = index * - 0.26;
        tableCardMesh.translateX(-steps.length*0.22)
        tableCardMesh.translateY(0.80)
        tableCardMesh.dependedOnBy = JSON.parse(JSON.stringify(table.dependedOnBy));
        tableCardMesh.depends = JSON.parse(JSON.stringify(table.depends));
        tableCardMesh.step = i;
        tableCardMesh.subIndex = index;
        tableCardMesh.itemDependedOnByList = table.itemDependedOnByList||[];
        tableCardMesh.fontName = table.name;
        let geometryFontB:any = new THREE.TextGeometry( table.name, {
          font: font,
          size: 0.03,
          height: 0.001,
        } );
        let textMaterialB = new THREE.MeshBasicMaterial({
          color: 0x000000
        })
        let textMeshB = new THREE.Mesh(geometryFontB,textMaterialB);
        textMeshB.position.set(-0.12,-0.02,0.01)
        tableCardMesh.add(textMeshB)
        group.add(tableCardMesh)
      })

    })

    var lineGroup:any = new THREE.Group();

    group.children.forEach( (table:any) => {
      let rightCenter = (startX:any,endX:any,table:any) => {
        return {
          startX : startX + table.geometry.parameters.width/2,
          endX  : endX - table.geometry.parameters.width/2 - 0.02
        }
      }
      let leftCenter = (startX:any,endX:any,table:any) => {
        return {
          startX : startX - table.geometry.parameters.width/2,
          endX  : endX + table.geometry.parameters.width/2 + 0.02
        }
      }
      let bottomCenter = (startY:any,endY:any,table:any) => {
        return {
          startY : startY - table.geometry.parameters.height/2,
          endY  : endY + table.geometry.parameters.height/2 + 0.02
        }
      }
      let topCenter = (startY:any,endY:any,table:any) => {
        return {
          startY : startY + table.geometry.parameters.height/2,
          endY  : endY - table.geometry.parameters.height/2 - 0.02
        }
      }
      let alignLeft = (startX:any,endX:any,table:any) => {
        return{
          startX : startX - table.geometry.parameters.width/2,
          endX  : endX - table.geometry.parameters.width/2 - 0.02
        }
      }
      let alignTop = (startY:any,endY:any,table:any) => {
        return{
          startY : startY + table.geometry.parameters.height/2,
          endY  : endY + table.geometry.parameters.height/2 + 0.02
        }
      }
      let createBezierLine = (curve:any) => {
        var points = curve.getPoints( 50 );
        var geometry = new THREE.BufferGeometry().setFromPoints( points );
        var material = new THREE.LineBasicMaterial( { color : 0x666666 } );
        return new THREE.Line( geometry, material );
      }
      //被依赖项
      if (table.dependedOnBy.length>0) {

        //find dependedOnByTable byId
        const meshArr = table.dependedOnBy.map( (id:string) => group.children.filter((m:any) => m.name === id )[0]);
        meshArr.forEach( (m:any) => {
          let startX = table.position.x;
          let startY = table.position.y;
          let endX  = m.position.x;
          let endY  = m.position.y;
          let calPosition:any = {
            startX,
            startY,
            endX,
            endY,
          };

          // 水平跨单步骤依赖
          if ( startY===endY && (Math.abs(m.step - table.step) === 1)) {
            if (m.step>table.step) {
              calPosition = {...calPosition,...rightCenter(startX,endX,table)}
            }else{
              calPosition = {...calPosition,...leftCenter(startX,endX,table)}
            }
          }

          //垂直跨单表依赖关系
          if (startX===endX && (Math.abs(m.subIndex - table.subIndex) === 1)) {
              if (startY>endY) {
                calPosition = {...calPosition,...bottomCenter(startY,endY,table)}
              }else{
                calPosition = {...calPosition,...topCenter(startY,endY,table)}
              }
          }
          var geometryLine = new THREE.Geometry();
          var materialLine = new THREE.LineBasicMaterial({
          	color: 0x666666,
          });
          geometryLine.vertices.push(
            new THREE.Vector3( calPosition.startX, calPosition.startY, 0 ), //起点
            new THREE.Vector3( calPosition.endX, calPosition.endY, 0 ), //终点
          );
          var line:any = new THREE.Line( geometryLine, materialLine );


          if (startY!==endY&&startX!==endX) {
            if (startX>endX) {
              calPosition = {...calPosition,...leftCenter(startX,endX,table)}
            }else{
              calPosition = {...calPosition,...rightCenter(startX,endX,table)}
            }
            var curve = new THREE.CubicBezierCurve(
              new THREE.Vector2( calPosition.startX, calPosition.startY ),
              new THREE.Vector2( (calPosition.endX-calPosition.startX)/6*5+calPosition.startX, calPosition.startY ),
              new THREE.Vector2( (calPosition.endX-calPosition.startX)/6+calPosition.startX, calPosition.endY ),
              new THREE.Vector2( calPosition.endX, calPosition.endY )
            );
            line = createBezierLine(curve)
          }
          //垂直跨多表依赖关系
          if (startX===endX && (Math.abs(m.subIndex - table.subIndex) > 1)) {
            //多表
            calPosition = {...calPosition,...alignLeft(startX,endX,table)}

            var curve = new THREE.CubicBezierCurve(
            	new THREE.Vector2( calPosition.startX, calPosition.startY ),
              new THREE.Vector2( calPosition.startX-0.03*(m.subIndex+1), (calPosition.startY-calPosition.endY)/3*2+calPosition.endY ),
            	new THREE.Vector2( calPosition.startX-0.03*(m.subIndex+1), (calPosition.startY-calPosition.endY)/3+calPosition.endY ),
            	new THREE.Vector2( calPosition.endX, calPosition.endY )
            );
            line = createBezierLine(curve)
          }

          // 水平跨多步骤依赖
          if ( startY===endY && (Math.abs(m.step - table.step) > 1 )) {

            calPosition = {...calPosition,...alignTop(startY,endY,table)}

            var curve = new THREE.CubicBezierCurve(
            	new THREE.Vector2( calPosition.startX, calPosition.startY ),
            	new THREE.Vector2( (calPosition.startX-calPosition.endX)/3*2+calPosition.endX, calPosition.startY+0.03*(m.step+1) ),
            	new THREE.Vector2( (calPosition.startX-calPosition.endX)/3+calPosition.endX, calPosition.endY+0.03*(m.step+1) ),
            	new THREE.Vector2( calPosition.endX, calPosition.endY )
            );
            line = createBezierLine(curve)
          }

          line.position.z = 0.01;
          line.connect = [table.name,m.name];
          let torusCopy:any = torus.clone();
          torusCopy.position.set(calPosition.endX,calPosition.endY,0)
          line.add(torusCopy)
          lineGroup.add(line)
        })
      }
    })
    scene.add(stepGroup)
    scene.add(lineGroup)
    scene.add(group);
    let position:any, target:any, tween:any, tweenBack:any, onOff = true, lengthSlice = { l : 0 }, opacity ={ o : 0};

    function init(mesh:any,tweenEnd:any) {
			let position = { z: mesh.position.z };
      let positionZ = { y: mesh.rotation.y };
			// target = mesh;
			tween = new TWEEN.Tween(position)
				.to(tweenEnd, 800)
				// .delay(1000)
				.easing(TWEEN.Easing.Circular.InOut)
				.onUpdate(()=>mesh.position.z = position.z);
			tweenBack = new TWEEN.Tween(position)
				.to(tweenEnd, 800)
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
      // let tweenLine = new TWEEN.Tween(lengthSlice)
			// 	.to({ l: points.length }, 800)
			// 	.delay(100)
			// 	.easing(TWEEN.Easing.Cubic.InOut)
			// 	.onUpdate(()=>mesh.geometry.setFromPoints(points.slice(0,lengthSlice.l)));
      // let tweenLineBack = new TWEEN.Tween(lengthSlice)
			// 	.to({ l: 0}, 800)
			// 	.easing(TWEEN.Easing.Cubic.InOut)
			// 	.onUpdate(()=>mesh.geometry.setFromPoints(points.slice(0,lengthSlice.l)));
      let tweenScreen = new TWEEN.Tween(positionZ)
				.to({y: -1}, 800)
				.delay(100)
				.easing(TWEEN.Easing.Cubic.InOut)
				.onUpdate(()=>mesh.rotation.y = positionZ.y);
      return{
        tweenOpacity,
        tweenOpacityBack,
        tweenScreen
        // tweenLine,
        // tweenLineBack
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
    let currentStatus:string = 'init'; // init : 初始化 ， table : 步骤表, tableItem : 步骤表依赖项目
    let allTableCard:any[] = [];
    function onMouseClick( event:any ) {

        //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        raycaster.setFromCamera( mouse, camera );

        // 获取raycaster直线和所有模型相交的数组集合
        var intersects = raycaster.intersectObjects( group.children );
        if (intersects.length>0&&currentStatus!=='tableItem') {

            let clickItem:any = intersects[0].object;
            console.log('clickItem',clickItem)
            if (currentStatus === 'table'&&allItem.some( (m:any) => m.id ===  intersects[0].object.id)) {
              setSpinning(true)
              setTimeout(()=>{
                init(mark,{z:0.35});
                tween.start()
                currentStatus = 'tableItem';

                let torusGroup:any = new THREE.Group();
                let sphereGroup:any = new THREE.Group();
                let arrTableItem:any[] = allTableCard.reduce( (accumulator,currentValue) => accumulator.concat(currentValue.itemDependedOnByList),[])
                let arrTableItemLength:number = arrTableItem.length;

                //创建表项并分布到环形视图
                let createSphere = ( accSphere:any, cardSphere:any, idxSphere:number, sourceSphere:any ) => {

                  var sphere:any = TABLE_CHILDREN_SPHERE_MESH[cardSphere.type].clone();
                  sphere.name = cardSphere.id;
                  sphere.position.z = 0.46
                  // sphere.position.x = accSphere.cos
                  // sphere.position.y = accSphere.sin
                  sphere.position.x = Math.cos(( 360/ arrTableItemLength*(idxSphere+0.5) / 180)  * Math.PI+0.01)
                  sphere.position.y = Math.sin(( 360/ arrTableItemLength*(idxSphere+0.5) / 180)  * Math.PI+0.01)
                  let textMaterial = new THREE.MeshBasicMaterial({
                    color: 0x000000
                  })
                  let geometryFont:any = new THREE.TextGeometry( cardSphere.name, {
                    font: font,
                    size: 0.03,
                    height: 0.001,
                  } );

                  let textMesh = new THREE.Mesh(geometryFont,textMaterial);
                  if (accSphere.cos>0) {
                    textMesh.position.x = 0.02;
                  }else{
                    textMesh.position.x = -0.26;
                  }
                  textMesh.position.y = 0.03;
                  sphere.add(textMesh)
                  sphereGroup.add( sphere );
                  return {
                    cos : Math.cos(( 360/ arrTableItemLength*(idxSphere+1) / 180)  * Math.PI+0.01),
                    sin : Math.sin(( 360/ arrTableItemLength*(idxSphere+1) / 180)  * Math.PI+0.01),
                  }
                }
                //创建圆环视图
                let createTorusView = ( acc:any, card:any, idx:number, source:any ) => {

                  var geometry = new THREE.TorusBufferGeometry( 1.02, 0.04, 10, 100,Math.PI * (card.itemDependedOnByList.length/arrTableItemLength*2) -0.01 );
                  var material = new THREE.MeshBasicMaterial( { color: COLOR_DATA[card.cardType], transparent : true, opacity : 0.3 } );
                  var torus = new THREE.Mesh( geometry, material );
                  torus.rotateZ(acc)
                  torus.position.z = 0.4
                  let textMaterial = new THREE.MeshBasicMaterial({
                    color: COLOR_DATA[card.cardType]
                  })
                  let geometryFont:any = new THREE.TextGeometry( card.fontName, {
                    font: font,
                    size: 0.06,
                    height: 0.001,
                  } );

                  let textMesh = new THREE.Mesh(geometryFont,textMaterial);
                  textMesh.position.x = 1.2;
                  textMesh.position.y = 0.2;
                  textMesh.position.z = 0.5;
                  textMesh.rotateZ(-acc)
                  torus.add(textMesh)
                  torusGroup.add(torus)
                  return acc+Math.PI * (card.itemDependedOnByList.length/arrTableItemLength*2)
                }
                allTableCard.reduce( createTorusView, 0 )
                torusGroup.name = 'torusGroup';
                scene.add( torusGroup )

                arrTableItem.reduce( createSphere, {cos:Math.cos(( 0 / 180)  * Math.PI+0.01),sin:Math.sin(( 0 / 180)  * Math.PI+0.01)} )
                sphereGroup.name = 'sphereGroup';
                scene.add( sphereGroup )
                console.log('currentItem===>',currentItem)
                let lineGroups:any = new THREE.Group();
                lineGroups.name = 'lineGroups';
                currentItem.itemDependedOnByList.forEach((item:any,index:number)=>{
                  let start = sphereGroup.children.filter((x:any)=>x.name==item.id)[0];
                  item.dependedOnBy.forEach( (endItemId:any)=>{
                    let end = sphereGroup.children.filter((x:any)=>x.name==endItemId)[0];
                    var curveq = new THREE.QuadraticBezierCurve(
                    	new THREE.Vector2( start.position.x, start.position.y ),
                    	new THREE.Vector2( 0, 0 ),
                    	new THREE.Vector2( end.position.x, end.position.y )
                    );

                    var pointsq = curveq.getPoints( 50 );
                    var geometryq = new THREE.BufferGeometry().setFromPoints( pointsq );
                    var materialq = new THREE.LineBasicMaterial( { color : 0xff0000 } );

                    //Create the final object to add to the scene
                    var curveObjectq = new THREE.Line( geometryq, materialq );
                    curveObjectq.position.z = 0.46;

                    let torusCopy:any = torus.clone();
                    torusCopy.position.set(start.position.x-0.01,start.position.y-0.01,0);
                    curveObjectq.add(torusCopy)
                    lineGroups.add(curveObjectq)
                  } )
                })
                scene.add(lineGroups)
                setSpinning(false)
              },300)
            }
            if (currentStatus==='init'&&(clickItem.dependedOnBy.length>0||clickItem.depends.length>0)) {
              currentItem = clickItem;
              currentStatus = 'table';
              // 被依赖项目
              let dependedOnByItem = currentItem.dependedOnBy.map( (id:string) => group.children.filter( (card:any) => card.name === id )[0] )
              // 依赖项
              let dependsItem = currentItem.depends.map( (id:string) => group.children.filter( (card:any) => card.name === id )[0] )
              allTableCard = [currentItem].concat(dependedOnByItem,dependsItem);
              // 线
              let lineArray = lineGroup.children.filter( (line:any) => line.connect.includes(currentItem.name) )
              let stepTitleIndex:any = Array.from(new Set([currentItem].concat(dependedOnByItem,dependsItem).map( (item:any) => item.step )))
              allItem = Array.prototype.concat([currentItem],dependedOnByItem,dependsItem,lineArray,stepTitleIndex.map( (i:number) => stepGroup.children[i] ))

              allItem.forEach( (mesh:any) => {
                init(mesh,{z:0.3});
                tween.start()
              })

              const { tweenOpacity } = init(mark,{});
              tweenOpacity.start()
            }

        }else{

          if (currentStatus==="table") {
            currentStatus="init"
            const { tweenOpacityBack } = init(mark,{});
            tweenOpacityBack.start()

            allItem.forEach( (mesh:any) => {
              init(mesh,{z:0});
              tweenBack.start()
            })
          }
          if (currentStatus==="tableItem") {
            currentStatus="table"
            init(mark,{z:0.02});
            tween.start()
            console.log(scene)
            let delObjectName = ['torusGroup','sphereGroup','lineGroups'];
            for (let i = 0; i < delObjectName.length; i++) {
                let name:any = delObjectName[i];
                let obj:any = scene.getObjectByName(name);
                scene.remove(obj)
            }
          }
        }

        var intersectsMark = raycaster.intersectObjects( [mark] );
        if (intersectsMark.length>0) {

            if (onOff===false) {


            }

        }

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

      trackballControls.update(clock.getDelta());
    	requestAnimationFrame( animate );
      TWEEN.update()
    	renderer.render( scene, camera );
    }
  },[])

  return(
    <div>
      <Spin tip="Loading..." spinning={spinning}>
        <div id="container">

        </div>
      </Spin>
    </div>
  )
}

export default View;
