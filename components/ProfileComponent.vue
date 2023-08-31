<template>
 <div>
   <ClientOnly>
     <div class="flex items-center gap-x-4">
       <Menu as="div" class="relative">
         <MenuButton class="-m-1.5 flex items-center p-1.5">
           <span class="sr-only">Open user menu</span>

           <!-- <NuxtLink :to="{name:'login'}">Login</NuxtLink> -->
           <img
               class="h-8 w-8 rounded-full bg-gray-50"
               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
               alt=""
           />
           <span class="hidden lg:flex lg:items-center">
          <span
              class="ml-4 text-sm font-semibold leading-6 text-gray-900"
              aria-hidden="true"
          >
              {{ currentUser.email }}
          </span>
          <i class="pl-2 fa-solid fa-chevron-down"></i>
        </span>
         </MenuButton>
         <transition
             enter-active-class="transition ease-out duration-100"
             enter-from-class="transform opacity-0 scale-95"
             enter-to-class="transform opacity-100 scale-100"
             leave-active-class="transition ease-in duration-75"
             leave-from-class="transform opacity-100 scale-100"
             leave-to-class="transform opacity-0 scale-95"
         >
           <MenuItems
               class="absolute space-y-2 right-0 z-10 mt-2.5 w-40 pl-3 origin-top-right rounded-md bg-white py-4 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
           >
             <MenuItem>
               <NuxtLink class="py-2" :to="{ name: 'user-index' }">
                 Your Dashboard
               </NuxtLink>
             </MenuItem>


             <MenuItem>
               <nuxt-link
                   class=" block"
                   :to="{
                name: 'user-index',
              }"
               >
                 Your Profile
               </nuxt-link>
             </MenuItem>
             <MenuItem v-if="isAdmin">
               <nuxt-link
                   class="block"
                   :to="{
                name: 'user-index',
              }"
               >
                 Manage
               </nuxt-link>
             </MenuItem>
             <div class="cursor-pointer" @click="logOut">
               Logout <i class="fa-sharp fa-solid fa-power-off"></i>
             </div>
           </MenuItems>
         </transition>
       </Menu>
     </div>
   </ClientOnly>
 </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useAuthStore } from "~/store/auth.store";
import { UserType } from "~/types/model";

const authStore = useAuthStore();
const { currentUser ,isAdmin} = useCurrentUser();

function logOut() {
  authStore.logout();
}
</script>

<style scoped></style>
