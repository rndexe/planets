import { EllipseCurve, Group, Line, LineSegments, Path, PerspectiveCamera, Vector3, WebGLRenderer } from "three";
import { Scene, AxesHelper, BufferGeometry } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import { line_material, line_material_red } from "./utils";
import { cos_30, cos_60, sin_30, sin_60 } from "./utils";

function createScene() {
    const scene = new Scene();
    const axesHelper = new AxesHelper(10);
    //scene.add(axesHelper);
    return scene;
}
function init() {
    const renderer = createRenderer();
    const camera = createCamera();
    const scene = createScene();
    const controls = createControls(camera, renderer);
    const stats = createStats();
    return { renderer, scene, camera, controls, stats };
}

function createStats() {
    const stats = new Stats();
    stats.domElement.style.position = "absolute";
    stats.domElement.style.bottom = "0px";
    stats.domElement.style.zIndex = 100;
    document.getElementById("app").appendChild(stats.domElement);
    return stats;
}
function createCamera() {
    const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.y = 200;
    return camera;
}
function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("app").appendChild(renderer.domElement);
    return renderer;
}
function createControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    //controls.enableDamping = true
    return controls;
}
function createSections(radius) {
    const group = new Group();

    const array = [
        new Vector3(radius, 0, 0),
        new Vector3(0, 0, 0),
        new Vector3(0, 0, -radius),
        new Vector3(0, 0, 0),
        new Vector3(0, 0, radius),
        new Vector3(0, 0, 0),
        new Vector3(-radius, 0, 0),
        new Vector3(0, 0, 0),
        new Vector3(radius * cos_60, 0, radius * sin_60),
        new Vector3(0, 0, 0),
        new Vector3(-radius * cos_60, 0, -radius * sin_60),
        new Vector3(0, 0, 0),
        new Vector3(-radius * cos_60, 0, radius * sin_60),
        new Vector3(0, 0, 0),
        new Vector3(radius * cos_60, 0, -radius * sin_60),
        new Vector3(0, 0, 0),
        new Vector3(radius * cos_30, 0, radius * sin_30),
        new Vector3(0, 0, 0),
        new Vector3(-radius * cos_30, 0, -radius * sin_30),
        new Vector3(0, 0, 0),
        new Vector3(-radius * cos_30, 0, radius * sin_30),
        new Vector3(0, 0, 0),
        new Vector3(radius * cos_30, 0, -radius * sin_30),
        new Vector3(0, 0, 0),
    ];

    const path = new EllipseCurve(0, 0, radius, radius);
    const points = path.getPoints(50);

    const geom = new BufferGeometry().setFromPoints(array);
    const geom2 = new BufferGeometry().setFromPoints(points);

    const lines = new LineSegments(geom, line_material);
    const ellipse = new Line(geom2, line_material);
    ellipse.rotateX(Math.PI / 2);

    group.add(lines);
    group.add(ellipse);
    group.matrixAutoUpdate = false;
    group.matrixWorldAutoUpdate = false;
    return group;
}
export { createCamera, createScene, createRenderer, createControls, createSections, init };
