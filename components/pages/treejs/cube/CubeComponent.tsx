import * as THREE from "three";
import React from "react";

const createCube = (
  geometry: THREE.BoxGeometry,
  color: THREE.ColorRepresentation,
  x: number
) => {
  const cube = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color })
  );
  cube.position.x = x;
  return cube;
};

// resize the view when the canvas become more smaller
function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

//Create a scene, perspective and cube with react component
export default class App extends React.Component {
  mount: any;
  componentDidMount() {
    // Create the perspective Camera
    const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);

    // put the camera 2 step in the back, because our object is in the middle and will take all view
    camera.position.z = 2;

    //Creating the cubes
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cubes = [
      createCube(geometry, 0x7e31eb, 0),
      createCube(geometry, 0x8844aa, 2),
      createCube(geometry, 0xaa8844, -2),
    ];

    //create the scene and add all cube and the light
    const scene = new THREE.Scene();
    // the light is a light positionned above the scene, with color fadding from sky to ground color
    const light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
    scene.add(light);
    cubes.map((cube) => scene.add(cube));
    //Create the render element and render resize it.
    const renderer = new THREE.WebGLRenderer({ canvas: this.mount });
    const animate = function (time: number) {
      time *= 0.001;
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      // this rotate the cubes by the time passed since the last animation
      cubes.map((cube, idx) => {
        const speed = 1 + idx * 0.1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
        cube.rotation.z = rot;
      });
      //Render the scene and the camera
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
  render() {
    return (
      <canvas
        className="w-full lg:w-2/3 h-96"
        ref={(ref) => (this.mount = ref)}
      ></canvas>
    );
  }
}
