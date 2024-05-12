import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-[#2A2831]  ">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-white">
            <div class="text-center sm:text-left text-white">
              <p class="text-lg font-medium ">About Us</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a class=" transition " href="#">
                    Company History
                  </a>
                </li>

                <li>
                  <a class=" transition " href="#">
                    {" "}
                    Meet the Team{" "}
                  </a>
                </li>

                <li>
                  <a class=" hover:text-gray-700/75" href="#">
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a class=" hover:text-gray-700/75" href="#">
                    {" "}
                    Careers{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left text-white">
              <p class="text-lg font-medium ">Our Services</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    Web Development
                  </a>
                </li>

                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    {" "}
                    Web Design{" "}
                  </a>
                </li>

                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    {" "}
                    Marketing{" "}
                  </a>
                </li>

                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    {" "}
                    Google Ads{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium ">Resources</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    {" "}
                    Online Guides{" "}
                  </a>
                </li>

                <li>
                  <a class="transition hover:text-gray-700/75" href="#">
                    Conference Notes
                  </a>
                </li>

                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    {" "}
                    Forum{" "}
                  </a>
                </li>

                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    {" "}
                    Downloads{" "}
                  </a>
                </li>

                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    Upcoming Events
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium ">Helpful Links</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a class="transition hover:text-gray-700/75" href="#">
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a class=" transition hover:text-gray-700/75" href="#">
                    {" "}
                    Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span class=" transition group-hover:text-gray-700/75">
                      {" "}
                      Live Chat{" "}
                    </span>

                    <span class="relative flex h-2 w-2">
                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                      <span class="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
