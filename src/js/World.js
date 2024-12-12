// File: js/World.js

// Iniciar la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Configurar tamaño del renderizador y añadirlo al DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.World_3D').appendChild(renderer.domElement);

// Crear un cargador de texturas
const textureLoader = new THREE.TextureLoader();

// Cargar la textura y aplicarla al materialjpg
const texture = textureLoader.load('js/img/world_texture.jpg');
const material = new THREE.MeshStandardMaterial({ map: texture });

// Crear una esfera con la textura y añadirla a la escena
const geometry = new THREE.SphereGeometry(3, 32, 32);
const sphere = new THREE.Mesh(geometry, material);

// Posicionar la esfera en el fondo
sphere.position.z = -20;
scene.add(sphere);

// Agregar luces a la escena
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Posicionar la cámara para una mejor vista
camera.position.z = 0;

// Animación de la escena
function animate() {
    requestAnimationFrame(animate);

    // Hacer que la esfera gire
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Ajustar el tamaño del renderizador en tiempo real si la ventana cambia de tamaño
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
