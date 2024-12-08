import React from "react";
import imgstat from "../assets/img/stats-bg.jpg"

const StatsSection = () => {
  return (
    <div>
        <section id="stats" class="stats section dark-background">

          <img src={imgstat} alt="" data-aos="fade-in"></img>

          <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-4">

              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Clients</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Workers</p>
                </div>
              </div>

            </div>

          </div> 

        </section>

    </div>
  );
};

export default StatsSection;
