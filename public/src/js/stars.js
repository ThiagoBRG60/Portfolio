// Configuração inicial
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Ativa a transparência
renderer.setClearColor(0x000000, 0); // Define o fundo como transparente

renderer.setSize(window.innerWidth, window.innerHeight);
const starsContainer = document.querySelector(".canvas-container");
starsContainer.appendChild(renderer.domElement)

camera.position.z = 50;

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Criação das estrelas usando InstancedMesh
const starCount = 2000;
const geometry = new THREE.SphereGeometry(0.08, 24, 24); // Reduzindo a complexidade
const material = new THREE.MeshBasicMaterial({ color: 0xAAA6C3 });
const instancedMesh = new THREE.InstancedMesh(geometry, material, starCount);

const dummy = new THREE.Object3D();
const starData = [];

for (let i = 0; i < starCount; i++) {
  // Posições iniciais aleatórias
  const x = THREE.MathUtils.randFloatSpread(250);
  const y = THREE.MathUtils.randFloatSpread(250);
  const z = THREE.MathUtils.randFloatSpread(250);

  // Parâmetros da órbita
  const radius = Math.sqrt(x * x + z * z); // Distância do centro para manter a órbita
  const angle = Math.atan2(z, x); // Ângulo inicial baseado na posição

  starData.push({ radius, angle, yOffset: y });

  dummy.position.set(x, y, z);
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(i, dummy.matrix);
}

scene.add(instancedMesh);

// Função para animar as estrelas
function animateStars() {
  for (let i = 0; i < starCount; i++) {
    const data = starData[i];
    data.angle += 0.0005; // Velocidade uniforme para todas as estrelas

    dummy.position.x = data.radius * Math.cos(data.angle);
    dummy.position.z = data.radius * Math.sin(data.angle);
    dummy.position.y = data.yOffset + (data.radius * Math.sin(data.angle / 2)); // Movimento no eixo Y

    dummy.updateMatrix();
    instancedMesh.setMatrixAt(i, dummy.matrix);
  }
  instancedMesh.instanceMatrix.needsUpdate = true;
}

// Inicializa o mixer de animação
let mixer;

const clock = new THREE.Clock();

// Função de animação
function animate() {
  requestAnimationFrame(animate);
  animateStars();
  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);
  renderer.render(scene, camera);
}
animate();