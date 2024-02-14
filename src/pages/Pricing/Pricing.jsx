import React from "react";
import styles from "../Product/Products.module.css";
import PageNav from "../../Components/PageNav/PageNav";

function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing
            <br />
            Just $9/month
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, temporibus nam. Dicta excepturi, consectetur iusto
            repudiandae laborum iure dignissimos itaque. Magni dolores
            consectetur necessitatibus at atque nihil natus ullam? Ad?
          </p>
        </div>
        <img
          src="../images/img-2.jpg"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}

export default Pricing;
