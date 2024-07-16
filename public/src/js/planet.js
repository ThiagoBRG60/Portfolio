import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import modelUrl from '../../assets/purple_planet.glb';

// Configuração da cena, câmera e renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setClearColor(0x000000, 0);

// Adiciona o renderer ao elemento canvas-planet
const canvasPlanet = document.querySelector('.canvas-planet');
canvasPlanet.appendChild(renderer.domElement);

// Configuração dos OrbitControls apenas para o modelo 3D do planeta
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.minPolarAngle = Math.PI / 2; // Ângulo mínimo de visão para cima (90 graus)
controls.maxPolarAngle = Math.PI / 2; // Ângulo máximo de visão para cima (90 graus)

// Posição inicial da câmera
camera.position.set(0, 0, 50);

// Função de redimensionamento do renderer
function resizeRendererToDisplaySize() {
  const width = canvasPlanet.clientWidth;
  const height = canvasPlanet.clientHeight;
  const needResize = renderer.domElement.width !== width || renderer.domElement.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

// Inicializa o redimensionamento do renderer
resizeRendererToDisplaySize();

// Carregamento do modelo glTF do planeta
const loader = new GLTFLoader();
loader.load(modelUrl, function (gltf) {
  // Ajustes no modelo 3D do planeta
  gltf.scene.traverse(function (child) {
    if (child.isMesh) {
      child.scale.set(28, 28, 28);
      child.rotation.x = Math.PI / 6;
    }
  });

  // Adiciona o modelo à cena
  scene.add(gltf.scene);

  // Inicializa o mixer de animação, se houver
  const mixer = new THREE.AnimationMixer(gltf.scene);
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
    mixer.timeScale = 0.2; // Velocidade da animação
  });

  // Função de animação com clock para controle de tempo
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Atualiza os controles de órbita
    const delta = clock.getDelta();
    mixer.update(delta); // Atualiza o mixer com delta time
    renderer.render(scene, camera);
    resizeRendererToDisplaySize();
  }
  animate();
});

// Redimensiona o renderer quando o tamanho do canvas-planet muda
window.addEventListener('resize', resizeRendererToDisplaySize);
