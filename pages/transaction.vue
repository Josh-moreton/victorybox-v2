<script setup lang="ts">
import { transactions } from "@/../public/data/userPanelData";
import { PhArrowsDownUp, PhCheck, PhDotsThree, PhWallet } from "@phosphor-icons/vue";

useHead({
  title: "Transaction - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "user-panel-layout",
});
</script>
<template>
  <div class="col-xxl-9 col-xl-8 col-lg-8">
    <div class="cmn-box-addingbg mb-6 win40-ragba border radius24 py-xxl-10 py-xl-8 py-5 px-xxl-10 px-xl-8 px-5">
      <div class="d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-sm-between justify-content-center gap-3">
        <div class="trans-pribox d-flex align-items-center border radius24 px-xxl-10 px-4 py-4">
          <div class="box">
            <h3 class="n4-clr mb-2">$2956.00</h3>
            <span class="fw_600 n3-clr">Available Balance</span>
          </div>
        </div>
        <div class="d-flex align-items-center gap-xl-6 gap-4">
          <NuxtLink to="#0" class="deposit-box text-center d-center border radius24 d-center">
            <span class="box">
              <span class="icon mb-xxl-5 mb-xl-4 mb-lg-3 mb-2 s1-bg radius-circle d-center">
                <PhWallet class="ph ph-wallet fs-three n0-clr"></PhWallet>
              </span>
              <span class="n3-clr fw_600">Deposit</span>
            </span>
          </NuxtLink>
          <NuxtLink to="#0" class="deposit-box text-center d-center border radius24 d-center">
            <span class="box">
              <span class="icon mb-xxl-5 mb-xl-4 mb-lg-3 mb-2 s1-bg radius-circle d-center">
                <PhArrowsDownUp class="ph ph-arrows-down-up fs-three n0-clr"></PhArrowsDownUp>
              </span>
              <span class="n3-clr fw_600">Withdraw</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="cmn-box-addingbg win40-ragba border radius24 pt-xxl-10 pt-xl-8 pt-lg-6 pt-5 pb-5">
      <div class="mb-xxl-10 mb-xl-8 mb-lg-6 mb-5 d-flex align-items-center justify-content-between flex-wrap gap-3 px-xxl-10 px-xl-8 px-5">
        <h3 class="user-title n4-clr">All Transactions</h3>
        <form action="#0" class="min-maxdate">
          <input type="text" placeholder="min - max date" />
        </form>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
                <span class="n4-clr fs20 fw_700">Date</span>
              </th>
              <th>
                <span class="n4-clr fs20 fw_700">Description</span>
              </th>
              <th>
                <span class="n4-clr fs20 fw_700">Pay. Method</span>
              </th>
              <th>
                <span class="n4-clr fs20 fw_700">Amount</span>
              </th>
              <th>
                <span class="n4-clr fs20 fw_700">Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in transactions" :key="`transaction-${index}`">
              <td>
                <span class="n3-clr">{{ transaction.date }}</span>
              </td>
              <td>
                <span class="n3-clr">{{ transaction.description }}</span>
              </td>
              <td>
                <span class="n3-clr">{{ transaction.method }}</span>
              </td>
              <td>
                <span class="n3-clr">{{ transaction.amount }}</span>
              </td>
              <td>
                <div v-if="transaction.actions" class="n3-clr">
                  <div class="dropdown dropstart">
                    <button class="s1-clr" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <PhDotsThree weight="bold" class="ph-bold ph-dots-three fs-four" />
                    </button>
                    <ul class="dropdown-menu">
                      <li v-for="action in transaction.actions" :key="action.link">
                        <a href="#">
                          {{ action.label }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div v-else class="table-check position-relative">
                  <label class="checkbox-single">
                    <input type="checkbox" name="checkbox" readOnly :checked="transaction.checkbox" class="d-none" />
                    <span class="checkmark d-center"><PhCheck v-if="transaction.checkbox" /></span>
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
