<template>
  <footer class="bg-slate-900 text-white mt-20">
    <div class="max-w-7xl mx-auto px-6 py-12">

      <div class="grid md:grid-cols-3 gap-10">

        <!-- Company -->
        <div>
          <h2 class="text-2xl font-bold text-blue-400">
            ComplyBean
          </h2>

          <p class="mt-4 text-slate-300 leading-7">
            Helping organizations simplify compliance through
            automation, analytics and intelligent software solutions.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul class="space-y-3 text-slate-300">

            <li>
              <RouterLink
                to="/"
                class="hover:text-white transition"
              >
                Home
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/services"
                class="hover:text-white transition"
              >
                Services
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/pricing"
                class="hover:text-white transition"
              >
                Pricing
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/about"
                class="hover:text-white transition"
              >
                About
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/contact"
                class="hover:text-white transition"
              >
                Contact
              </RouterLink>
            </li>

          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            Contact
          </h3>

          <div class="space-y-3 text-slate-300">

            <p>
              📧 contact@domain.com
            </p>

            <p>
              📞 +91 XXXXX XXXXX
            </p>

            <p>
              📍 New Delhi, India
            </p>

          </div>
        </div>

      </div>

      <div class="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm">
        © {{ year }} ComplyBean. All Rights Reserved.
      </div>

    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>