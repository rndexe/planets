import { LineBasicMaterial, PointsMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils";

export const line_material = new LineBasicMaterial({
    color: 0x0c4a6e,
    linewidth: 1,
    transparent: true,
    opacity: 0.5,
});

export const line_material_2 = new LineBasicMaterial({
    color: 0xffffff,
    linewidth: 1,
    transparent: true,
    opacity: 0.3,
});

export const line_material_red = new LineBasicMaterial({
    color: 0xff0000,
    linewidth: 1,
    transparent: true,
    opacity: 0.2,
});

export function splitDate(time) {
    const date = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    return [date, month, year];
}

export function getDateFromArray(array) {
    const t = new Date(array[2], array[1] - 1, array[0]);
    const t_str = t.getDate() + "-" + (t.getMonth() + 1) + "-" + t.getFullYear();

    return { t, t_str };
}
export const pts_material = new PointsMaterial({ color: 0xffffff, size: 0.4 });
export const pts_material_red = new PointsMaterial({ color: 0xff0000, size: 0.8 });

export const cos_60 = Math.cos(degToRad(60));
export const cos_30 = Math.cos(degToRad(30));
export const sin_60 = Math.sin(degToRad(60));
export const sin_30 = Math.sin(degToRad(30));
