const messages = [
  {
    id: 0,
    type: "agency",
    content: "Hello...",
  },
  {
    id: 1,
    type: "client",
    content: "Hi...",
  },
  {
    id: 2,
    type: "agency",
    content:
      "We are a creativedirection.xyz - a multimedia creative agency and design studio in Brooklyn Ny.",
  },
  {
    id: 3,
    type: "client",
    content:
      "Nice to meet y'all! Business has been great but we are looking for someone to help generate some more revenue with a new marketing strategy.",
  },
  {
    id: 4,
    type: "agency",
    content: "That sounds great.",
  },
  {
    id: 5,
    type: "agency",
    content:
      "Before we begin I want to ask, do you already have a vision for your brand?",
  },
  {
    id: 6,
    type: "client",
    content: "We have a few ideas but are looking for a new direction!",
  },
  {
    id: 7,
    type: "client",
    content:
      "We were thinking of something that feels more fresh and relatable compared to what we previously had been doing while still remaining true to our core company values.",
  },
  {
    id: 8,
    type: "agency",
    content:
      "We would happy to take a look at your current strategy and make some suggestions...",
  },
  {
    id: 9,
    type: "agency",
    content:
      "We offer a multitude of creative services ranging from Creative Direction to Asset Design and Content Management.",
  },
  {
    id: 10,
    type: "client",
    content: "I would love to learn more. What are the next steps here?",
  },
  {
    id: 11,
    type: "agency",
    content: "Just follow this link to sign up for a call with our team: ",
    link: "www.calendry.com/creativedirectionxyz/30minute-meeting",
  },
  {
    id: 12,
    type: "agency",
    content:
      "We can then discuss the scope of your project and get some ideas flowing!",
  },
  {
    id: 13,
    type: "client",
    content: "Done, thank you!",
  },
  {
    id: 14,
    type: "agency",
    content: "Of course, thank you for taking the time to check us out.",
  },
  {
    id: 15,
    type: "client",
    content:
      "Our team is very excited for the call. Is there anything we can do to prepare?",
  },
  {
    id: 16,
    type: "agency",
    content:
      "Nope, thats it. Take a look at our website and try to get some creative juices flowing... A coffee and a good sandwich always gets us in the mood :)",
  },
  {
    id: 17,
    type: "agency",
    content: "We look forward to helping with your creative direction. ",
    fa: "fa-solid fa-circle fa-xs mx-1",
  },
];

gsap.registerPlugin(ScrollTrigger);

