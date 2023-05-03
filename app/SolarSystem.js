import { GeoVector, Ecliptic } from "astronomy-engine";
import { Group, SphereGeometry, MeshBasicMaterial, Mesh, TextureLoader } from "three";
import { bodies } from "./constants";
import { degToRad } from "three/src/math/MathUtils";

import { CSS2DObject } from "three/addons/renderers/CSS2DRenderer";

const geometry = new SphereGeometry(1, 16, 16);
const textureLoader = new TextureLoader();

export function createBodies() {
    const group = new Group();

    for (const body of bodies) {
        const material = new MeshBasicMaterial({ map: textureLoader.load(`${import.meta.env.BASE_URL}/textures/${body.texture}.jpg`) });
        const mesh = new Mesh(geometry, material);
        mesh.scale.setScalar(body.scale);

        const div = document.createElement("div");
        div.className = "label";
        div.textContent = body.name;

        const label = new CSS2DObject(div);
        label.position.set(0, 1, 0);
        label.center.set(0.5, 0.5);
        mesh.add(label);

        group.add(mesh);
        body.mesh = mesh;
    }
    return group;
}

export function setPositions(time) {
    for (const body of bodies) {
        const position = Ecliptic(GeoVector(body.name, time, false));
        body.position = position;
        body.mesh.position.setFromSphericalCoords(
            body.distance * 6.5,
            degToRad(position.elat - 90),
            degToRad(position.elon)
        );
        //body.sprite.position.set(body.mesh.position.x, body.mesh.position.y + body.scale + 0.5, body.mesh.position.z);
        //body.label.position.set(0, body.scale + 0.5, 0);
    }
}
