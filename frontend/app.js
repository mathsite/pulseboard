async function loadStatus() {
  const res = await fetch("http://localhost:3000/api/status");
  const services = await res.json();

  const root = document.getElementById("services");
  root.innerHTML = "";

  services.forEach(s => {
    const div = document.createElement("div");
    div.className = `service ${s.status}`;
    div.textContent = `${s.name}: ${s.status.toUpperCase()}`;
    root.appendChild(div);
  });
}

setInterval(loadStatus, 5000);
loadStatus();
