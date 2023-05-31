import { GeoVector, Ecliptic } from "astronomy-engine";
import { Group, SphereGeometry, RingGeometry, MeshBasicMaterial, Mesh, TextureLoader, Vector3 } from "three";
import { bodies } from "./constants";
import { degToRad } from "three/src/math/MathUtils";
import { gsap } from "gsap";

import { CSS2DObject } from "three/addons/renderers/CSS2DRenderer";

const geometry = new SphereGeometry(1, 16, 16);
const circle_geometry = new RingGeometry(1.2, 2, 32);
const textureLoader = new TextureLoader();

export function createBodies() {
    const group = new Group();

    for (const body of bodies) {
        const material = new MeshBasicMaterial({ map: textureLoader.load(`textures/${body.texture}.jpg`) });
        const mesh = new Mesh(geometry, material);

        if (body.name == "Saturn") {
            mesh.add(
                new Mesh(circle_geometry.rotateX(degToRad(63)), new MeshBasicMaterial({ side: 2, color: 0xcfc0a2 }))
            );
        }

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
        const spherical = new Vector3();
        spherical.setFromSphericalCoords(body.distance * 6.5, degToRad(position.elat - 90), degToRad(position.elon));
        gsap.to(body.mesh.position, {
            x: spherical.x,
            y: spherical.y,
            z: spherical.z,
            duration: 1,
        });
    }
}
