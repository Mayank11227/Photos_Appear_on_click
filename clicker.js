const body = document.querySelector('body');

body.addEventListener('click',(e)=>{

    console.log(e.clientX,e.clientY)
    const circleelement = document.createElement('div');
    circleelement.classList.add('circle');
    const img = document.createElement('img');
    img.src = 'Garudaa.jpeg';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    circleelement.appendChild(img);


    const color = ['red','blue','orange','pink','green','purpal']
    circleelement.style.background = color[Math.floor(Math.random()*6)];

    circleelement.style.top = `${e.clientY-28}px`;
    circleelement.style.left = `${e.clientX-28}px`;



    body.append(circleelement);
      console.log(body);

      setTimeout(()=>{
        circleelement.remove();
      },5000);

});