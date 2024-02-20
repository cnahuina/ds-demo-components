import React from 'react';
import './sass/components/button.scss';
import './sass/style.scss';
// import iconSVG from "./svg/GlCoverageSolid.svg";

function App() {
  return (
    <div>
      <section>
        <h1>Prueba de tokens</h1>
        <button className='hana-sp-btn-default-primary'>Primary</button>
        <br />
        <button className='hana-sp-btn-default-primary-icon-right'>With Icon 
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 2.42603L3.05884 5.89785L3.96619 11.3515C4.11343 12.2264 4.44506 13.0599 4.93907 13.7968C5.43308 14.5337 6.07817 15.1571 6.83152 15.6256L10.012 17.6123L13.1949 15.6256C13.9457 15.1557 14.5882 14.5317 15.0796 13.7949C15.5711 13.0581 15.9005 12.2252 16.0459 11.3515L16.9557 5.89785L10.0001 2.42603ZM12.5288 14.5655L10.0097 16.139V10H5.0192L4.45091 6.60224L10.0001 3.82049V9.99527H14.9929L14.8019 11.1414C14.6864 11.8403 14.4241 12.5068 14.0323 13.097C13.6404 13.6872 13.128 14.1877 12.5288 14.5655Z" fill="white"/>
          </svg>
        </button>
      </section>
    </div>
  );
}

export default App;
