<script>
    import { createSections, init } from "./app/world";
    import { createBodies, setPositions } from "./app/SolarSystem";
    import { createStars } from "./app/Constellations";
    let t = 0;

    const { renderer, scene, camera, stats } = init();
    const radius = 75;

    const groups = [];
    groups.push(createBodies());
    groups.push(createStars(radius));
    //groups.push(createSections(radius));
    groups.forEach((group) => scene.add(group));

    setPositions(new Date());

    function animate() {
        //setPositions(t);
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        //t += 1;
        stats.update();
    }

    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
</script>

<svelte:window on:resize={handleResize} />
