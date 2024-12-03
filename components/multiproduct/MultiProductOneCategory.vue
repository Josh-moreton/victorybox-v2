<script setup lang="ts">
import { PhArrowUpRight } from "@phosphor-icons/vue";
import guidThumb from "/images/blog/guid-thumb.png";
import stars from "/images/global/global-picon.png";
import hAipot from "/images/service/h-aipot.png";
import hBike from "/images/service/h-bike.png";
import hCars from "/images/service/h-cars.png";
import hCycle from "/images/service/h-cycle.png";
import hHouse from "/images/service/h-house.png";
import hRing from "/images/service/h-ring.png";
</script>
<template>
  <section class="highlight-service n2-bg pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-sm-between justify-content-center mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title text-sm-start text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap justify-content-sm-start justify-content-center align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="stars" alt="img" />
              <h5 class="p1-clr fw_700">All Category</h5>
            </div>
            <span class="display-four d-block n0-clr">
              <span class="d-block">Browse The</span>
              <span class="act4-clr act4-underline d-inline-block" data-aos="zoom-in-left" data-aos-duration="1000"> Highlights </span>
            </span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <NuxtLink to="/contest" class="cmn__collection radius-circle p1-bg d-center position-relative ms-lg-auto m-sm-0 m-auto">
            <span class="cmn-cont-box text-center position-relative">
              <span class="icon mb-1">
                <PhArrowUpRight class="ph-bold ph-arrow-up-right n4-clr fs-three"></PhArrowUpRight>
              </span>
              <span class="d-block n4-clr fw_700">Browse More</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <!-- {/* hilight body */} -->
    <div class="container custom-highcontainer">
      <div class="row g-6 justify-content-between">
        <div class="high-service-wrap position-relative">
          <div class="thumb-high">
            <NuxtImg :src="guidThumb" alt="img" />
          </div>
          <ul class="nav high-contentwrap d-grid nav-tabs border-0" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <div
                class="nav-link nw1-clr display-four fw_700"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                itemType="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Car
                <div class="tab-content hover-image">
                  <div class="tab-pane show fade active">
                    <span class="cmn-high-thumb">
                      <NuxtImg :src="hCars" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item" role="presentation">
              <div
                class="nav-link nw1-clr display-four fw_700"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                itemType="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Bike
                <div class="tab-content hover-image">
                  <div class="tab-pane show fade active">
                    <span class="cmn-high-thumb">
                      <NuxtImg :src="hBike" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item" role="presentation">
              <div
                class="nav-link nw1-clr display-four fw_700"
                id="contact-tab2"
                data-bs-toggle="tab"
                data-bs-target="#contact2"
                itemType="button"
                role="tab"
                aria-controls="contact2"
                aria-selected="false"
              >
                Cycle
                <div class="tab-content hover-image">
                  <div class="tab-pane show fade active">
                    <span class="cmn-high-thumb">
                      <NuxtImg :src="hCycle" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item" role="presentation">
              <div
                class="nav-link nw1-clr display-four fw_700"
                id="contact-tab3"
                data-bs-toggle="tab"
                data-bs-target="#contact3"
                itemType="button"
                role="tab"
                aria-controls="contact3"
                aria-selected="false"
              >
                Jewelry
                <div class="tab-content hover-image">
                  <div class="tab-pane show fade active">
                    <span class="cmn-high-thumb">
                      <NuxtImg :src="hRing" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item" role="presentation">
              <div
                class="nav-link nw1-clr display-four fw_700"
                id="contact-tab4"
                data-bs-toggle="tab"
                data-bs-target="#contact4"
                itemType="button"
                role="tab"
                aria-controls="contact4"
                aria-selected="false"
              >
                Electronic
                <div class="tab-content hover-image">
                  <div class="tab-pane show fade active">
                    <span class="cmn-high-thumb">
                      <NuxtImg :src="hAipot" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item" role="presentation">
              <div
                class="nav-link nw1-clr display-four fw_700"
                id="contact-tab5"
                data-bs-toggle="tab"
                data-bs-target="#contact5"
                itemType="button"
                role="tab"
                aria-controls="contact5"
                aria-selected="false"
              >
                Real Estate
                <div class="tab-content hover-image">
                  <div class="tab-pane show fade active">
                    <span class="cmn-high-thumb">
                      <NuxtImg :src="hHouse" alt="img" />
                    </span>
                  </div>
                </div>
                <div class="tab-content hover-image">
                  <div class="tab-pane fade" id="contact5" role="tabpanel" aria-labelledby="contact-tab5">
                    <span class="cmn-high-thumb">
                      <NuxtImg :src="hHouse" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- {/* hilight body */} -->
  </section>
</template>

<style scoped></style>
