// About.js

import Image from 'next/image';

export default function About() {
  return (
    <div id="sectionTwo">
      <div className="team-section">
        <div className="team-member">
          <Image className="rounded-full w-96 h-96 object-cover" src="/JBS.png" width={600} height={500} />
        </div>
        <div className="member-description">
          <p className="about-text">José Benítez, cofundador de Ambienta, es un estudiante universitario de cuarto año en la Universidad de Notre Dame, donde se encuentra cursando su bachillerato en Ciencias de la Computación. Su apasionante interés por el mundo de los negocios, la ingeniería, las matemáticas y la resolución de problemas lo ha impulsado a embarcarse en un proyecto aún más ambicioso: la creación de una empresa que fusiona todas estas facetas y, sobre todo, se enfoca en satisfacer las necesidades artísticas de sus clientes.</p>
        </div>
        <div className="team-member">
          <Image className="rounded-full w-96 h-96 object-cover" src="/LBC.png" width={500} height={500} />
        </div>
        <div className="member-description">
          <p className="about-text">Lucas Barreto, cofundador de Ambienta, tiene una formación en ingeniería mecánica y estudios en energía de la Universidad de Notre Dame. Lucas combina su pasión por la estética y la funcionalidad con un enfoque sostenible en cada proyecto. Su conocimiento en ingeniería mecánica le proporciona una base sólida para abordar los desafíos técnicos del diseño. Inspirado por su abuelo, Alfredo Cubiñá, artista y su madre, Marta Cubiñá, arquitecta, Lucas comprende la importancia de combinar la belleza y la eficiencia en cada espacio. Además, como defensor de la sostenibilidad y la eficiencia energética, Lucas guía la empresa hacia prácticas y materiales eco-amigables, reduciendo el impacto ambiental y promoviendo la responsabilidad ecológica.</p>
        </div>
        </div>
    </div>
  );
}
