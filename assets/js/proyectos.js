const Proyecto = [
    {
        id: 'img1',
        titulo: 'QR-Component',
        imagen: '../../assets/img/proyectos/qr.webp',
        descripcion: 'Idea sacada de FrontENd Mentor, es una tarjeta de un codigo Qr',
        tecnologias: ['html','css'],
        urlGit: 'https://github.com/alexidev23/Desafio-QR-code-component',
        urlPage: 'https://alexidev23.github.io/Desafio-QR-code-component/'
    },
    {
        id: 'img2',
        titulo: 'calculadora',
        imagen: '../../assets/img/proyectos/calculadora.webp',
        descripcion: 'Es una app de una calculadora',
        tecnologias: ['html','css','javascript'],
        urlGit: 'https://github.com/alexidev23/Calculadora',
        urlPage: 'https://alexidev23.github.io/Calculadora/'
    },
    {
        id: 'img3',
        titulo: 'Proyecto Final - Portafolio',
        imagen: '../../assets/img/proyectos/portafolioPython.webp',
        descripcion: 'Este es un proyecto final para el curso de python de Coderhouse, donde realice un porfolio y un blog, para visualizar lo que es el portafolio y el blog tienes que crear un usuario o iniciar sesion',
        tecnologias: ['python','django','bootstrap'],
        urlGit: 'https://github.com/alexidev23/proyectoFinal',
        urlPage: 'https://www.youtube.com/watch?v=pE7Im44ehVI'
    },
    {
        id: 'img4',
        titulo: 'Proyecto admin gym',
        imagen: '../../assets/img/proyectos/gymadmin.webp',
        descripcion: 'Este es un segundo proyecto realizado para reforzar los conocimientos es una wep para un gimnasio para la administracion del mismo donde puede administrar los alumnos, cursos y los profesores ',
        tecnologias: ['python','django','bootstrap'],
        urlGit: 'https://github.com/alexidev23/page-admin-gym',
        urlPage: false
    },
    {
        id: 'img5',
        titulo: 'Encriptador de texto',
        imagen: '../../assets/img/proyectos/encriptador.webp',
        descripcion: 'Este proyecto es para el programa One Oracle Next Education, es un encriptador y desencriptador de texto',
        tecnologias: ['html','css','javascript'],
        urlGit: 'https://github.com/alexidev23/Encriptador-de-texto',
        urlPage: 'https://alexidev23.github.io/Encriptador-de-texto/'
    }
]

const Proyectos = document.querySelector('div.proyectos')

const estiloProyecto = (proyecto) => {
    const tecnologias = proyecto.tecnologias.map(tecnologia => `<div class="${tecnologia}"></div>`).join('');

    const page = (pages) => {
        if (pages) {
            return (
                `<a class="urlPage" href="${proyecto.urlPage}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe"></i></a>`
            )
        }else {
            return (
                `<a style="display:none;" class="urlPage" href="${proyecto.urlPage}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe"></i></a>`
            )
        }
    }

    return (
        `<div class="tarjeta">
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}"/>
            <div class="tarjeta__content">
                <p class="tarjeta__title">${proyecto.titulo}</p>
                <p class="tarjeta__description">${proyecto.descripcion}</p>
                <div class="tecnologias">${tecnologias}</div>
                <div class="links__proyectos">
                    <a class="urlGit" href="${proyecto.urlGit}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-folder-open"></i></a>
                    ${page(proyecto.urlPage)}
                </div>
            </div>
        </div>`
    )
}

const mostrarTecnologias = (tecnologia) => {
    if (tecnologia === 'html') {
        return (
            `<div>HTML</div>`
        )
    } else if (tecnologia === 'css') {
        return (
            `<div>CSS</div>`
        )
    } else if (tecnologia === 'javascript') {
        return (
            `<div>JavaScript</div>`
        )
    } else if (tecnologia === 'python') {
        return (
            `<div>Python</div>`
        )
    } else if (tecnologia === 'django') {
        return (
            `<div>Django</div>`
        )
    } else if (tecnologia === 'boostrap') {
        return (
            `<div>bootstrap</div>`
        )
    }
}


const mostrarProyectyos = (proyecto) => {
    proyecto.forEach(element => {
        Proyectos.innerHTML += estiloProyecto(element)
    });
}

mostrarProyectyos(Proyecto)
