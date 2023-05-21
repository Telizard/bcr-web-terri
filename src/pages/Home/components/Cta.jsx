import { RentButton } from "./RentButton";

export const Cta = () => {
  return (
    <section id="cta" className="mb-3 py-5">
      <div className="container">
        <div
          className="card"
          style={{
            height: "25rem",
          }}
        >
          <div
            className="d-flex gap-4 flex-column text-center justify-content-center align-items-center p-5"
            style={{
              height: "100%",
            }}
          >
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae
            </p>
            <div>
              <RentButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
