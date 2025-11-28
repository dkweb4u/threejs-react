import * as THREE from 'three';

// create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0")

// add the camera

const camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// create and add the object
const gemontry = new THREE.BoxGeometry();
const meterial = new THREE.MeshLambertMaterial({color: "#458585",emissive:"#458485"});

const cube = new THREE.Mesh(gemontry,meterial);
scene.add(cube);

// add Lighting
const  light = new THREE.DirectionalLight(0x9cdba6,10);
light.position.set(1,1,1);
scene.add(light);

// setup render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// animate scene
// renderer.render(scene,camera)

// add animation 
function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    renderer.render(scene,camera);
    
}
animate();