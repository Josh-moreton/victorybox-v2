<script setup lang="ts">
import { ref } from 'vue'
import { PhMinus, PhPlus, PhStar, PhStarHalf } from "@phosphor-icons/vue"
import carTicket from "/images/lottery/car-ticket.png"
import carTicketBig from "/images/lottery/ticket-big.png"

interface Contest {
  id: string
  title: string
  price: number
  description: string
  image: string
}

// Initialize contest data with default values
const contest = ref<Contest>({
  id: '114',
  title: 'WIN THIS 520BHP BMW M3 COMPETITION + £1,000 CASH!',
  price: 1.00,
  description: 'Win a BMW M3 Competition plus £1,000 cash prize',
  image: carTicket
})

const tab = ref(1)
const ticketNumber = ref(1)
const ticketSold = ref(227)
const totalTicket = 400
const percent = Math.round((ticketSold.value / totalTicket) * 100)
const selectedAnswer = ref('')

const ticketIncrement = () => {
  if (ticketNumber.value < 10) {
    ticketNumber.value++
    ticketSold.value++
  }
}

const ticketDecrement = () => {
  if (ticketNumber.value > 1) {
    ticketNumber.value--
    ticketSold.value--
  }
}

const toggleTab = (index: number) => {
  if (tab.value !== index) {
    tab.value = index
  }
}
onMounted(async () => {
  try {
    const response = await fetch(`${config.public.strapiUrl}/api/products?populate=*`);
    const data = await response.json();
    products.value = data.data.map(product => {
      return {
        image: product.Image?.formats?.medium?.url 
          ? `${config.public.strapiUrl}${product.Image.formats.medium.url}` 
          : product.Image?.url 
            ? `${config.public.strapiUrl}${product.Image.url}` 
            : '/images/placeholder.jpg',
        title: product.Title,
        soldPercentage: product.soldPercentage?.toString() || '0',
        rating: product.rating?.toString() || '0',
        days: product.days?.toString() || '0',
        remaining: product.remaining?.toString() || '0',
        price: product.Price,
        serialNumber: product.serialNumber || '',
      };
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>
<template>
  <section v-if="contest" class="contest-details pt-120">
    <div class="container">
      <div class="row g-6">
        <div class="col-lg-6">
          <div class="contest-details-leftwrap">
            <div class="border-bottom pb-xxl-8 pb-6 mb-xxl-8 mb-6">
              <h2 class="n4-clr mb-xxl-3 mb-2">WIN THIS 520BHP BMW M3 COMPETITION + £1,000 CASH!</h2>
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <span class="fs-eight n3-clr">Lottery No. 114</span>
                <span class="border-con"></span>
                <span class="fs-eight n3-clr">Drawn: 18 January 2024</span>
              </div>
            </div>
            <div class="common-tabwrap">
              <div class="singletab">
                <div class="example-common-button mb-xxl-8 mb-xl-7 mb-6">
                  <ul class="tablinks d-grid gap-sm-0 gap-3 d-sm-flex align-items-center">
                    <li :class="`nav-links ${tab === 1 ? 'active' : ''}`">
                      <button class="tablink n3-clr d-center border p-xxl-3 p-2 w-100" @click="() => toggleTab(1)">Description</button>
                    </li>
                    <li :class="`nav-links ${tab === 2 ? 'active' : ''}`">
                      <button class="tablink n3-clr d-center border p-xxl-3 p-2 w-100" @click="() => toggleTab(2)">Lottery History</button>
                    </li>
                    <li :class="`nav-links ${tab === 3 ? 'active' : ''}`">
                      <button class="tablink n3-clr d-center border p-xxl-3 p-2 w-100" @click="() => toggleTab(3)">Reviews (02)</button>
                    </li>
                  </ul>
                </div>
                <div class="tabcontents">
                  <div :class="`tabitem ${tab === 1 ? 'active' : ''}`">
                    <div class="description-body">
                      <p class="n3-clr mb-xxl-8 mb-xl-5 mb-4">
                        Embark on an exhilarating journey with Lottovibe where your dream car is just a ticket away. We are more than just a lottery platform; we are your gateway to the thrill of
                        hitting the jackpot and driving home in style.
                      </p>
                      <span class="fs20 n4-clr fw_700 d-block mb-xl-5 mb-4">Why Choose [Lottovibe]</span>
                      <p class="cmn-textbox n3-clr mb-xl-6 mb-md-4 mb-2">
                        <span class="fw_700 n1-clr">Diverse Fleet:</span> Explore a fleet of luxurious cars, from sleek sports cars to stylish SUVs. Our lotteries feature an array of coveted
                        automotive brands to suit every taste.
                      </p>
                      <p class="cmn-textbox n3-clr mb-xl-6 mb-md-4 mb-2">
                        <span class="fw_700 n1-clr">Secure Transactions:</span>
                        Your security is our priority. With state-of-the-art encryption and secure payment methods, you can trust us with your transactions and personal information.
                      </p>
                      <p class="cmn-textbox n3-clr mb-xl-6 mb-md-4 mb-2">
                        <span class="fw_700 n1-clr">Global Reach:</span>
                        No matter where you are, our platform brings the excitement of winning a premium car directly to you. Join a community of enthusiasts from around the world.
                      </p>
                      <p class="cmn-textbox n3-clr mb-xl-6 mb-md-4 mb-2">
                        <span class="fw_700 n1-clr">Fair Draws:</span>
                        Experience transparency and fairness in every draw. Our random selection process ensures that everyone has an equal chance of driving home a winner.
                      </p>
                      <p class="cmn-textbox n3-clr">
                        <span class="fw_700 n1-clr">User-Friendly Interface:</span>
                        Navigating [Lottovibe] is a breeze. Purchase tickets seamlessly, track lottery results, and manage your account effortlessly.
                      </p>
                      <p class="n3-clr mt-xxl-8 mt-6">
                        At Lottovibe, were not just making dreams come true; were igniting a passion for premium automotive experiences. Join us on the road to extraordinary adventures – where every
                        ticket holds the promise of a life-changing drive. Get ready to rev up your luck with [Lottovibe]!
                      </p>
                    </div>
                  </div>
                  <div :class="`tabitem ${tab === 2 ? 'active' : ''}`">
                    <div class="lottery-history">
                      <p class="n3-clr mb-xl-4 mb-3">
                        Embark on a journey through the rich history of lotteries and discover how the thrill of winning has evolved over time. Lotteries have deep roots, dating back to ancient
                        civilizations where they were used to fund public projects and infrastructure.
                      </p>
                      <p class="n3-clr mb-xl-4 mb-3">
                        In the Renaissance era, lotteries became a popular means of financing cultural endeavors, including the construction of iconic landmarks and works of art. The allure of the
                        lottery spread across continents, becoming a global phenomenon with each region adding its unique flavor to the game.
                      </p>
                      <p class="n3-clr">
                        In the Renaissance era, lotteries became a popular means of financing cultural endeavors, including the construction of iconic landmarks and works of art. The allure of the
                        lottery spread across continents, becoming a global phenomenon with each region adding its unique flavor to the game.
                      </p>
                    </div>
                  </div>
                  <div :class="`tabitem ${tab === 3 ? 'active' : ''}`">
                    <div class="cash-setest">
                      <span class="n3-clr fw_600 mb-xxl-8 mb-xl-6 mb-lg-4 mb-3">There are no reviews yet.</span>
                      <div class="cash-title mb-xl-8 mb-lg-6 mb-5">
                        <span class="fs20 fw_700 n2-clr mb-xl-3 mb-2">Be the first to review “Setest”</span>
                        <p class="n3-clr">Your email address will not be published. Required fields are marked *</p>
                      </div>
                      <form class="myrating">
                        <div class="myrating-title mb-xxl-10 mb-xl-7 mb-lg-6 mb-5">
                          <span class="n3-clr mb-xl-3 mb-2">Your rating *</span>
                          <ul class="ratting d-flex align-items-center gap-1">
                            <li>
                              <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
                            </li>
                            <li>
                              <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
                            </li>
                            <li>
                              <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
                            </li>
                            <li>
                              <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
                            </li>
                            <li>
                              <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr"></PhStarHalf>
                            </li>
                          </ul>
                        </div>
                        <input type="text" placeholder="Name*" />
                        <input type="text" placeholder="Email*" />
                        <textarea name="your-review" :rows="4" placeholder="Your review*"></textarea>
                        <button type="submit" class="mt-xxl-3 act4-bg radius12 d-center fw_700 n0-clr py-xxl-3 py-2 px-xxl-10 px-6">Submit Now</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="competition-ending border radius24">
            <div class="conpetition-title border-bottom py-xxl-10 py-xl-7 py-6 px-xxl-8 px-xl-6 px-4">
              <h3 class="n4-clr mb-xxl-8 mb-xl-6 mb-5 text-center">This competition ends in:</h3>
            </div>
            <div class="contest-price-title py-xxl-10 py-8 px-xxl-12 px-xl-9 px-sm-7 px-5">
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between mb-xxl-8 mb-xl-6 mb-5 gap-2">
                <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr">£1.00</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                <span class="n1-clr fs20 fw_700">Contest No: B2T</span>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-2">
                <span class="fs-eight fw_700 n4-clr">Ticket Sold</span>
                <span class="n4-clr soldout fw_700 fs-eight">45% Sold</span>
              </div>
              <div class="range-custom mw-100 range-custom-act4 position-relative">
                <span class="curs-range"></span>
              </div>
            </div>
            <div class="ans-qustion-wrap mx-xxl-12 mx-xl-9 mx-lg-7 mx-sm-6 mx-2 mb-xxl-10 mb-6">
              <span class="ans-title py-xxl-5 py-3 px-3 w-100 text-center">PLEASE ANSWER THE QUESTION</span>
              <div class="ans-select-qustion border-bottom">
                <div class="py-xxl-8 py-xl-6 py-5 px-xxl-8 px-xl-6 px-4">
                  <h4 class="n4-clr mb-xl-3 mb-2">Answer the question ?</h4>
                  <p class="n3-clr">Which of the below is another car manufactured by Ford?</p>
                </div>
                <ul class="question-tag d-flex flex-wrap px-xxl-6 px-sm-4 px-2 pb-xxl-6 pb-4">
                  <li>
                    <NuxtLink to="#" class="n0-bg radius12 d-center py-xl-3 py-2 px-6 n4-clr fw_600"> Fiesta </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="n0-bg radius12 d-center py-xl-3 py-2 px-6 n4-clr fw_600"> Tiguan </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="n0-bg radius12 d-center py-xl-3 py-2 px-6 n4-clr fw_600"> M8 Competition </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="n0-bg radius12 d-center py-xl-3 py-2 px-6 n4-clr fw_600"> Corsa </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="ans-ticket py-xxl-8 py-xl-6 py-5 px-xxl-8 px-xl-6 px-4">
                <h4 class="n1-clr mb-xxl-18 mb-xl-6 mb-4">How many tickets?</h4>
                <div class="custom-many-ticketprice mb-xxl-8 mb-xl-7 mb-sm-6 mb-5">
                  <div class="range-custom mw-100 range-custom-act4 position-relative">
                    <span class="curs-range" :style="{ left: `${percent}%` }"></span>
                    <span class="scroll-price-count act4-bg py-1 px-1 d-center nw1-clr" :style="{ left: `${percent}%` }">
                      {{ ticketSold }}
                    </span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mt-2">
                    <span class="fs-eight fw_700 n4-clr">Ticket Sold</span>
                    <span class="n4-clr soldout fw_700 fs-eight">{{ percent }}% Sold</span>
                  </div>
                </div>
                <div class="quantity-basket mb-xxl-15 mb-xl-10 mb-sm-8 mb-6">
                  <div class="quantity-body">
                    <p class="qty d-flex align-items-center gap-2 justify-content-between">
                      <button class="qtyminus" aria-hidden="true" @click="ticketDecrement">
                        <PhMinus />
                      </button>
                      <span class="d-flex align-items-center">
                        <span class="n3-clr fs18 fw_600">Number of tickets: </span>
                        <input type="number" name="qty" id="qty" min="1" max="10" step="1" readOnly :value="ticketNumber" />
                      </span>
                      <button class="qtyplus" aria-hidden="true" @click="ticketIncrement">
                        <PhPlus />
                      </button>
                    </p>
                  </div>
                </div>
                <button 
                  class="snipcart-add-item act4-bg radius12 d-center w-100 nw1-clr fw_700 py-xxl-3 py-2 px-6"
                  :data-item-id="contest.id"
                  :data-item-name="contest.title"
                  :data-item-price="contest.price"
                  :data-item-url="'/contests/' + contest.id"
                  :data-item-description="contest.description"
                  :data-item-image="contest.image"
                  :data-item-quantity="ticketNumber"
                  data-item-custom1-name="Question Answer"
                  :data-item-custom1-value="selectedAnswer"
                  data-item-custom1-required="true"
                >
                  Add {{ ticketNumber }} ticket{{ ticketNumber > 1 ? 's' : '' }} to basket 
                  (£{{ (contest.price * ticketNumber).toFixed(2) }})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- {/* Modal */} -->
  <div class="modal added-ticket-modal fade" id="exampleModal" tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header pt-xxl-8 pt-4 px-xxl-8 px-4 border-bottom-0">
          <h5 class="modal-title" id="exampleModalLabel">Youve added tickets to basket</h5>
          <button type="button" class="btn-close border radius-circle d-center" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body border-top-0 mt-xxl-5">
          <div class="car-ticketwrap mb-xxl-10 mb-xl-8 mb-6">
            <div class="thumb position-relative d-center">
              <NuxtImg :src="carTicket" alt="img" />
            </div>
            <div class="cont">
              <span class="n1-clr fs20 fw_700 d-block mb-xl-3 mb-2"> Win This 520BHP BMW M3 Competition + £1,000 Cash! </span>
              <h4 class="s1-clr">
                <NuxtLink to="#" class="s1-clr act4-texthover"> 20 tickets </NuxtLink>
              </h4>
            </div>
          </div>
          <div class="d-sm-flex d-grid align-items-center gap-xxl-6 gap-4 border-bottom pb-xxl-8 pb-xl-6 pb-4 mx-sm-0 mx-10">
            <button type="button" class="w-100 act4-border radius12 fw_700 act4-clr py-xxl-3 py-2 px-5">Keep shopping</button>
            <button type="button" class="w-100 act4-bg radius12 fw_700 n0-clr py-xxl-3 py-2 px-5">View basket</button>
          </div>
          <div class="thumb-ticketbig position-relative d-center">
            <div class="thumb">
              <NuxtImg :src="carTicketBig" alt="img" />
            </div>
          </div>
          <span class="fs20 fw_600 n3-clr text-center"> Want to also win this <span class="fw_700">Mansory Lamborghini Urus or  £140,000 tomorrow?</span> </span>
        </div>
        <div class="modal-footer border-top-0 d-center pb-xxl-8 pb-6 mx-xxl-15 mx-10">
          <button type="button" class="w-100 act4-bg radius12 fw_700 n0-clr py-xxl-3 py-2 px-5">Enter Here</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: #f0f0f0;
  font-weight: bold;
}

.thumb {
  position: relative;
  width: 100%;
  text-align: center;
}

.question-content {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 0 20px;
}
</style>