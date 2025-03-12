// network.js

// --------------------------
// Scene, Camera, and Renderer Setup
// --------------------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // White background

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --------------------------
// Parameters and Data Structures
// --------------------------
const NODE_COUNT = 300;           // Increase number of nodes
const DISTANCE_THRESHOLD = 30;    // Maximum distance to draw an edge
const SPEED = 0.02;               // Base node speed
const MAX_SPEED = 0.05;           // Maximum allowed speed for a node
const BOUNDARY = 150;             // Space boundary for nodes (for wrap-around)

// Arrays to hold the nodes and their velocities
const nodes = [];
const velocities = [];

// --------------------------
// Create Nodes (Dark Blue)
// --------------------------
const nodeGeometry = new THREE.SphereGeometry(0.5, 8, 8);
const nodeMaterial = new THREE.MeshBasicMaterial({
  color: 0x2a4d6a,  // Dark Blue
  transparent: true,
  opacity: 0.2
});

const nodeGroup = new THREE.Group();
scene.add(nodeGroup);

for (let i = 0; i < NODE_COUNT; i++) {
  const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
  nodeMesh.position.set(
    (Math.random() - 0.5) * BOUNDARY * 2,
    (Math.random() - 0.5) * BOUNDARY * 2,
    (Math.random() - 0.5) * BOUNDARY * 2
  );
  nodeGroup.add(nodeMesh);
  nodes.push(nodeMesh);
  velocities.push(new THREE.Vector3(
    (Math.random() - 0.5) * SPEED,
    (Math.random() - 0.5) * SPEED,
    (Math.random() - 0.5) * SPEED
  ));
}

// --------------------------
// Line Material (Light Green)
// --------------------------
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x4b86b4,  // Light Green
  transparent: true,
  opacity: 0.2
});

let lineGeometry = null;
let lineMesh = null;

// --------------------------
// Function to Update Connecting Lines
// --------------------------
function updateLines() {
  // Remove and dispose the previous line mesh if it exists
  if (lineMesh) {
    scene.remove(lineMesh);
    lineGeometry.dispose();
  }
  
  const linePositions = [];
  
  // For each pair of nodes, connect them if they are within the threshold distance
  for (let i = 0; i < NODE_COUNT; i++) {
    for (let j = i + 1; j < NODE_COUNT; j++) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];
      const dist = nodeA.position.distanceTo(nodeB.position);
      
      if (dist < DISTANCE_THRESHOLD) {
        linePositions.push(
          nodeA.position.x, nodeA.position.y, nodeA.position.z,
          nodeB.position.x, nodeB.position.y, nodeB.position.z
        );
      }
    }
  }
  
  // Build new geometry for the lines
  lineGeometry = new THREE.BufferGeometry();
  const linePosArray = new Float32Array(linePositions);
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePosArray, 3));
  
  // Create and add the new line mesh
  lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lineMesh);
}

// --------------------------
// Mouse Interaction Setup
// --------------------------
const mouse = new THREE.Vector2(0, 0);
const mouseWorld = new THREE.Vector3();
window.addEventListener('mousemove', (event) => {
  // Normalize mouse coordinates to [-1, 1]
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  // Convert normalized coordinates to approximate world coordinates.
  // Adjust multiplier as needed to suit your scene scale.
  mouseWorld.set(mouse.x * 50, mouse.y * 50, 0);
});

// --------------------------
// Animation Loop
// --------------------------
function animate() {
  requestAnimationFrame(animate);
  
  // Constants for mouse influence
  const MOUSE_EFFECT_RADIUS = 30; // Nodes within this radius are affected
  const MOUSE_FORCE = 0.1;       // Strength of the repulsion effect
  
  // Update each node's position
  for (let i = 0; i < NODE_COUNT; i++) {
    const nodePos = nodes[i].position;
    
    // Calculate 2D distance (ignoring z) from node to mouseWorld position
    const dx = nodePos.x - mouseWorld.x;
    const dy = nodePos.y - mouseWorld.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // If the node is close enough, apply a repulsion force away from the mouse
    if (distance < MOUSE_EFFECT_RADIUS && distance > 0.1) {
      const force = (MOUSE_EFFECT_RADIUS - distance) * MOUSE_FORCE;
      nodePos.x += (dx / distance) * force;
      nodePos.y += (dy / distance) * force;
    }
    
    // Add a slight random variation to create a "swarm" effect
    velocities[i].x += (Math.random() - 0.5) * 0.01;
    velocities[i].y += (Math.random() - 0.5) * 0.01;
    velocities[i].z += (Math.random() - 0.5) * 0.01;
    
    // Clamp the velocity so it doesn't exceed MAX_SPEED
    velocities[i].clampLength(0, MAX_SPEED);
    
    // Update the node's position with its velocity
    nodePos.add(velocities[i]);
    
    // Wrap-around logic: if a node leaves one boundary, it reappears on the opposite side
    if (nodePos.x > BOUNDARY) nodePos.x = -BOUNDARY;
    if (nodePos.x < -BOUNDARY) nodePos.x = BOUNDARY;
    if (nodePos.y > BOUNDARY) nodePos.y = -BOUNDARY;
    if (nodePos.y < -BOUNDARY) nodePos.y = BOUNDARY;
    if (nodePos.z > BOUNDARY) nodePos.z = -BOUNDARY;
    if (nodePos.z < -BOUNDARY) nodePos.z = BOUNDARY;
  }
  
  // Update the connecting lines based on new node positions
  updateLines();
  
  // Render the updated scene
  renderer.render(scene, camera);
}

animate();

// --------------------------
// Resize Handling
// --------------------------
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
