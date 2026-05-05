// =============================================
//   NEXUSGEAR — 3D Gaming PC Hero
//   Three.js r128 (global) + GLTFLoader
// =============================================

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  var container = canvas.parentElement;
  var cW = container.clientWidth || 500;
  var cH = container.clientHeight || 500;

  // ---- Scene ----
  var scene = new THREE.Scene();

  // ---- Camera ----
  var camera = new THREE.PerspectiveCamera(30, cW / cH, 0.1, 2000);
  camera.position.set(5.5, 3.5, 6.5);

  // ---- Renderer ----
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(cW, cH);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // ---- Orbit Controls (auto-rotate + drag) ----
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.8;
  controls.minPolarAngle = Math.PI * 0.35;
  controls.maxPolarAngle = Math.PI * 0.6;

  // ---- Lights ----
  var CYAN = 0x00f5ff;
  var PURPLE = 0xbf00ff;
  var BLUE = 0x0044ff;

  // Ambient + hemisphere fill
  scene.add(new THREE.AmbientLight(0x1a1a3a, 0.8));
  scene.add(new THREE.HemisphereLight(0x88bbff, 0x111122, 0.6));

  // Key light (front-right)
  var keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(6, 8, 8);
  keyLight.castShadow = true;
  scene.add(keyLight);

  // Fill light (left)
  var fillLight = new THREE.DirectionalLight(0x8899bb, 0.5);
  fillLight.position.set(-6, 4, 4);
  scene.add(fillLight);

  // Rim / back light
  var rimLight = new THREE.DirectionalLight(0x88bbff, 0.6);
  rimLight.position.set(0, 5, -8);
  scene.add(rimLight);

  // RGB accent point lights
  var cyanLight = new THREE.PointLight(CYAN, 1.5, 20);
  cyanLight.position.set(5, 2, 5);
  scene.add(cyanLight);

  var purpleLight = new THREE.PointLight(PURPLE, 1.0, 20);
  purpleLight.position.set(-5, 1, -4);
  scene.add(purpleLight);

  var blueLight = new THREE.PointLight(BLUE, 1.2, 15);
  blueLight.position.set(0, -3, 5);
  scene.add(blueLight);

  // ---- Load GLTF Model ----
  var loader = new THREE.GLTFLoader();

  loader.load(
    'models/custom_gaming_pc/scene.gltf',

    // Success
    function (gltf) {
      var model = gltf.scene;

      // Auto-scale to a consistent size
      var box = new THREE.Box3().setFromObject(model);
      var size = box.getSize(new THREE.Vector3());
      var maxDim = Math.max(size.x, size.y, size.z);
      var scale = 4.8 / maxDim;
      model.scale.setScalar(scale);
      model.updateMatrixWorld(true);

      // Center the model
      var scaledBox = new THREE.Box3().setFromObject(model);
      var center = scaledBox.getCenter(new THREE.Vector3());
      model.position.sub(center);
      model.position.y -= 0.6;

      // Enhance materials & hide the floor plane
      model.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          // Hide any flat floor/ground plane
          var meshBox = new THREE.Box3().setFromObject(child);
          var meshSize = meshBox.getSize(new THREE.Vector3());
          var isFlat = meshSize.y < 0.05 * Math.max(meshSize.x, meshSize.z);
          var isLarge = meshSize.x > 2 || meshSize.z > 2;

          if (isFlat && isLarge) {
            child.visible = false;
          }
        }
      });

      scene.add(model);

      // Point camera at model center
      controls.target.set(0, -0.6, 0);
      controls.update();
      renderer.render(scene, camera);

      console.log('Gaming PC model loaded');
    },

    // Progress
    function (xhr) {
      if (xhr.total > 0) {
        console.log('Loading: ' + Math.round((xhr.loaded / xhr.total) * 100) + '%');
      }
    },

    // Error
    function (error) {
      console.error('Model load failed:', error);
    }
  );

  // ---- Resize handler ----
  window.addEventListener('resize', function () {
    var w = container.clientWidth || 500;
    var h = container.clientHeight || 500;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

  // ---- Animation loop ----
  var clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    var t = clock.getElapsedTime();

    // Update orbit controls (handles auto-rotate + damping)
    controls.update();

    // Subtle RGB light pulsation
    cyanLight.intensity = 2.5 + Math.sin(t * 2) * 0.8;
    purpleLight.intensity = 2.0 + Math.sin(t * 1.5 + 1) * 0.7;
    blueLight.intensity = 1.2 + Math.sin(t * 1.8 + 2) * 0.5;

    renderer.render(scene, camera);
  }

  animate();
});
