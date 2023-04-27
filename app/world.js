import { PerspectiveCamera, WebGLRenderer } from "three";
import { Scene, AxesHelper } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function createScene() {
    const scene = new Scene();
    const axesHelper = new AxesHelper(10);
    scene.add(axesHelper);
    return scene;
}
function init() {
    const renderer = createRenderer();
    const camera = createCamera();
    const scene = createScene();
    createControls(camera, renderer);

    return { renderer, scene, camera };
}
function createCamera() {
    const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.y = 50;
    return camera;
}
function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}
function createControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    return controls;
}

export { createCamera, createScene, createRenderer, createControls, init };
