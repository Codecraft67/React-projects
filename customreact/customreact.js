const maincontainer= document.querySelector('#root');

function customRender(reactElement,maincontainer){
    const domElement = document.creat
    document.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       domElement.setAttribute(prop,reactElement.props[prop])
            
        }
        container.appendChild(domElement)
    }

const reactElement = {
    type: 'a',
    props:{
        href:'https://www.google.com',
        target: '_blank'
    },
    children: 'click me to visit the google'
}

customRender(reactElement,maincontainer)