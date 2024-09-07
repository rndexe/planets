<script>
    import { init, render } from "./app/world";
    import { createBodies, setPositions } from "./app/SolarSystem";
    import { createStars } from "./app/Constellations";
    import { splitDate, getDateFromArray } from "./app/utils";
    import { DefaultLoadingManager } from "three";
    import { slide } from "svelte/transition";

    let loaded = false;
    const { renderer, css_renderer, scene, camera, controls } = init();

    scene.add(createBodies());
    scene.add(createStars());

    let t = new Date();
    let date = [];
    date = splitDate(t);
    setPositions(t);

    $: {
        t = getDateFromArray(date).t;
        const dateString = date[0] + "-" + date[1] + "-" + date[2];
        if (t > 0 && dateString === getDateFromArray(date).t_str) {
            setPositions(t);
            render(renderer, css_renderer, scene, camera);
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        render(renderer, css_renderer, scene, camera);
    }

    animate();

    DefaultLoadingManager.onLoad = function () {
        console.log("Loading Complete!");
        setTimeout(() => {
            loaded = true;
        }, 1000);
        render(renderer, css_renderer, scene, camera);
    };

    controls.addEventListener("change", () => {
        render(renderer, css_renderer, scene, camera);
    });

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        css_renderer.setSize(window.innerWidth, window.innerHeight);
    };
</script>

<svelte:window on:resize={handleResize} />
{#if !loaded}
    <section id="loading-screen" out:slide={{ y: -1000, duration: 2000 }} />
{/if}
<div class="bottom-left">
    <input class="short-num" type="number" required max="31" min="1" bind:value={date[0]} /><span>/</span>
    <input class="short-num" type="number" required max="12" min="1" bind:value={date[1]} /><span>/</span>
    <input class="long-num" type="number" required max="2050" min="1950" bind:value={date[2]} />
</div>

<style>
    .bottom-left {
        position: absolute;
        bottom: 1rem;
        inset-inline: 0;
        width: fit-content;
        margin: auto;
        z-index: 100;
        color: white;
        font-size: 1.5rem;
    }
    input[type="number"] {
        font-family: monospace;
        font-size: 1.5rem;
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
    #loading-screen {
        position: absolute;
        z-index: 200;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
    }
</style>
