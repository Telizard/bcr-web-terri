export const WhyUs = () => {
  return (
    <section id="why-us" className="mb-3 py-5">
      <div className="container">
        <div className="text-center text-lg-start">
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row g-3">
          <div className="col-sm-12 col-lg-3">
            <div className="card p-3">
              <div className="mb-2">
                <span className="icon">
                  <img src={require("../../../components/aset/jempol.png")} alt="" />
                </span>
              </div>
              <div>
                <span className="d-block mb-2">Mobil Lengkap</span>
                <span className="d-block mb-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3">
            <div className="card p-3">
              <div className="mb-2">
                <span className="icon">
                  <img src={require("../../../components/aset/pricetag.png")} alt="" />
                </span>
              </div>
              <div>
                <span className="d-block mb-2">Mobil Lengkap</span>
                <span className="d-block mb-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3">
            <div className="card p-3">
              <div className="mb-2">
                <span className="icon">
                  <img src={require("../../../components/aset/jam.png")} alt="" />
                </span>
              </div>
              <div>
                <span className="d-block mb-2">Mobil Lengkap</span>
                <span className="d-block mb-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3">
            <div className="card p-3">
              <div className="mb-2">
                <span className="icon">
                  <img src={require("../../../components/aset/jam.png")} alt="" />
                </span>
              </div>
              <div>
                <span className="d-block mb-2">Mobil Lengkap</span>
                <span className="d-block mb-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
