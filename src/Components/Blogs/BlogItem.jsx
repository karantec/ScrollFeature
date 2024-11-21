import React from "react";
import { BiBarChart } from "react-icons/bi";
import { FaShare, FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube } from "react-icons/fa";
import StyledSection from "./StyleSection";

const Item = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 min-h-screen gap-4">
      {/* Left Sidebar - 10% */}
      <aside className="hidden lg:block lg:col-span-1 bg-gray-50">
        <div className="sticky h-96 mt-4 flex items-center justify-center">
          {/* Social Metrics */}
          <div className="flex flex-col justify-center items-center space-y-6 text-gray-600">
            {/* Views */}
            <div className="flex flex-col items-center space-y-1">
              <BiBarChart className="w-8 h-8 text-black font-bold" />
              <span className="text-xs text-black">views</span>
              <span className="text-sm text-black font-bold">1.6K</span>
            </div>

            {/* Shares */}
            <div className="flex flex-col items-center space-y-1">
              <FaShare className="w-4 h-4" />
              <span className="text-xs">shares</span>
              <span className="text-sm font-medium">996K</span>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-600">
              <FaFacebook className="w-4 h-4" />
              <span className="text-sm font-medium">125</span>
            </div>
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-400">
              <FaTwitter className="w-4 h-4" />
              <span className="text-sm font-medium">48</span>
            </div>
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-red-600">
              <FaPinterest className="w-4 h-4" />
              <span className="text-sm font-medium">425</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - 60% */}
      <main className="lg:col-span-6 p-4 bg-white">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="p-4 w-full">
                <p className="leading-relaxed text-base text-black">
                Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.
                </p>
                <p className="leading-relaxed text-base mt-4 text-black">
                Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
                </p>
              </div>
              <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
                <div className="border-l-4 border-gray-300 pl-6">
                  <span className="text-7xl text-gray-300 font-serif">&ldquo;</span>
                  <p className="text-4xl font-medium uppercase leading-tight tracking-wide text-black">
                  Knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.
                  </p>
                </div>
              </div>
              <p className="leading-relaxed text-base text-black">
              Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design
              </p>
              <p className="leading-relaxed text-base text-black">
              Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design
              </p>
            </div>
          </div>
        </section>
        <StyledSection/>
      </main>

      {/* Right Sidebar - 30% */}
      <aside className="lg:col-span-3 bg-gray-50 p-4">
        <div className="sticky top-4 space-y-6">
          {/* Follow Us Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 mt-6 uppercase text-center">Follow Us</h3>
            <div className="flex text-gray-600 space-x-10 justify-center">
              <div className="flex flex-col items-center">
                <FaFacebook className="w-6 h-6" />
                <span className="text-xs">10K</span>
              </div>
              <div className="flex flex-col items-center">
                <FaTwitter className="w-6 h-6" />
                <span className="text-xs">65K</span>
              </div>
              <div className="flex flex-col items-center">
                <FaInstagram className="w-6 h-6" />
                <span className="text-xs">45K</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPinterest className="w-6 h-6" />
                <span className="text-xs">69K</span>
              </div>
              <div className="flex flex-col items-center">
                <FaYoutube className="w-6 h-6" />
                <span className="text-xs">69K</span>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Subscription</h4>
            <p className="text-md text-black mb-4">
              Subscribe to our newsletter and receive a selection of cool articles every week.
            </p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 mb-4 border border-gray-300 rounded" 
            />
            <button className="w-full bg-orange-500 text-white text-sm font-medium py-2 rounded">
              Subscribe
            </button>
            <div className="mt-4 text-md text-gray-600  justify-end">
              <label className="flex items-start ">
                <input type="checkbox" className="mt-1 border-gray-300" />
                <span className="ml-2">
                By checking this box, you  confirm that you have  read and are agreeing to our terms of use regarding
                the storage of the data submitted through this  form.

                </span>
              </label>
            </div>
          </div>

          {/* Latest Articles Section */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">The Latest</h2>
            <div className="space-y-6">
              <div className="relative p-4 bg-cover bg-center text-white rounded-md h-36 flex items-end" 
                   style={{ backgroundImage: "url('back.png')" }}>
                <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg">
                  10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships

                  </h3>
                  <div className="flex justify-center items-center text-sm mt-2">
                    <span>June 21, 2022</span>
                    <span className="mx-2">•</span>
                    <span>2 minute read</span>
                  </div>
                </div>
              </div>

              {/* Additional Articles */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                  10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships

                  </h3>
                  <div className="text-sm justify-center  text-gray-600 mt-1">
                    <span>June 21, 2022</span>
                    <span className="mx-2">•</span>
                    <span>2 minute read</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                  10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships

                  </h3>
                  <div className="text-sm justify-center   text-gray-600 mt-1">
                    <span>June 21, 2022</span>
                    <span className="mx-2">•</span>
                    <span>2 minute read</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                  10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships

                  </h3>
                  <div className="text-sm items-center  text-gray-600 mt-1">
                    <span className="text-center">June 21, 2022</span>
                    <span className="mx-2">•</span>
                    <span>2 minute read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Item;
