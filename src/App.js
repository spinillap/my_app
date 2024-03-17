import './App.css';
import Perfil from './componentes/Perfil';


function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
      <h1 Mis programadores favoritos en Youtube son  ></h1>
      <Perfil
        nombre='Brais Moure'
        pais='España'
        imagen='perfil-brais'
        cargo='Ingeniero de Software'
        empresa='Fundador de Moure Dev'
        resena='Ha desarrollado más de 100 aplicaciones y ha trabajado en diferentes proyectos nacionales e internacionales'
        />
      <Perfil
        nombre='Facundo Garcia Martoni'
        pais='Argentina'
        imagen='perfil-facundo'
        cargo='Profesional en Tecnología'
        empresa='Youtuber en Tecnologia'
        resena='Tiene un canal de Youtube con mas de 6.81K suscriptores, donde publica videos sobre diversos temas, incluyendo historias de hackers, explicaciones de virus informáticos y más.  También tiene una presencia activa en GitHub '
      />
      <Perfil
        nombre='Simplilearn'
        pais='India'
        imagen='perfil-simplilearn'
        cargo='Profesional en Tecnología'
        empresa='Simplilearn '
        resena='Simplilearn is the world’s #1 online Bootcamp and one of the world’s leading certification training providers. Based in San Francisco, California, and Bangalore, India, we provide training in areas where technologies and best practices are changing rapidly, and the demand for qualified candidates significantly exceeds the supply. We have trained over 3,000,000 professionals, have over 2000 qualified trainers on board, and offer over 400 courses with 40 plus global accreditations. With live instructions from leading experts, interactive labs & projects, peer-to-peer collaboration, on-demand lessons, and 24/7 learning support, we provide learners with a comprehensive curriculum at a fraction of the cost of an on-campus program.'
      />


    </div>
  </div>


  );
}


export default App;


