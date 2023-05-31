import { PerspectiveCamera, WebGLRenderer } from "three";
import { Scene, PolarGridHelper } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer";
import { radius } from "./constants";

function createScene() {
    const scene = new Scene();
    const sections = new PolarGridHelper(radius, 12, 1, 32, 0x444444, 0x444444)
    scene.add(sections);
    return scene;
}
function init() {
    const renderer = createRenderer();
    const css_renderer = createCSSRenderer();
    const camera = createCamera();
    const scene = createScene();
    const controls = createControls(camera, css_renderer);
    return { renderer, css_renderer, scene, camera, controls };
}

function createCamera() {
    const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.setFromSphericalCoords(radius*2, Math.PI/4, 0);

    camera.layers.enableAll();
    return camera;
}
function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("app").appendChild(renderer.domElement);
    return renderer;
}
function createCSSRenderer() {
    const renderer = new CSS2DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0px";
    document.getElementById("app").appendChild(renderer.domElement);
    return renderer;
}
function createControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    //controls.enableDamping = true
    return controls;
}

export function render(renderer, css_renderer, scene, camera) {
    renderer.render(scene, camera);
    css_renderer.render(scene, camera);
}
export { createCamera, createScene, createRenderer, createControls, init };
