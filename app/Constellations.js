import { Spherical, VectorFromSphere, Ecliptic } from "astronomy-engine";
import { constellations } from "./constants";
import { Vector3, BufferGeometry, Points, Group, LineSegments } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { line_material_2, pts_material, pts_material_red } from "./utils";

export function createStars(radius) {
    const group = new Group();
    for (const [name, constellation] of Object.entries(constellations)) {
        const stars_array = [];

        for (const star of constellation.stars) {
            const pos_eqj = getStarPosition(star);
            const pos_ecl = getEclFromEqj(pos_eqj);

            const v = new Vector3();

            stars_array.push(v.setFromSphericalCoords(radius, degToRad(pos_ecl.elat - 90), degToRad(pos_ecl.elon)));
        }

        const geom = new BufferGeometry().setFromPoints(stars_array);
        let points;
        if (constellation.lines) {
            geom.setIndex(constellation.lines.flat());
            points = new Points(geom, pts_material);
            const lines = new LineSegments(geom, line_material_2);
            group.add(lines);
        } else {
            points = new Points(geom, pts_material_red);
        }
        group.add(points);
    }

    group.matrixAutoUpdate = false;
    group.matrixWorldAutoUpdate = false;
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
