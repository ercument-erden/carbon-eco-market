/**
 * CarbonEcoMarket - 3D Globe Visualization
 * Rotating Earth with carbon trading data points
 */

function initGlobe() {
  const container = document.getElementById('globe-container');
  if (!container) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Earth geometry
  const earthGeometry = new THREE.SphereGeometry(5, 64, 64);

  // Create gradient material for Earth
  const earthMaterial = new THREE.MeshPhongMaterial({
    color: 0x27ae60,
    emissive: 0x112211,
    shininess: 25,
    transparent: true,
    opacity: 0.9
  });

  const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  scene.add(earth);

  // Add atmosphere glow
  const atmosphereGeometry = new THREE.SphereGeometry(5.2, 64, 64);
  const atmosphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x27ae60,
    transparent: true,
    opacity: 0.1,
    side: THREE.BackSide
  });
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  scene.add(atmosphere);

  // Add carbon trading points (green particles)
  const pointsGeometry = new THREE.BufferGeometry();
  const pointsCount = 195; // 195 countries
  const positions = new Float32Array(pointsCount * 3);

  for (let i = 0; i < pointsCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const radius = 5.1;

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x2ecc71,
    size: 0.15,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });

  const points = new THREE.Points(pointsGeometry, pointsMaterial);
  scene.add(points);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);

  camera.position.z = 15;

  // Animation variables
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  // Mouse tracking
  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  // Scroll-based zoom
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const maxScroll = 800;
    const zoomFactor = Math.min(scrolled / maxScroll, 1);
    camera.position.z = 15 - zoomFactor * 5;
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Smooth rotation
    earth.rotation.y += 0.001;
    points.rotation.y += 0.001;
    atmosphere.rotation.y += 0.0008;

    // Mouse-based rotation
    targetX = mouseX * 0.3;
    targetY = mouseY * 0.3;

    earth.rotation.x += 0.05 * (targetY - earth.rotation.x);
    earth.rotation.y += 0.05 * (targetX - earth.rotation.y);

    // Pulse animation for points
    const time = Date.now() * 0.001;
    pointsMaterial.opacity = 0.5 + Math.sin(time * 2) * 0.3;

    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// Auto-initialize when Three.js is loaded
if (typeof THREE !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobe);
  } else {
    initGlobe();
  }
}
