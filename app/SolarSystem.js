import { GeoVector, Ecliptic } from "astronomy-engine";
import { Group, SphereGeometry, MeshBasicMaterial, Mesh } from "three";
import { bodies } from "./constants";
import { degToRad } from "three/src/math/MathUtils";
const geometry = new SphereGeometry(1);

export function createBodies() {
    const group = new Group();

    for (const body of bodies) {
        const material = new MeshBasicMaterial({ color: body.color });
        body.mesh = new Mesh(geometry, material);
        body.mesh.scale.setScalar(body.scale / 2);
        group.add(body.mesh);
    }
    return group;
}

export function setPositions(time) {
    for (const body of bodies) {
        const position = Ecliptic(GeoVector(body.name, time, false));
        body.position = position;
        body.mesh.position.setFromSphericalCoords(
            body.distance * 2.5,
            degToRad(position.elat - 90),
            degToRad(position.elon)
        );
    }
}
