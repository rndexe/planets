import { Group, Line, Path, PerspectiveCamera, Vector3, WebGLRenderer } from "three";
import { Scene, AxesHelper, BufferGeometry, LineBasicMaterial } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import { degToRad } from "three/src/math/MathUtils";

const line_material = new LineBasicMaterial({
    color: 0xffffff,
    linewidth: 1,
 
});

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
    const stats = createStats();
    return { renderer, scene, camera, stats };
}

function createStats() {
    const stats = new Stats();
    stats.domElement.style.position = "absolute";
    stats.domElement.style.bottom = "0px";
    stats.domElement.style.zIndex = 100;
    document.body.appendChild(stats.domElement);
    return stats;
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
function createSections(radius) {
    const group = new Group();
    const path = new Path();
    path.lineTo(0, radius);
    path.absarc(0, 0, radius, degToRad(90), degToRad(60), true);

    const geom = new BufferGeometry().setFromPoints(path.getPoints());

    const lines = new Array(12);

    lines.forEach((sector, i) => {
        sector = new Line(geom, line_material);
        //x.rotateZ(degToRad(PI / 6) * i);
        group.add(sector);
    });

    return group;
}
export { createCamera, createScene, createRenderer, createControls, createSections, init };
