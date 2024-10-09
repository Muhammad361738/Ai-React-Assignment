function customRender(reatElement,mainContainer ){
    const domElement = document.createElement(reatElement.type)
    domElement.innerHTML = reatElement.chidren
    domElement.setAttribute('href',reatElement.props.href)
    domElement.setAttribute('target',reatElement.props.target)
   mainContainer.appendChild(domElement)
}



const reatElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target :'_blank',
    },
    chidren : 'click on me'
}
const mainContainer = document.getElementById('root')

customRender (reatElement,mainContainer)