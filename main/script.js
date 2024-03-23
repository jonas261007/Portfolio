document.addEventListener("DOMContentLoaded", function() {
    // Seletor para o botão "Contate-me"
    var contatoButton = document.querySelector(".button");
    // Seletor para o botão do LinkedIn
    var linkedinButton = document.querySelector(".bxl-linkedinsvg-wrapper");
    // Seletor para o botão do GitHub
    var githubButton = document.querySelector(".bxl-githubsvg-wrapper");

    // Adicionando evento de clique para o botão "Contate-me"
    contatoButton.addEventListener("click", function() {
        window.location.href = "URL_DO_SEU_CONTATO";
    });

    // Adicionando evento de clique para o botão do LinkedIn
    linkedinButton.addEventListener("click", function() {
        window.location.href = "https://www.linkedin.com/in/jonas-ramos-gomes-a5ba95275/";
    });

    // Adicionando evento de clique para o botão do GitHub
    githubButton.addEventListener("click", function() {
        window.location.href = "https://github.com/jonas261007";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.button, .bxl-linkedinsvg-wrapper, .bxl-githubsvg-wrapper');
    buttons.forEach(function(button) {
        button.classList.add('animated-button');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona evento de clique para o botão "Demonstração ao vivo"
    var liveDemoButton = document.querySelector(".feature-filter1");
    liveDemoButton.addEventListener("click", function() {
        window.location.href = "URL_DA_DEMONSTRACAO_AO_VIVO";
    });
    liveDemoButton.addEventListener("click", addClickedAnimation);

    // Adiciona evento de clique para o botão "Veja no Github"
    var githubButton = document.querySelector(".value-transformer1");
    githubButton.addEventListener("click", function() {
        window.location.href = "URL_DO_REPOSITORIO_NO_GITHUB";
    });
    githubButton.addEventListener("click", addClickedAnimation);
});

// Função para adicionar animação de clique
function addClickedAnimation(event) {
    var button = event.currentTarget;
    button.classList.add("clicked-animation");
    setTimeout(function() {
        button.classList.remove("clicked-animation");
    }, 500); // Ajuste conforme necessário
}

document.getElementById('enviarButton').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const url = 'https://formspree.io/f/mbjnabzb';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
      })
    })
    .then(response => {
      if (response.ok) {
        alert('E-mail enviado com sucesso!');
        limparCampos(); // Chama a função para limpar os campos
      } else {
        throw new Error('Erro ao enviar e-mail');
      }
    })
    .catch(error => {
      console.error('Erro ao enviar e-mail:', error);
      alert('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
    });
  });

  function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('assunto').value = '';
    document.getElementById('mensagem').value = '';
  }