/********************************************  
 *  Script for the Background Switcher.     *
 *  Author: Nikos-Nikitas                   *
 *  Github: https://github.com/nikosnikitas *
 ********************************************/

document.getElementById('App').addEventListener( 'load', makeUI());

    function makeUI() {

        const bg = document.querySelector('.container');

        const h1 = document.createElement('h1');
        const content = document.createTextNode("v1.0");
        h1.appendChild(content);
        h1.style = "color: var(--lsgreen); background-color: #000; border: inherit; border-radius: inherit; padding: 4px; margin:3px;";

        const btn = document.createElement('button');
        btn.innerText = "Switch Background";
        btn.setAttribute('onclick', 'changeColor()');

        const ui = [h1, btn];

        const app = document.getElementById('App');
        ui.forEach( (el) =>
            bg.insertBefore(el, app)
        );
    }
    
    function changeColor() {
        const bg = document.querySelector('.container');
        const colors = ['red', 'green', 'blue', 'yellow', 'lightseagreen', 'lightpink', '#f6f6f6'];
        let randInt = getRandomNum(0, colors.length);
        let color = colors[randInt];

        bg.setAttribute('style', `background: linear-gradient(transparent, ${color});`);
        
        const p = document.querySelector('p');
        p.innerText = 'Color: ' + color;
    }

    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);
    }
