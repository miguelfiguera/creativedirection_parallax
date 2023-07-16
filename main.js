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
      "We are a creativedirection.xyz - a multimedia creative agency and design studio in Brooklyn NY.",
  },
  {
    id: 3,
    type: "client",
    content:
      "Nice to meet y'all! We are looking for someone to help generate some more revenue with a new marketing strategy.",
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
      "We want something that feels more fresh and relatable compared to what we have previously been doing…",
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
      "We offer a multitude of creative services ranging from Creative Direction, to Asset Design and Content Management.",
  },
  {
    id: 10,
    type: "client",
    content: "I would love to learn more. What are the next steps here?",
  },
  {
    id: 11,
    type: "agency",
    content: "Just send us an email at ",
    content2: " so we can discuss the scope of your project.",
    link: "hello@creativedirection.xyz",
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
      "You can take a look at our website and try to get some creative juices flowing... A coffee and a good sandwich always gets us in the mood :)",
  },
  {
    id: 17,
    type: "agency",
    content: "We look forward to helping with your creative direction. ",
    fa: "fa-solid fa-circle fa-xs mx-1",
  },
];

const screenSize = window.innerWidth;

gsap.registerPlugin(ScrollTrigger);

const addOne = () => {
  let x = document.getElementById("one");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[0].content;
  x.classList.remove("hidden");
};
const addTwo = () => {
  let x = document.getElementById("two");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[1].content;
  x.classList.remove("hidden");
};
const addThree = () => {
  let x = document.getElementById("three");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[2].content;
  x.classList.remove("hidden");
};
const addFour = () => {
  let x = document.getElementById("four");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[3].content;
  x.classList.remove("hidden");
};
const addFive = () => {
  let x = document.getElementById("five");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[4].content;
  x.classList.remove("hidden");
};
const addSix = () => {
  let x = document.getElementById("six");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[5].content;
  x.classList.remove("hidden");
};
const addSeven = () => {
  let x = document.getElementById("seven");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[6].content;
  x.classList.remove("hidden");
};
const addEight = () => {
  let x = document.getElementById("eight");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[7].content;
  x.classList.remove("hidden");
};
const addNein = () => {
  let x = document.getElementById("nein");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[8].content;
  x.classList.remove("hidden");
};
const addTen = () => {
  let x = document.getElementById("ten");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[9].content;
  x.classList.remove("hidden");
};
const addEleven = () => {
  let x = document.getElementById("eleven");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[10].content;
  x.classList.remove("hidden");
};
const addTwelve = () => {
  let x = document.getElementById("twelve");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p2=document.createElement("p")
  p.classList.add("my-0");
  x.appendChild(p);
  a = document.createElement("a");
  a.href = "mailto:hello@creativedirection.xyz";
  a.innerText = "hello@creativedirection.xyz";
  a.classList.add("text-light");
  p.innerText = messages[11].content;
  p2.innerText=messages[11].content2
  p.appendChild(a);
  x.appendChild(p2)
  x.classList.remove("hidden");
  x.style.display='inline'
};
const addThirteen = () => {
  let x = document.getElementById("thirteen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[12].content;
  x.remove()
 // x.classList.remove("hidden");
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
  x.classList.remove("hidden");
};
const addFifteen = () => {
  let x = document.getElementById("fifteen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[14].content;
  x.classList.remove("hidden");
};
const addSixteen = () => {
  let x = document.getElementById("sixteen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[15].content;
  x.classList.remove("hidden");
};
const addSeventeen = () => {
  let x = document.getElementById("seventeen");
  let y = x.querySelector("span");
  y.remove();
  p = document.createElement("p");
  p.classList.add("my-0");
  x.appendChild(p);
  p.innerText = messages[16].content;
  x.classList.remove("hidden");
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
  i.classList.add("fa-solid");
  i.classList.add("fa-circle-up");
  i.classList.add("fa-lg");
  p.appendChild(i);
  x.classList.remove("hidden");
};

//GSAP STUFF

function animation(string) {
  gsap.to(string, {
    opacity: 0.5,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    delay: 0.3,
  });
}

const markers1 = {
  visibility: true,
  startColor: "blue",
  endColor: "orange",
  fontSize: "18px",
  fontWeight: "bold",
  indent: 20,
};
const markers2 = {
  visibility: true,
  startColor: "green",
  endColor: "red",
  fontSize: "18px",
  fontWeight: "bold",
  indent: 20,
};

function theSize(viewportSize) {
  let distanceFromTop = "";

  if (viewportSize >= 550) {
    distanceFromTop = "50%";
  } else if (viewportSize <= 549 && viewportSize >= 450) {
    distanceFromTop = "35%";
  } else {
    distanceFromTop = "30%";
  }
  console.log(distanceFromTop);
  return distanceFromTop;
}

const percentage = theSize(screenSize);

let tl = gsap.timeline();
animation(".two");

tl.to("#two", {
  scrollTrigger: {
    trigger: "#two",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",

    onEnter: function () {
      ScrollTrigger.refresh(), console.log("REFRESHED!");
    },

    onLeave: function (self) {
      self.disable();
    },
  },
});

animation(".three");

tl.to("#three", {
  scrollTrigger: {
    trigger: "#three",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addTwo,
  },
});

animation(".four");

tl.to("#four", {
  scrollTrigger: {
    trigger: "#four",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addThree,
  },
});




animation(".five");

tl.to("#five", {
  scrollTrigger: {
    trigger: "#five",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addFour,
  },
});



animation(".six");
tl.to("#six", {
  scrollTrigger: {
    trigger: "#six",
    start: "top " + percentage,
    end: `bottom ` + percentage,
    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addFive,
  },
});



animation(".seven");

tl.to("#seven", {
  scrollTrigger: {
    trigger: "#seven",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addSix,
  },
});

animation(".eight");

tl.to("#eight", {
  scrollTrigger: {
    trigger: "#eight",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addSeven,
  },
});


tl.to(".nein", {
  scrollTrigger: {
    trigger: ".nein",
    onEnter: function () {
      ScrollTrigger.refresh(), console.log("REFRESHED! At nein");
    },
  },
});

animation(".nein");

tl.to("#nein", {
  scrollTrigger: {
    trigger: "#nein",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addEight,
  },
});



animation(".ten");

tl.to("#ten", {
  scrollTrigger: {
    trigger: "#ten",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addNein,
  },
});


tl.to(".eleven", {
  scrollTrigger: {
    trigger: ".eleven",
    onEnter: function () {
      ScrollTrigger.refresh(), console.log("REFRESHED! At Eleven");
    },
  },
});

animation(".eleven");

tl.to("#eleven", {
  scrollTrigger: {
    trigger: "#eleven",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addTen,
  },
});

animation(".twelve");

tl.to("#twelve", {
  scrollTrigger: {
    trigger: "#twelve",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addEleven,
  },
});

tl.to(".twelve", {
  scrollTrigger: {
    trigger: ".twelve",
    onEnter: function () {
      ScrollTrigger.refresh(), console.log("REFRESHED! At twelve");
    },
  },
});

animation(".thirteen");
tl.to("#thirteen", {
  scrollTrigger: {
    trigger: "#thirteen",
    start: "top " + percentage,
    end: `bottom ` + percentage,

   // toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addTwelve,
  },
});



animation(".fourteen");

tl.to("#fourteen", {
  scrollTrigger: {
    trigger: "#fourteen",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addThirteen,
  },
});
animation(".fifteen");

tl.to(".fifteen", {
  scrollTrigger: {
    trigger: ".fifteen",
    onEnter: function () {
      ScrollTrigger.refresh(), console.log("REFRESHED! At fifteen");
    },
  },
});


tl.to("#fifteen", {
  scrollTrigger: {
    trigger: "#fifteen",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addFourteen,
  },
});

tl.to(".sixteen", {
  scrollTrigger: {
    trigger: ".sixteen",
    onEnter: function () {
      ScrollTrigger.refresh(), console.log("REFRESHED! At sixteen");
    },
  },
})


animation(".sixteen");

tl.to("#sixteen", {
  scrollTrigger: {
    trigger: "#sixteen",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addFifteen,
  },
});
animation(".seventeen");

tl.to(".seventeen", {
  scrollTrigger: {
    trigger: ".seventeen",
    onEnter: function () {
      ScrollTrigger.refresh(), console.log("REFRESHED! At seventeen");
    },
  },

});

tl.to("#seventeen", {
  scrollTrigger: {
    trigger: "#seventeen",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addSixteen,
  },
});
animation(".eighteen");

tl.to("#eighteen", {
  scrollTrigger: {
    trigger: "#eighteen",
    start: "top " + percentage,
    end: `bottom ` + percentage,

    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addSeventeen,
  },
});
tl.to("#finalitico", {
  scrollTrigger: {
    trigger: "#finalitico",
    start: "top " + percentage,
    end: "bottom " + percentage,
    toggleClass: "hidden",
    

    onLeave: function (self) {
      self.disable();
    },

    onEnter: addEighteen,
  },
});
