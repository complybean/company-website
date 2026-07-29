<template>
  <!-- Hero -->
  <section class="bg-gradient-to-br from-slate-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-6 py-24">

      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span
            class="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
          >
            Compliance • Automation • AI
          </span>

          <h1 class="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Compliance
            <span class="text-blue-600">Made Simple.</span>
          </h1>

          <p class="mt-8 text-xl text-slate-600 leading-9">
            ComplyBean helps organizations automate compliance,
            governance and documentation through modern technology,
            allowing teams to focus on business growth instead of paperwork.
          </p>

          <div class="mt-10 flex gap-4">

            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition"
            >
              Get Started
            </button>

            <RouterLink
              to="/contact"
              class="border border-slate-300 hover:border-blue-600 hover:text-blue-600 px-7 py-4 rounded-xl font-semibold transition"
            >
              Contact Us
            </RouterLink>

          </div>

        </div>

        <!-- Right Side Card -->
        <div>

          <div class="bg-white rounded-3xl shadow-xl p-8">

            <h3 class="text-2xl font-bold">
              Why ComplyBean?
            </h3>

            <div class="mt-8 space-y-5">

              <div class="flex items-center gap-4">
                <div class="text-2xl">✔️</div>
                <div>
                  <h4 class="font-semibold">Automated Workflows</h4>
                  <p class="text-slate-500">
                    Reduce repetitive compliance tasks.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="text-2xl">🔒</div>
                <div>
                  <h4 class="font-semibold">Secure Platform</h4>
                  <p class="text-slate-500">
                    Enterprise-grade security and reliability.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="text-2xl">📈</div>
                <div>
                  <h4 class="font-semibold">Scalable</h4>
                  <p class="text-slate-500">
                    Designed for startups and enterprises alike.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- Services -->

  <section class="py-20">

    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center">

        <h2 class="text-4xl font-bold">
          Our Services
        </h2>

        <p class="mt-4 text-slate-500">
          Helping businesses simplify compliance using technology.
        </p>

      </div>

      <div class="grid md:grid-cols-3 gap-8 mt-14">

        <div
          class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
        >
          <div class="text-5xl">🤖</div>
          <h3 class="mt-6 text-2xl font-bold">
            Automation
          </h3>
          <p class="mt-4 text-slate-600">
            Streamline compliance activities using intelligent automation.
          </p>
        </div>

        <div
          class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
        >
          <div class="text-5xl">📊</div>
          <h3 class="mt-6 text-2xl font-bold">
            Analytics
          </h3>
          <p class="mt-4 text-slate-600">
            Gain visibility into compliance status with powerful dashboards.
          </p>
        </div>

        <div
          class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
        >
          <div class="text-5xl">🛡️</div>
          <h3 class="mt-6 text-2xl font-bold">
            Governance
          </h3>
          <p class="mt-4 text-slate-600">
            Build standardized compliance processes across teams.
          </p>
        </div>

      </div>

    </div>

  </section>

  <!-- CTA -->

  <section class="bg-blue-600">

    <div class="max-w-7xl mx-auto px-6 py-20 text-center text-white">

      <h2 class="text-4xl font-bold">
        Ready to simplify compliance?
      </h2>

      <p class="mt-6 text-xl opacity-90">
        Let's build smarter compliance together.
      </p>

      <RouterLink
        to="/contact"
        class="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
      >
        Contact Our Team
      </RouterLink>

    </div>

  </section>
</template>