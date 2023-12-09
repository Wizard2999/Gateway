document.addEventListener('DOMContentLoaded', function () {
    const accordionContainer = document.getElementById('accordionContainer');
    
    const accordionData = [
        {
            "title": "Compromiso",
            "intro": "En Gateway I.T, nos enorgullece estar comprometidos con el desarrollo sostenible y apoyamos los Objetivos de Desarrollo Sostenible (ODS) a través de nuestras soluciones tecnológicas. Nos esforzamos por mejorar no solo nuestros productos y servicios, sino también la región en la que operamos.",
            "text": "Nuestro trabajo no termina cuando entregamos un proyecto. Creemos que el éxito se logra a través de un buen despegue y una gestión continua. Por lo tanto, nos aseguramos de acompañar a nuestros clientes durante el lanzamiento de sus proyectos y soluciones tecnológicas, redirigiendo y aportando para que su estrategia se convierta en una solución exitosa que contribuya a la consecución de sus objetivos. En Gateway I.T, estamos comprometidos con la satisfacción del cliente y la mejora continua. Siempre buscamos nuevas formas de innovar y mejorar nuestras soluciones para asegurarnos de estar a la vanguardia de la tecnología y proporcionar los mejores resultados para nuestros clientes y la comunidad."
        },
        {
            "title": "Misión",
            "intro": "Nuestra misión en Gateway I.T es diseñar e implementar proyectos de Investigación, Desarrollo e Innovación (i+D+i) y soluciones integrales que permitan optimizar los procesos de nuestros clientes y de la región en la que operamos.",
            "text": "Estamos comprometidos con el desarrollo sostenible y la mejora continua, por lo que nos esforzamos por brindar soluciones tecnológicas que garanticen el desarrollo y la prosperidad a largo plazo. En Gateway I.T, creemos que la clave del éxito radica en la colaboración y el trabajo en equipo. Por lo tanto, trabajamos de la mano con nuestros clientes para comprender sus necesidades específicas y brindar soluciones personalizadas que se adapten a sus objetivos y requisitos. Nuestro enfoque integral nos permite ofrecer soluciones completas que abordan no solo los aspectos tecnológicos, sino también los procesos, las personas y la cultura de la organización. En resumen, en Gateway I.T estamos dedicados a proporcionar soluciones de alta calidad que optimicen los procesos y garanticen el desarrollo de nuestros clientes y la región en general, a través de la innovación, la colaboración y el compromiso con la sostenibilidad."
        },
        {
            "title": "Visión",
            "intro": "En Gateway I.T, nuestra visión es convertirnos en el 2025 en una empresa y centro de desarrollo tecnológico líder reconocida a nivel nacional e internacional en la generación de soluciones y proyectos de ciencia, tecnología e innovación en Colombia.",
            "text": "Nos esforzamos por ser una empresa innovadora que siempre busca estar a la vanguardia de las tendencias tecnológicas y que está comprometida con la mejora continua. Nuestra visión es ser un líder en la generación de soluciones de alta calidad que aborden los desafíos más críticos de nuestros clientes y de la sociedad en general. Estamos comprometidos con la sostenibilidad y la responsabilidad social, y trabajamos para garantizar que nuestras soluciones sean beneficiosas tanto para nuestros clientes como para la comunidad en general. En Gateway I.T, nos enorgullece ser una empresa que genera soluciones de impacto y que es reconocida por su excelencia en la industria de tecnología e innovación. Continuaremos trabajando arduamente para alcanzar nuestros objetivos y lograr nuestra visión de ser una empresa líder en el mercado nacional e internacional en el campo de la tecnología y la innovación."
        }
    ];

    accordionData.forEach((content, index) => {
        const section = document.createElement('section');
        section.className = 'accordion';

        section.innerHTML = `
            <input type="checkbox" name="collapse${index}" id="handle${index}" />
            <h2 class="handle">
                <label for="handle${index}">${content.title}</label>
            </h2>
            <div class="content">
                <p>${content.intro}</p>
                <p>${content.text}</p>
            </div>
        `;

        accordionContainer.appendChild(section);
    });
});
