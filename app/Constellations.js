import { Spherical, VectorFromSphere, Ecliptic } from "astronomy-engine";
import { constellations } from "./constants";
import { PointsMaterial, Vector3, BufferGeometry, Points, Group, LineSegments, LineBasicMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils";

const material = new PointsMaterial({ color: 0xffffff, size: 0.3 });
const line_material = new LineBasicMaterial({
    color: 0xffffff,
    linewidth: 1,
    transparent: true,
    opacity: 0.2,
});

export function createStars() {
    const group = new Group();
    for (const [name, constellation] of Object.entries(constellations)) {
        const stars_array = [];

        for (const star of constellation.stars) {
            const pos_eqj = getStarPosition(star);
            const pos_ecl = getEclFromEqj(pos_eqj);

            const v = new Vector3();

            stars_array.push(v.setFromSphericalCoords(50, degToRad(pos_ecl.elat - 90), degToRad(pos_ecl.elon)));
        }

        const geom = new BufferGeometry().setFromPoints(stars_array);
        geom.setIndex(constellation.lines.flat());
        const points = new Points(geom, material);
        const lines = new LineSegments(geom, line_material);
        group.add(points);
        group.add(lines);
    }
    return group;
}

function getStarPosition(stardata) {
    return [15 * stardata[0] + stardata[1] / 4, stardata[2] + stardata[3] / 60];
}

function getEclFromEqj(coords) {
    const sphere = new Spherical(coords[1], coords[0], 100);
    const vec = VectorFromSphere(sphere, 0);
    return Ecliptic(vec);
}
