var allH1 = document.querySelectorAll("#page2 h1");

allH1.forEach(function (e) {
  var clutter = "";
  var h1Text = e.textContent;
  var spiltText = h1Text.split("");
  spiltText.forEach(function (el) {
    clutter += `<span>${el}</span>`;
  });
  e.innerHTML = clutter;
});

gsap.to("#page2 h1 span", {
  color: "#FF4500",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top -10%",
    scrub: 1,
  },
});
