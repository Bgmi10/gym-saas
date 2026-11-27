
export const Hero = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        h-[58svh]
        min-h-[420px]
        sm:h-[65svh]
        sm:min-h-[480px]
        md:h-screen
        md:min-h-0
      "
    >
      {/* Background Image */}
      <img
        src="/up.png"
        alt="Modern premium gym interior"
        fetchPriority="high"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Overall Dark Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/35
        "
      />

      {/* Left Side Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/45
          to-transparent
        "
      />

      {/* Top Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-black/50
          to-transparent
        "
      />

      {/* Bottom Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          sm:h-40
          md:h-56
          bg-gradient-to-t
          from-black
          via-black/50
          to-transparent
        "
      />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
          px-6
          sm:px-10
          md:px-16
          lg:px-24
        "
      >
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p
            className="
              mb-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-lime-400
              sm:text-sm
            "
          >
            TRAIN HARD. LIVE STRONG.
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-4xl
              font-extrabold
              leading-[1.12]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Your Fitness.
            <span className="block text-lime-400">
              Your Journey.
            </span>
            Your Strength.
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-white/75
              sm:text-base
              md:text-lg
              md:leading-8
            "
          >
            Push your limits, build healthy habits,
            and become stronger every day.
            Your journey to a healthier lifestyle
            starts here.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <a
              href="#memberships"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-lime-400
                px-7
                py-3.5
                text-sm
                font-bold
                text-black
                transition-all
                duration-300
                hover:bg-lime-300
                hover:scale-[1.03]
              "
            >
              Explore Memberships
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#about"
              className="
                text-sm
                font-semibold
                text-white
                transition
                hover:text-lime-400
              "
            >
              Discover More →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
