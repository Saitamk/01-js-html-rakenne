// header
const ylätunniste = document.createElement("header");
// headerin otsikko
const otsikko = document.createElement("h1");
const node1 = document.createTextNode("Tämä on artikkelin otsikko");
otsikko.appendChild(node1);
ylätunnniste.appendChild(otsikko);
// headerin kappale
const para1 = documnt.createElement("p1");
const node2 = document.createTextNode(
  "Ensimmäinen kappale! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum corporis rem, omnis magni perspiciatis repudiandae dolor quos iusto repellendus aliquid."
);

//lisätään bodyn lapset
const runko = document.body;
runko.appendChild(ylätunniste);
