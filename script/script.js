// Existing navbar code
<nav class="navbar navbar-expand-lg fixed-top navbarScroll">
    <div class="container">
        <a class="navbar-brand" href="#">Brad</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    </div>
</nav>

// New code for clickable cards
document.addEventListener('DOMContentLoaded', function() {
  // Select all the cards with the 'servicesText' class
  var cards = document.querySelectorAll('.servicesText');

  // Add a click event listener to each card
  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      // Retrieve the GitHub URL from the data attribute
      var githubUrl = this.getAttribute('data-github-url');

      // Redirect to the GitHub URL
      if (githubUrl) {
        window.location.href = githubUrl;
      }
    });
  });
});
