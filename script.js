function buscarAnime() {
    const query = document.getElementById("searchInput").value;
    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=6`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
  
        data.data.forEach(anime => {
          const card = document.createElement("div");
          card.classList.add("anime");
  
          card.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <p>${anime.title}</p>
          `;
  
          resultado.appendChild(card);
        });
      })
      .catch(err => {
        console.error("Erro ao buscar anime:", err);
      });
  }
  