const addOne = () => {
  let x = document.getElementById("one");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[0].content;
};
const addTwo = () => {
  let x = document.getElementById("two");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[1].content;
};
const addThree = () => {
  let x = document.getElementById("three");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[2].content;
};
const addFour = () => {
  let x = document.getElementById("four");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[3].content;
};
const addFive = () => {
  let x = document.getElementById("five");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[4].content;
};
const addSix = () => {
  let x = document.getElementById("six");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[5].content;
};
const addSeven = () => {
  let x = document.getElementById("seven");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[6].content;
};
const addEight = () => {
  let x = document.getElementById("eight");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[7].content;
};
const addNein = () => {
  let x = document.getElementById("nein");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[8].content;
};
const addTen = () => {
  let x = document.getElementById("ten");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[9].content;
};
const addEleven = () => {
  let x = document.getElementById("eleven");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[10].content;
};
const addTwelve = () => {
  let x = document.getElementById("twelve");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  a = document.createElement("a");
  a.href = "calendry.com/creativedirectionxyz/30minute-meeting";
  a.innerText = " calendry.com/creativedirectionxyz";
  a.classList.add("text-light");
  p.innerText = messages[11].content;
  p.appendChild(a);
};
const addThirteen = () => {
  let x = document.getElementById("thirteen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[12].content;
};
const addFourteen = () => {
  let x = document.getElementById("fourteen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[13].content;
  s = document.createElement("span");
  p.appendChild(s);
  q = document.createElement("img");
  q.src = "thanks.png";
  q.alt = "hands giving thanks";
  s.appendChild(q);
  w = document.createElement("img");
  w.src = "thanks.png";
  w.alt = "hands giving thanks";
  s.appendChild(w);
  e = document.createElement("img");
  e.src = "thanks.png";
  e.alt = "hands giving thanks";
  s.appendChild(e);
};
const addFifteen = () => {
  let x = document.getElementById("fifteen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[14].content;
};
const addSixteen = () => {
  let x = document.getElementById("sixteen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[15].content;
};
const addSeventeen = () => {
  let x = document.getElementById("seventeen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[16].content;
};
const addEighteen = () => {
  let x = document.getElementById("eighteen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[17].content;
  i = document.createElement("i");
  i.classList.add("fa-solid")
  i.classList.add("fa-circle-up")
  i.classList.add("fa-lg");
  p.appendChild(i);
};

function init() {
  gsap.to(".one", {
    opacity: 0.5,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    delay: 0.3,
  });

  gsap.to("#one", {
    scrollTrigger: {
      trigger: "#one",
      start: "top center",
      end: "bottom center",
      toggleClass: "hidden",
      scrub: true,
      },
  });

  gsap.to(".two", {
    opacity: 0.5,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    delay: 0.3,
  });

  gsap.to("#two", {
    scrollTrigger: {
      trigger: "#two",
      start: "top+=50 center",
      end: "bottom+=50 center",
      toggleClass: "hidden",
      onEnter: addOne,
      scrub: true,
    },
  });

  gsap.to(".three", {
    opacity: 0.5,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    delay: 0.3,
  });
  gsap.to("#three", {
    scrollTrigger: {
      trigger: "#three",
      start: "top+=50 center",
      end: "bottom+=50 center",
      toggleClass: "hidden",
      onEnter: addTwo,
      scrub: true,
    },
  });
}
gsap.to(".four", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});

gsap.to("#four", {
  scrollTrigger: {
    trigger: "#four",
    start: "top+=50 center",
    end: "bottom+=50 center",
    toggleClass: "hidden",
    onEnter: addThree,
    scrub: true,
  },
});
gsap.to(".five", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#five", {
  scrollTrigger: {
    trigger: "#five",
    start: "top+=50 center",
    end: "bottom+=50 center",
    toggleClass: "hidden",
    onEnter: addFour,
    scrub: true,
  },
});
gsap.to(".six", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#six", {
  scrollTrigger: {
    trigger: "#six",
    start: "top+=50 center",
    end: "bottom+=50 center",
    toggleClass: "hidden",
    onEnter: addFive,
    scrub: true,
  },
});
gsap.to(".seven", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#seven", {
  scrollTrigger: {
    trigger: "#seven",
    start: "top+=50 center",
    end: "bottom+=50 center",
    toggleClass: "hidden",
    onEnter: addSix,
    scrub: true,
  },
});
gsap.to(".eight", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#eight", {
  scrollTrigger: {
    trigger: "#eight",
    start: "top+=90 center",
    end: "bottom+=90 center",
    toggleClass: "hidden",
    onEnter: addSeven,
    scrub: true,
  },
});
gsap.to(".nein", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#nein", {
  scrollTrigger: {
    trigger: "#nein",
    start: "top+=70 center",
    end: "bottom+=70 center",
    toggleClass: "hidden",
    onEnter: addEight,
    scrub: true,
  },
});
gsap.to(".ten", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#ten", {
  scrollTrigger: {
    trigger: "#ten",
    start: "top+=180 center",
    end: "bottom+=180 center",
    toggleClass: "hidden",
    onEnter: addNein,
    scrub: true,
  },
});
gsap.to(".eleven", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#eleven", {
  scrollTrigger: {
    trigger: "#eleven",
    start: "top+=190 center",
    end: "bottom+=190 center",
    toggleClass: "hidden",
    onEnter: addTen,
    scrub: true,
  },
});
gsap.to(".twelve", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#twelve", {
  scrollTrigger: {
    trigger: "#twelve",
    start: "top+=230 center",
    end: "bottom+=230 center",
    toggleClass: "hidden",
    onEnter: addEleven,
    scrub: true,
  },
});
gsap.to(".thirteen", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#thirteen", {
  scrollTrigger: {
    trigger: "#thirteen",
    start: "top+=200 center",
    end: "bottom+=200 center",
    toggleClass: "hidden",
    onEnter: addTwelve,
    scrub: true,
  },
});
gsap.to(".fourteen", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#fourteen", {
  scrollTrigger: {
    trigger: "#fourteen",
    start: "top+=280 center",
    end: "bottom+=280 center",
    toggleClass: "hidden",
    onEnter: addThirteen,
    scrub: true,
  },
});
gsap.to(".fifteen", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#fifteen", {
  scrollTrigger: {
    trigger: "#fifteen",
    start: "top+=280 center",
    end: "bottom+=280 center",
    toggleClass: "hidden",
    onEnter: addFourteen,
    scrub: true,
  },
});
gsap.to(".sixteen", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#sixteen", {
  scrollTrigger: {
    trigger: "#sixteen",
    start: "top+=280 center",
    end: "bottom+=280 center",
    toggleClass: "hidden",
    onEnter: addFifteen,
    scrub: true,
  },
});
gsap.to(".seventeen", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#seventeen", {
  scrollTrigger: {
    trigger: "#seventeen",
    start: "top+=280 center",
    end: "bottom+=280 center",
    toggleClass: "hidden",
    onEnter: addSixteen,
    scrub: true,
  },
});
gsap.to(".eighteen", {
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  delay: 0.3,
});
gsap.to("#eighteen", {
  scrollTrigger: {
    trigger: "#eighteen",
    start: "top+=400 center",
    end: "bottom+=400 center",
    toggleClass: "hidden",
    onEnter: addSeventeen,
    scrub: true,
  },
});
gsap.to("#finalitico", {
  scrollTrigger: {
    trigger: "#finalitico",
    start: "top+=100 center",
    end: "bottom+=100 center",
    toggleClass: "hidden",
    onEnter: addEighteen,
    scrub: true,
  },
});

window.addEventListener("load", function () {
  init();
});
