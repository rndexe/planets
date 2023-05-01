import { GeoVector, Ecliptic } from "astronomy-engine";
import { Group, SphereGeometry, MeshBasicMaterial, Mesh } from "three";
import { bodies } from "./constants";
import { degToRad } from "three/src/math/MathUtils";
import { createText, line_material } from "./utils";

const geometry = new SphereGeometry(1);

export function createBodies() {
    const group = new Group();

    for (const body of bodies) {
        const material = new MeshBasicMaterial({ color: body.color });
        const mesh = new Mesh(geometry, material);
        const sprite = createText(body.name);

        mesh.scale.setScalar(body.scale);

        group.add(mesh);
        group.add(sprite);
        body.mesh = mesh;
        body.sprite = sprite;
    }
    return group;
}

export function setPositions(time) {
    for (const body of bodies) {
        const position = Ecliptic(GeoVector(body.name, time, false));
        body.position = position;
        body.mesh.position.setFromSphericalCoords(
            body.distance * 5,
            degToRad(position.elat - 90),
            degToRad(position.elon)
        );
        body.sprite.position.set(body.mesh.position.x, body.mesh.position.y + body.scale + 0.5, body.mesh.position.z);
    }
}
