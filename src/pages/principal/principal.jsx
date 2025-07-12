import Header from '../../components/header/header';


function Principal() {
  return (
    <div>
      <Header />
      <main style={styles.mainContent}>
        <div id="principal" >
          <img className="principal_imagen"
                  src="/logo.png" alt="" />
        </div>
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
export default Principal
