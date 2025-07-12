import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';

function About() {
  return (
    <div>
      <Header />
      <main style={styles.mainContent}>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          {/* <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" /> */}
          <img src="/1044091.jpg?ixlib==rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            ></div>
          </div>
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Rich Develop</h2>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col-reverse gap-1">

                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/icons8-www-64.png" alt="Bonnie image" />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"><a href='https://rich-develop.com/' target='_blank'>www.rich-develop.com</a> </h5>
                      <div className="flex mt-4 md:mt-6">
                      </div>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col-reverse gap-1">
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">


                      <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        <ul className="py-2" aria-labelledby="dropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/icono-linked.jpg" alt="Bonnie image" />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"><a href='https://mx.linkedin.com/' target='_blank'> Linkedin</a> </h5>

                      <div className="flex mt-4 md:mt-6">
                      </div>
                    </div>
                  </div>


                </div>
                <div className="flex flex-col-reverse gap-1">

                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">


                      <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        <ul className="py-2" aria-labelledby="dropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/icons8-whatsapp-94.png" alt="Bonnie image" />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">5585322377</h5>
                      <div className="flex mt-4 md:mt-6">
                      </div>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col-reverse gap-1">

                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">


                      <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        <ul className="py-2" aria-labelledby="dropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/icons8-@-94.png" alt="Bonnie image" />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">contacto@rch-develop.com</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400"></span>
                      <div className="flex mt-4 md:mt-6">
                      </div>
                    </div>
                  </div>

                </div>
              </dl>
            </div>
          </div>
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
export default About
