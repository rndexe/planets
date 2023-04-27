<script>
    import { init } from "./app/world";
    import { createBodies, setPositions } from "./app/SolarSystem";
    import { createStars } from "./app/Constellations";
    let time = 0;

    const { renderer, scene, camera } = init();

    const group1 = createBodies();
    const group2 = createStars();

    setPositions(new Date());
    scene.add(group1);
    scene.add(group2);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
</script>

<svelte:window on:resize={handleResize} />
