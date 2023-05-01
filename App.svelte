<script>
    import { createSections, init } from "./app/world";
    import { createBodies, setPositions } from "./app/SolarSystem";
    import { createStars } from "./app/Constellations";
    import { splitDate, getDateFromArray } from "./app/utils";

    let t = new Date();
    let date = [];

    date = splitDate(t);

    const { renderer, scene, camera, stats, controls } = init();
    const radius = 75;

    const groups = [];
    groups.push(createBodies());
    groups.push(createStars(radius));
    groups.push(createSections(radius));
    groups.forEach((group) => scene.add(group));

    setPositions(t);

    renderer.render(scene, camera);

    function animate() {
        requestAnimationFrame(animate);
        stats.update();
    }

    animate();

    $: {
        t = getDateFromArray(date).t;
        const dateString = date[0] + "-" + date[1] + "-" + date[2];
        if (t > 0 && dateString === getDateFromArray(date).t_str) {
            setPositions(t);
            renderer.render(scene, camera);
        }
    }

    controls.addEventListener("change", () => {
        renderer.render(scene, camera);
    });

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
</script>

<svelte:window on:resize={handleResize} />
<div class="bottom-left">
    <input class="short-num" type="number" required max="31" min="1" bind:value={date[0]} /><span>/</span>
    <input class="short-num" type="number" required max="12" min="1" bind:value={date[1]} /><span>/</span>
    <input class="long-num" type="number" required max="2050" min="1950" bind:value={date[2]} />
</div>

<style>
    .bottom-left {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        z-index: 100;
        color: white;
        font-size: 2rem;
        font-family: "Courier New", Courier, monospace;
    }
    input[type="number"] {
        font-size: 2rem;
        background-color: transparent;
        color: white;
        padding: 0;
        border: none;
    }
    .short-num {
        width: 2.5ch;
    }
    .long-num {
        width: 4.5ch;
    }
    input[type="number"]:focus-visible {
        outline: none;
    }
    input[type="number"]:invalid {
        border: solid 1px red;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        appearance: none;
    }
</style>
