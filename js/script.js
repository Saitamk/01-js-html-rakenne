// 1.1 header
const ylatunniste = document.createElement("header");
ylatunniste.className = "ylätunniste";
// 1.1  headerin otsikko
const otsikko = document.createElement("h1");
const node1 = document.createTextNode("Tämä on artikkelin otsikko");
otsikko.appendChild(node1);
// 1.2 headerin kappale
const para1 = document.createElement("p1");
const node2 = document.createTextNode(
  "Ensimmäinen kappale! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum corporis rem, omnis magni perspiciatis repudiandae dolor quos iusto repellendus aliquid."
);
para1.appendChild(node2);

// 1.3 lisätään headerin lapset
ylatunniste.appendChild(otsikko);
ylatunniste.appendChild(para1);

// 2 section
const osa = document.createElement("section");
osa.setAttribute("id", "rinnakkain");
// 2.1 sectionin kappale
const para2 = document.createElement("p2");
const node3 = document.createTextNode(
  "Toinen kappale! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum corporis rem, omnis magni perspiciatis repudiandae dolor quos iusto repellendus aliquid."
);
para2.appendChild(node3);

// 2.2 sectionin kuva
const raami = document.createElement("figure");
raami.setAttribute("id", "rinnakkain");
const kuva = document.createElement("img");
kuva.src = "./img/javascript_machine.gif";
raami.appendChild(kuva);

// 2.3 lisätään sectionin lapset
osa.appendChild(para2);
osa.appendChild(raami);

// 3 footer
const alatunniste = document.createElement("footer");

// 3.1 footerin kappale
const para3 = document.createElement("p");
const node4 = document.createTextNode("\xA9 copyright 2024 Matias Kivimäki");
para3.appendChild(node4);

// 3.2 lisätään footerin lapset

alatunniste.appendChild(para3);

// 4 lisätään bodyn lapset
const runko = document.body;
runko.appendChild(ylatunniste);
runko.appendChild(osa);
runko.appendChild(alatunniste);
