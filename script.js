// 1. Select the buttons and the description paragraph
const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
const btnC = document.getElementById('btnC');
const btnD = document.getElementById('btnD');
const btnE = document.getElementById('btnE');
const descriptionDisplay = document.getElementById('descriptionDisplay');

// 2. Add event listener for Button A
btnA.addEventListener('click', function() {
  descriptionDisplay.textContent = 'The Japanese language has various layers of formalities and informalities unlike English. Depending on the situations, you need to be formal, informal or somewhere between. Just translate English texts on the CTA button and you might see a funny face on Japanese users visiting your site.';
});

// 3. Add event listener for Button B
btnB.addEventListener('click', function() {
  descriptionDisplay.textContent =
  'Whether website article, copy or social media content, your content needs to be adjusted according to the audience you are speaking to. That’s even more important if you are localizing content into Japanese whose cultural norms might be different from your culture.  ';
});

// 4. Add event listener for Button C
btnC.addEventListener('click', function() {
  descriptionDisplay.textContent = 'I will create beautiful responsive websites with localization in mind.';
});

// 5. Add event listener for Button D
btnD.addEventListener('click', function() {
  descriptionDisplay.textContent = 'I will do copywriting in Japanese from scdtach';
});

// 5. Add event listener for Button E
btnE.addEventListener('click', function() {
  descriptionDisplay.textContent = 'I will do copywriting in Japanese from scdtach';
});



// Button active state (What I Do section)

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".skill-tag > button")

  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      buttons.forEach((btn) => btn.classList.remove("active"))

      button.classList.add("active")
    })
  })
})
