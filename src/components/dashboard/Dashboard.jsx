const Dashboard = () => {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">ESTADISTICAS 2024</h3>
      </div>

      <div className="row">
        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="mb-2 text-dark font-weight-normal">BISA</h5>
              <h2 className="mb-4 text-dark font-weight-bold">304</h2>
              <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                <i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i>
              </div>
              <p className="mt-4 mb-0">Última consulta: 12/05/2023</p>
              <h3 className="mb-0 font-weight-bold mt-2 text-dark">50%</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="mb-2 text-dark font-weight-normal">CREDIFORM</h5>
              <h2 className="mb-4 text-dark font-weight-bold">12</h2>
              <div className="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                <i className="mdi mdi-account-circle icon-md absolute-center text-dark"></i>
              </div>
              <p className="mt-4 mb-0">Última consulta: 12/05/2023</p>
              <h3 className="mb-0 font-weight-bold mt-2 text-dark">10%</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="mb-2 text-dark font-weight-normal">ILLIMANI</h5>
              <h2 className="mb-4 text-dark font-weight-bold">100</h2>
              <div className="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent">
                <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
              </div>
              <p className="mt-4 mb-0">Última consulta: 12/05/2023</p>
              <h3 className="mb-0 font-weight-bold mt-2 text-dark">15%</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="mb-2 text-dark font-weight-normal">INCOR</h5>
              <h2 className="mb-4 text-dark font-weight-bold">4250</h2>
              <div className="dashboard-progress dashboard-progress-4 d-flex align-items-center justify-content-center item-parent">
                <i className="mdi mdi-cube icon-md absolute-center text-dark"></i>
              </div>
              <p className="mt-4 mb-0">Última consulta: 12/05/2023</p>
              <h3 className="mb-0 font-weight-bold mt-2 text-dark">25%</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="card-title mb-0">Actividades recientes</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-4 grid-margin grid-margin-lg-0">
                  <div className="wrapper pb-5 border-bottom">
                    <div className="text-wrapper d-flex align-items-center justify-content-between mb-2">
                      <p className="mb-0 text-dark">Consultas Particulares</p>
                      <span className="text-success">
                        <i className="mdi mdi-arrow-up"></i>24.50%
                      </span>
                    </div>
                    <h3 className="mb-0 text-dark font-weight-bold">$ 12.500</h3>
                    <canvas id="total-profit"></canvas>
                  </div>
                  <div className="wrapper pt-5">
                    <div className="text-wrapper d-flex align-items-center justify-content-between mb-2">
                      <p className="mb-0 text-dark">Consultas Seguros</p>
                      <span className="text-success">
                        <i className="mdi mdi-arrow-up"></i>75.50%
                      </span>
                    </div>
                    <h3 className="mb-4 text-dark font-weight-bold">$ 156.43</h3>
                    <canvas id="total-expences"></canvas>
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8 grid-margin grid-margin-lg-0">
                  <div className="pl-0 pl-lg-4">
                    <div className="d-xl-flex justify-content-between align-items-center mb-2">
                      <div className="d-lg-flex align-items-center mb-lg-2 mb-xl-0">
                        <h3 className="text-dark font-weight-bold mr-2 mb-0">Detalle de Consultas</h3>
                        <h5 className="mb-0">( mensual )</h5>
                      </div>
                      <div className="d-lg-flex">
                        <p className="mr-2 mb-0">Zona horaria:</p>
                        <p className="text-dark font-weight-bold mb-0">GMT-0400 Eastern Delight Time</p>
                      </div>
                    </div>
                    <div className="graph-custom-legend clearfix" id="device-sales-legend"></div>
                    <canvas id="device-sales"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
