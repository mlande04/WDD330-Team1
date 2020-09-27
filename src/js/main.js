const ind = [{
    title: "Week 2 Point 1",
    link: "team-02-1.html",
    intro: "intro:",
    text: "Create a function that will take input from a text entry and display it to the div."
},
{
    title: "Week 2 Point 2",
    link: "team-02-2.html",
    intro: "intro:",
    text: "Create a function that will take the inputed number and sum up to the number inputed."
},
{
    title: "Week 2 Point 3",
    link: "team-02-3.html",
    intro: "intro:",
    text: "Create a 2 number entry and let the user choose a matematical operation."
    },
    {
        title: "Week 3",
        link: "week3.html",
        intro: "intro:",
        text: "Press F12 and read in the comments, you will find what it was required and in the consolle it will be displaied the results."
    }
];

ind.forEach(ind => {

    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'sec-1');
    let div3 = document.createElement('div');
    let a = document.createElement('a');
    a.setAttribute('href', ind.link);
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'link');
    let h5 = document.createElement('h5');
    let p1 = document.createElement('p');
    let a2 = document.createElement('a');
    a2.setAttribute('href', ind.link);

    h1.textContent = ind.title;
    h5.textContent = ind.intro;
    p1.textContent = ind.text;
    a2.textContent = 'See more...';

    p1.appendChild(a2);
    a.appendChild(h1);
    div2.appendChild(a);
    div2.appendChild(h5);
    div2.appendChild(p1);

    document.querySelector('div.mainBody').appendChild(div);
    document.querySelector('div.mainBody').appendChild(div2);
    document.querySelector('div.mainBody').appendChild(div3);
});