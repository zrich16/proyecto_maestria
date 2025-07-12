import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';

function RegistrarAlquiler() {
     return (
   <div>
      <Header />
      <main style={styles.mainContent}>
        <h1>Contenido extensionalquiler</h1>
      </main>
    </div>
  );
}

const styles = {
  container: {

    minHeight: 'calc(100vh - 60px)' // para compensar el header
  },
  mainContent: {
    flex: 1,
    padding: '20px'
  }
};
export default RegistrarAlquiler
